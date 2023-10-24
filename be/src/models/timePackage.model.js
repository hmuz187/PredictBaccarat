const { Schema, model } = require('mongoose')

const DOCUMENT_NAME = 'TimePackage'
const COLLECTION_NAME = 'TimePackages'

const timePackageModel = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    invoiceList: { type: Array, default: [] },
    logicMath: {type: Number, default: 0},
    aiPrediction: {type: Number, default: 0},
    naturalRandom: {type: Number, default: 0},
    fixPattern: {type: Number, default: 0},
}, {
    timestamps: true,
    collection: COLLECTION_NAME
})

module.exports = model(DOCUMENT_NAME, timePackageModel)