const {Schema, model} = require('mongoose')

const DOCUMENT_NAME = 'KeyToken'
const COLLECTION_NAME = 'KeyTokens'

const keyTokenModel = new Schema({
    user:{type: Schema.Types.ObjectId, required: true, ref: 'User'},
    privateKey: {type: String, required: true},
    publicKey: {type: String, required: true},
    refreshTokenUsed: {type: Array, default: []},
    refreshToken: {type: String, required: true}
},{
    timestamps: true,
    collection: COLLECTION_NAME
})

module.exports = model(DOCUMENT_NAME, keyTokenModel)