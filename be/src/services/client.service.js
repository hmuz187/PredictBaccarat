'use strict'

const bcrypt = require('bcrypt')
const crypto = require('node:crypto')

const { Types } = require('mongoose');



const timePackageModel = require('../models/timePackage.model')
const userModel = require('../models/user.model')
const invoiceModel = require('../models/invoice.model')


const { BadRequestError, AuthFailureError } = require('../helpers/error.response')
const { predictResult } = require('../auth/predict.auth')
const { getInfoData } = require('../utils/index.lodash')
const KeyTokenService = require('./keyToken.service')
const { createTokenPair } = require('../auth/token.auth')
const verifyCodeModel = require('../models/verifyCode.model')
const { sendMail } = require('../nodeMailer/verifyCodeMailer')
const { SchemaTypes } = require('mongoose')

class ClientService {

    static signUpGetVerifyCode = async ({ userEmail }) => {

        const holderUser = await userModel.findOne({ email: userEmail }).lean()
        if (holderUser) throw new BadRequestError(`Error: User is already sign up!`)

        const hashCode = crypto.randomBytes(3).toString('hex')

        const infoSendMail = await sendMail({ userEmail, code: hashCode, roleMessage: `Sign up` })

        // console.log(infoSendMail)

        if(!infoSendMail || (infoSendMail && infoSendMail.status==='error')) return ({
            messageId: null,
            status: 'error',
        })

        const filter = { email: userEmail }
        const update = { code: hashCode, role: 'signup' }
        const options = { upsert: true, new: true }

        const codeUser = await verifyCodeModel.findOneAndUpdate(filter, update, options)

        if (!codeUser) {
            return (
                {
                    verifyCode: null,
                    message: 'error sending to your mail!!! Please try again or check your informations'
                }
            )
        }

        return ({
            messageId: infoSendMail,
            userEmail
        })
    }

    static signUp = async ({ username, email, password, verifyCode }) => {
        const holderUser = await userModel.findOne({ email }).lean()
        if (holderUser) throw new BadRequestError(`Error: User is already sign up!`)

        const holderVerifyCode = await verifyCodeModel.findOne({ email }).lean()

        if (holderVerifyCode.code !== verifyCode) throw new BadRequestError(`Invalid verify Code`)

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = await userModel.create({ username, email, password: passwordHash })

        if (!newUser) {
            return {
                code: 200,
                metadata: null
            }
        }

        const privateKey = crypto.randomBytes(64).toString('hex')
        const publicKey = crypto.randomBytes(64).toString('hex')

        //creat accessToken, refreshToken && save to database keyToken && return publicKey ====> keyUser = publicKey
        const keyUser = await KeyTokenService.createKeyToken({ userId: newUser._id, privateKey, publicKey })

        if (!keyUser) throw new BadRequestError(`KeyUser is error!!!`)

        //decode token
        const token = await createTokenPair({ payload: { userId: newUser._id, email }, privateKey, publicKey })

        return {
            code: 201,
            metadata: {
                user: getInfoData({ fields: ['_id', 'username', 'email', 'cart', 'totalPaid', 'applyPayment'], object: newUser }),
                token
            }
        }
    }

    static signIn = async ({ email, password }) => {

        const holderUser = await userModel.findOne({ email }).lean()
        if (!holderUser) throw new BadRequestError(`Error: User is not sign up! Please SIGN UP`)

        const verifyPassword = await bcrypt.compare(password, holderUser.password)

        if (!verifyPassword) throw new AuthFailureError(`Authentication Error`)

        const privateKey = await crypto.randomBytes(64).toString('hex')
        const publicKey = await crypto.randomBytes(64).toString('hex')

        const token = await createTokenPair({ payload: { userId: holderUser._id, email }, privateKey, publicKey })

        await KeyTokenService.createKeyToken({
            userId: holderUser._id,
            privateKey, publicKey, refreshToken: token.refreshToken,
        })

        return {
            code: 201,
            metadata: {
                user: getInfoData({ fields: ['_id', 'username', 'email', 'cart', 'totalPaid', 'applyPayment'], object: holderUser }),
                token
            }
        }
    }

