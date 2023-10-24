const express = require('express')
const router = express.Router()

router.use('/v1/admin', require('./admin/admin.route'))
router.use('/v1/client', require('./client/client.route'))
router.use('/v1/public', require('./public/public.route'))
router.use('/v1/payment/', require('./payment/paypal'))

module.exports = router