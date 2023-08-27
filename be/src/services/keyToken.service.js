'use strict'

const keyTokenModel = require('../models/keyToken.model')

const {Types} = require('mongoose')

class KeyTokenService {

    static createKeyToken = async({userId, privateKey, publicKey, refreshToken}) => {
        try{
            const filter = {user: userId}
            const update = {publicKey, privateKey, refreshTokenUsed:[], refreshToken}
            const options = {upsert: true, new: true}

            const token = await keyTokenModel.findOneAndUpdate(filter, update, options)

            return token ? token.publicKey : null

        } catch(error) {
            return (error)
        }
    } 

    static findByUserId = async (userId) => {
        return await keyTokenModel.findOne({user: userId})
    }

    static removeKeyByUserId = async (userId) => {
        return await keyTokenModel.deleteOne({_id: userId})
    }

}

module.exports = KeyTokenService