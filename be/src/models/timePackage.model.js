const { Schema, model } = require('mongoose')

const DOCUMENT_NAME = 'TimePackage'
const COLLECTION_NAME = 'TimePackages'

const timePackageModel = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    invoiceList: { type: Array, default: [] },
    reservationTime: {
        type: Object,
        default: {
            logicMath: { total: 0, active: Date.now(), expire: Date.now() }, //[day, dateActive, dateExpire]
            aiPrediction: { total: 0, active: Date.now(), expire: Date.now() },  //[day, dateActive, dateExpire]
            naturalRandom: { total: 0, active: Date.now(), expire: Date.now() },  //[day, dateActive, dateExpire]
            fixPatter: { total: 0, active: Date.now(), expire: Date.now() },  //[day, dateActive, dateExpire]
        }
    },
}, {
    timestamps: true,
    collection: COLLECTION_NAME
})

module.exports = model(DOCUMENT_NAME, timePackageModel)