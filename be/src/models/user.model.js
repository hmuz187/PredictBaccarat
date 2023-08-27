const { model, Schema } = require('mongoose')

const DOCUMENT_NAME = 'User'
const COLLECTION_NAME = 'Users'

const userModel = new Schema({
    username: { type: String, required: true, maxLength: 255 },
    email: { type: String, required: true, unique: true, maxLength: 255 },
    password: {type: String, required: true, maxLength: 255},
    
    passwordVerifyToken: {type:String},
    passwordResetExpire: {type:Date, default: Date.now},

    cart: {type: Array, default:[]},
    totalPaid: {type: Number, defaul:0},
    applyPayment: {type: Array, default: []}
    
    
}, {
    timestamps: true,
    collection: COLLECTION_NAME
})

module.exports = model(DOCUMENT_NAME, userModel )