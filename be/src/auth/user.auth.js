'use strict'

const JWT = require('jsonwebtoken')
const { asyncHandler } = require('../helpers/asyncHandler')
const { AuthFailureError, NotFoundError } = require('../helpers/error.response')
const KeyTokenService = require('../services/keyToken.service')

const HEADER = {
    CLIENT_ID: 'h-client-id',
    AUTHORIZATION: 'athorization', //accesstoken
    REFRESHTOKEN: 'h-rtoken-id'
}

const authentication = asyncHandler(async (req, res, next) => {
    const userId = req.headers[HEADER.CLIENT_ID]
    if(!userId) throw new AuthFailureError(`Invalid Request`)

    const keyUser = await KeyTokenService.findByUserId(userId)
    if(!keyUser) throw new NotFoundError(`Not Found KeyUser!`)

    if(req.headers[HEADER.REFRESHTOKEN]){
        try{
            const refreshToken = req.headers[HEADER.REFRESHTOKEN]
            const decodeUser = JWT.verify(refreshToken, keyUser.privateKey)
            if(userId !== decodeUser.userId) throw new AuthFailureError(`Invalid request`)
            req.keyUser = keyUser
            req.user = decodeUser
            req.refreshToken = refreshToken

            return next()
        } catch(error){
            throw (error)
        }
    }

    const accessToken = req.headers[HEADER.AUTHORIZATION]
    if(!accessToken) throw new AuthFailureError(`Invalid request`)

    try{
        const decodeUser = JWT.verify(accessToken, keyUser.publicKey)
        if(userId !== decodeUser.userId) throw new AuthFailureError(`Invalid request`)
        req.keyUser = keyUser
        req.user = decodeUser
        return next()
    }catch(error){
        throw error
    }
})


module.exports = {
    authentication
}