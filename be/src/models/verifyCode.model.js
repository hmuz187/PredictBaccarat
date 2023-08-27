const {Schema, model} = require('mongoose')

const DOCUMENT_NAME = 'VerifyCode'
const COLLECTION_NAME = 'VerifyCodes'

const verifyCodeModel = new Schema({
    email:{type: String, required: true, unique: true},
    code: {type: String, required: true},
    role: {type: String, enum: ['signup', 'signin', 'forgotPassword', 'changePassword', 'payment', 'checkingPayment', 'ask'], default:'signup'}
}, {
    timestamps: true,
    expireAfterSeconds: 600,  //1mins=60, 1hour = 3600, 24hour = 86400
    collection: COLLECTION_NAME
})

module.exports = model(DOCUMENT_NAME, verifyCodeModel)