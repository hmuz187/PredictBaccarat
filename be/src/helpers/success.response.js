'use strict'

const statusCodes = require('./statusCodes')
const reasonPhrases = require('./reasonPhrases')


class SuccessResponse{
    constructor({message, statusCode = statusCodes.OK, reasonPhrase = reasonPhrases.OK, metadata={}}){
        this.message = message ? message : reasonPhrase
        this.status= statusCode
        this.metadata = metadata
    }

    send(res, headers={}) {
        return res.status(this.status).json(this)
    }
}

class OK extends SuccessResponse {
    constructor({message, metadata}){
        super({message, metadata})
    }
}

class CREATED extends SuccessResponse {
    constructor({message, reasonPhrase=reasonPhrases.CREATED, statusCode= statusCodes.CREATED, metadata, option={}}){
        super({message, reasonPhrase, statusCode, metadata})
        this.option=option
    }
}


module.exports = {
    SuccessResponse,
    OK,
    CREATED, 
}