const ClientService = require("../services/client.service")
const {OK, CREATED, SuccessResponse} = require('../helpers/success.response')

class ClientController {

    getPredict = async (req, res, next) => {
        new OK({
            message: 'OK',
            metadata: ClientService.getPredictResult(req.body)
        })
    }

    signUp = async (req, res, next) => {
        new OK({
            message: 'signUp sucess!',
            metadata: await ClientService.signUp(req.body),
        }).send(res)
    }

    signUpGetVerifyCode = async (req, res, next) => {
        new OK({
            message: 'signUp sucess!',
            metadata: await ClientService.signUpGetVerifyCode(req.body),
        }).send(res)
    }

    signIn = async (req, res, next) => {
        new OK({
            message: 'signIn sucess!',
            metadata: await ClientService.signIn(req.body),
        }).send(res)
    }

    logOut = async (req, res, next) => {
        new OK({
            message: 'logOut sucess!',
            metadata: await ClientService.logOut(req.keyUser),
        }).send(res)
    }

    forgotPassword_getCode = async (req, res, next) => {
        new OK({
            message: 'code is sending to your email!',
            metadata: await ClientService.forgotPassword_getCode(req.body),
        }).send(res)
    }

    forgotPassword = async (req, res, next) => {
        new OK({
            message: 'Succes change Password! Please signIn',
            metadata: await ClientService.forgotPassword(req.body), //email, codeVerify, newpassword
        }).send(res)
    }

    checkOut = async (req, res, next) => {
        new OK({
            message: 'logOut sucess!',
            metadata: await ClientService.logOut(req.keyUser),
        }).send(res)
    }

    historyPayment = (req, res, next) => {
        res.status(200).json({
            message: 'OK',
            data: 'historyPayment'
        })
    }

    profile = (req, res, next) => {
        res.status(200).json({
            message: 'OK',
            data: 'profile'
        })
    }

    timePackageTotal = (req, res, next) => {
        res.status(200).json({
            message: 'OK',
            data: 'timePackageTotal'
        })
    }

    applyPaymentList = (req, res, next) => {
        res.status(200).json({
            message: 'OK',
            data: 'applyPaymentList'
        })
    }

}

module.exports = new ClientController()