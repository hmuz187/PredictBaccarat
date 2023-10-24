'use strict'


const { Schema, model } = require('mongoose')

const DOCUMENT_NAME = 'Invoice'
const COLLECTION_NAME = 'Invoices'

const invoiceModel = new Schema({
    invoice_owner: { type: Schema.Types.ObjectId, ref: 'User' },
    invoice_totalPayment: { type: Number, default: 0 },
    invoice_applyPayment: { type: String, enum: ['Paypal', 'Card', 'GooglePay', 'Payoo', 'Stripe'], default: '' },
    invoice_detail: { type: Array, default: [] },
    invoice_status: { type: String, enum: ['paid', 'none', 'check'], default: 'none' },
    invoice_orderId: {type: String, required: true, unique: true}
}, {
    timestamps: true,
    collection: COLLECTION_NAME
})


module.exports = model(DOCUMENT_NAME, invoiceModel)

























// const { Schema, model } = require('mongoose')

// const DOCUMENT_NAME = 'Invoice'
// const COLLECTION_NAME = 'Invoices'

// const invoiceModel = new Schema({
//     invoice_owner: { type: Schema.Types.ObjectId, ref: 'User' },
//     invoice_totalPayment: { type: Number, default: 0 },
//     invoice_applyPayment: { type: String, enum: ['Paypal', 'Card', 'GooglePay', 'Payoo'], default: '' },
//     invoice_detail: { type: Array, default: [] }
// }, {
//     timestamps: true,
//     collection: COLLECTION_NAME
// })


// const logicMathModel = new Schema({
//     invoice_id: { type: Schema.Types.ObjectId, ref: 'Invoice' },
//     package: { type: String, enum: ['day', 'week', 'month', 'year'], default: '' },
//     quantity: { type: Number },
//     totalPrice: { type: Number },
//     totalPackageTime: { type: Number, default: 0 },
//     activeDate: { type: Date, default: Date.now() }, // type: Date,  default: Date.now + 3*60*60*1000 // 3 hours from now
//     expireDate: { type: Date, default: Date.now() }
// }, {
//     timestamps: true,
//     collection: 'LogicMath'
// })

// const aiPredictionModel = new Schema({
//     invoice_id: { type: Schema.Types.ObjectId, ref: 'Invoice' },
//     package: { type: String, enum: ['day', 'week', 'month', 'year'], default: '' },
//     quantity: { type: Number },
//     totalPrice: { type: Number },
//     totalPackageTime: { type: Number, default: 0 },
//     activeDate: { type: Date, default: Date.now() }, // type: Date,  default: Date.now + 3*60*60*1000 // 3 hours from now
//     expireDate: { type: Date, default: Date.now() }
// }, {
//     timestamps: true,
//     collection: 'AIPredictions'
// })

// const naturalRandomModel = new Schema({
//     invoice_id: { type: Schema.Types.ObjectId, ref: 'Invoice' },
//     package: { type: String, enum: ['day', 'week', 'month', 'year'], default: '' },
//     quantity: { type: Number },
//     totalPrice: { type: Number },
//     totalPackageTime: { type: Number, default: 0 },
//     activeDate: { type: Date, default: Date.now() }, // type: Date,  default: Date.now + 3*60*60*1000 // 3 hours from now
//     expireDate: { type: Date, default: Date.now() }
// }, {
//     timestamps: true,
//     collection: 'NaturalRandoms'
// })

// const fixPatternModel = new Schema({
//     invoice_id: { type: Schema.Types.ObjectId, ref: 'Invoice' },
//     package: { type: String, enum: ['day', 'week', 'month', 'year'], default: '' },
//     quantity: { type: Number },
//     totalPrice: { type: Number },
//     totalPackageTime: { type: Number, default: 0 },
//     activeDate: { type: Date, default: Date.now() }, // type: Date,  default: Date.now + 3*60*60*1000 // 3 hours from now
//     expireDate: { type: Date, default: Date.now() }
// }, {
//     timestamps: true,
//     collection: 'FixPatterns'
// })

// module.exports = {
//     invoice: model(DOCUMENT_NAME, invoiceModel),
//     logicMath: model('LogicMath', logicMathModel),
//     aiPrediction: model('AIPrediction', aiPredictionModel),
//     naturalRandom: model('NaturalRandom', naturalRandomModel),
//     fixPattern: model('FixPattern', fixPatternModel),

// }