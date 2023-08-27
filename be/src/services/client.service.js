'use strict'

const bcrypt = require('bcrypt')
const crypto = require('node:crypto')


const timePackageModel = require('../models/timePackage.model')
const userModel = require('../models/user.model')

const { BadRequestError, AuthFailureError } = require('../helpers/error.response')
const { predictResult } = require('../auth/predict.auth')
const {getInfoData} = require('../utils/index.lodash')
const KeyTokenService = require('./keyToken.service')
const { createTokenPair } = require('../auth/token.auth')

class ClientService {

    static getPredictResult = async ({ string, userId }) => {
        const holderTime = await timePackageModel.findOne({ userId }).lean()

        if (!holderTime) throw new BadRequestError(`Error: Need to buy more TIME to get Prediction!`)


        const reservationTime = holderTime.reservationTime

        return predictResult({ string, reservationTime })
    }


    static signUpGetVerifyCode = async({email}) => {

    }

    static signUp = async ({ username, email, password }) => {
        const holderUser = await userModel.findOne({ email }).lean()
        if (holderUser) throw new BadRequestError(`Error: User is already sign up!`)

        const passwordHash = await bcrypt.hash(password, 10)
        
        const newUser = await userModel.create({username, email, password:passwordHash})

        if(!newUser) {
            return {
                code: 200,
                metadata: null
            }
        }

        const privateKey = crypto.randomBytes(64).toString('hex')
        const publicKey = crypto.randomBytes(64).toString('hex')

        //creat accessToken, refreshToken && save to database keyToken && return publicKey ====> keyUser = publicKey
        const keyUser = await KeyTokenService.createKeyToken({userId: newUser._id, privateKey, publicKey}) 
        
        if(!keyUser) throw new BadRequestError(`KeyUser is error!!!`)

        //decode token
        const token = await createTokenPair({payload:{userId: newUser._id, email}, privateKey, publicKey})

        return {
            code: 201,
            metadata: {
                user: getInfoData({fields: ['_id', 'username', 'email', 'cart', 'totalPaid', 'applyPayment' ], object: newUser}),
                token
            }
        }
    }

    static signIn = async ({email, password}) => {

        const holderUser = await userModel.findOne({ email }).lean()
        if (!holderUser) throw new BadRequestError(`Error: User is not sign up! Please SIGN UP`)

        const verifyPassword = await bcrypt.compare(password, holderUser.password)

        if(!verifyPassword) throw new AuthFailureError(`Authentication Error`)

        const privateKey = await crypto.randomBytes(64).toString('hex')
        const publicKey = await crypto.randomBytes(64).toString('hex')
        
        const token = await createTokenPair({payload:{userId:holderUser._id, email}, privateKey, publicKey})

        await KeyTokenService.createKeyToken({
            userId: holderUser._id,
            privateKey, publicKey, refreshToken: token.refreshToken,
        })

        return {
            code: 201,
            metadata: {
                user: getInfoData({fields: ['_id', 'username', 'email', 'cart', 'totalPaid', 'applyPayment' ], object: holderUser}),
                token
            }
        }
    }

    static logOut = async (keyUser) => {
        const delKey = await KeyTokenService.removeKeyByUserId(keyUser._id)
        return delKey
    }

    static forgotPassword_getCode = async(email) => {
        //sending mail
    }

    static forgotPassword = async({email, codeVerify}) => {
        //change Password
    }
}

module.exports = ClientService