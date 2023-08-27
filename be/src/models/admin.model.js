const {Schema, model} = require('mongoose')

const DOCUMENT_NAME = 'Admin'
const COLLECTION_NAME = 'Admins'

const adminModel = new Schema({
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    secretNumber: {
        type: Number, required: true, 
        min: [1, 'Secret Number must be above 1'],
        max: [99999999, 'Secret Number muse be below 99999999'],
    },
    role: {type: Array, default: []} //admin, writer, sales, developer, manager
}, {
    timestamps: true,
    collection: COLLECTION_NAME
})

module.exports = model(DOCUMENT_NAME, adminModel)