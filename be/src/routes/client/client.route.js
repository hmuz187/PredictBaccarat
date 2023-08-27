//v1/client

const express = require('express')
const router = express.Router()

const clientController = require('../../controllers/client.controller')
const { asyncHandler } = require('../../helpers/asyncHandler')
const { authentication } = require('../../auth/user.auth')

router.post('/signup/getVerifyCode', asyncHandler(clientController.signUpGetVerifyCode))
router.post('/signup', asyncHandler(clientController.signUp))
router.post('/signin', asyncHandler(clientController.signIn))
router.post('/forgotPassword/getCode', asyncHandler(clientController.forgotPassword_getCode))
router.post('/forgotPassword/changePassword', asyncHandler(clientController.forgotPassword))

router.use(authentication)
router.post('/checkout/:id', asyncHandler(clientController.checkOut))
router.post('/logout', asyncHandler(clientController.logOut))
router.post('/getPredict', asyncHandler(clientController.getPredict))
router.get('/historyPayment', asyncHandler(clientController.historyPayment))
router.get('/profile', asyncHandler(clientController.profile))
router.get('/timePackageTotal', asyncHandler(clientController.timePackageTotal))
router.get('/applyPaymentList', asyncHandler(clientController.applyPaymentList))


module.exports = router