//v1/client

const express = require('express')
const router = express.Router()

const clientController = require('../../controllers/client.controller')
const { asyncHandler } = require('../../helpers/asyncHandler')
const { authentication } = require('../../auth/user.auth')

router.post('/signup/getVerifyCode', asyncHandler(clientController.signUpGetVerifyCode))
router.post('/signup', asyncHandler(clientController.signUp))
router.post('/signin', asyncHandler(clientController.signIn))
router.post('/forgotPassword/getVerifyCode', asyncHandler(clientController.forgotPassword_getCode))
router.post('/forgotPassword/', asyncHandler(clientController.forgotPassword))
router.post('/updateInfoUserAfterCheckOut', asyncHandler(clientController.updateInfoUserAfterCheckOut))



// router.use(authentication)
router.post('/checkout/:id', asyncHandler(clientController.checkOut))
router.post('/logout', asyncHandler(clientController.logOut))
router.post('/getPredict', asyncHandler(clientController.getPredict))
router.get('/historyPayment', asyncHandler(clientController.historyPayment))
router.get('/profile', asyncHandler(clientController.profile))
router.get('/timePackageTotal', asyncHandler(clientController.timePackageTotal))
router.get('/applyPaymentList', asyncHandler(clientController.applyPaymentList))

router.get('/getList/invoice/:id', asyncHandler(clientController.getListInvoice))
router.get('/getTimePackageCurrent/:id', asyncHandler(clientController.getTimePackageCurrent))



module.exports = router