    static logOut = async (keyUser) => {
        const delKey = await KeyTokenService.removeKeyByUserId(keyUser._id)
        return delKey
    }

    static updateInfoUserAfterCheckOut = async ({ userEmail }) => {
        const holderUser = await userModel.findOne({ email:userEmail }).lean()
        if (!holderUser) throw new BadRequestError(`Error: User is not sign up! Please SIGN UP`)

        return {
            code: 200,
            metadata: {
                user: getInfoData({ fields: ['_id', 'username', 'email', 'cart', 'totalPaid', 'applyPayment'], object: holderUser }),
            }
        }
    }

    static forgotPassword_getCode = async ({ userEmail }) => {
        //sending mail
        const holderUser = await userModel.findOne({ email: userEmail }).lean()
        if (!holderUser) throw new BadRequestError(`Error: User is not sign up!`)

        const hashCode = crypto.randomBytes(3).toString('hex')

        //console.log(hashCode)

        const infoSendMail = await sendMail({ userEmail, code: hashCode, roleMessage: `Forgot Password ` })

        // update password in userModel
        const filter = { email: userEmail }
        const update = { code: hashCode, role: 'forgotPassword' }
        const options = { upsert: true, new: true }

        const codeUser = await verifyCodeModel.findOneAndUpdate(filter, update, options)

        if (!codeUser) {
            return (
                {
                    verifyCode: null,
                    message: 'error sending to your mail!!! Please try again or check your informations'
                }
            )
        }

        return ({
            messageId: infoSendMail,
            userEmail
        })
    }

    static forgotPassword = async ({ userEmail, password, verifyCode }) => {

        //check email
        const holderUser = await userModel.findOne({ email: userEmail }).lean()
        if (!holderUser) throw new BadRequestError(`Error: User is not sign up!`)


        const holderVerifyCode = await verifyCodeModel.findOne({ email: userEmail }).lean()

        if (holderVerifyCode.code !== verifyCode) throw new BadRequestError(`Invalid verify Code`)

        const passwordHash = await bcrypt.hash(password, 10)

        //change Password
        const filter = { email: userEmail }
        const update = { password: passwordHash }
        const options = { upsert: true, new: true }

        const updateUser = await userModel.findOneAndUpdate(filter, update, options)

        if (!updateUser) {
            return (
                {
                    code: 200,
                    message: 'error updating your password!!! Please try again or check your information',
                    metadata: null
                }
            )
        }

        return ({
            code: 201,
            metadata: {
                user: getInfoData({ fields: ['_id', 'username', 'email', 'cart', 'totalPaid', 'applyPayment'], object: updateUser }),
            }
        })

    }




    static getPredictResult = async ({ string, userId, userEmail }) => {

        const holderTime = await timePackageModel.findOne({ userId: new Types.ObjectId(userId) }).lean()

        if (!holderTime) throw new BadRequestError(`Error: Need to buy more TIME to get Prediction!`)

        return predictResult({ string, holderTime })
    }


    static getListInvoice = async (userId) => {

        // console.log(userId)
        const holdInvoices = await invoiceModel.find({ invoice_owner: new Types.ObjectId(userId) }).lean()

        if (!holdInvoices) {
            return {
                metadata: {
                    listInvoice: null,
                    countInvoice: 0
                },
            }
        }

        return {
            metadata: {
                listInvoice: holdInvoices,
                countInvoice: holdInvoices.length
            }
        }
    }


    static getTimePackageCurrent = async (userId) => {

        // console.log(userId)
        const holdTime = await timePackageModel.find({ userId: new Types.ObjectId(userId) }).lean()

        console.log(holdTime)

        if (!holdTime) {
            return {
                metadata: {
                    listTime: null,
                },
            }
        }

        return {
            metadata: {
                listTime: holdTime,
            }
        }
    }

}

module.exports = ClientService