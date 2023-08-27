const {reasonPhrases, statusCodes} = require('./httpResponse')
// const statusCodes = require('./statusCodes')
// const reasonPhrases = require('./reasonPhrases')



class ErrorResponse extends Error {
    constructor(message, status){
        super(message)
        this.status = status
    }

}

class BadRequestError extends ErrorResponse {
    constructor(message=reasonPhrases.BAD_REQUEST, status = statusCodes.BAD_REQUEST){
        super(message, status)
    }
}

class AuthFailureError extends ErrorResponse {
    constructor(message=reasonPhrases.UNAUTHORIZED, status = statusCodes.UNAUTHORIZED){
        super(message, status)
    }
}

class NotFoundError extends ErrorResponse{
    constructor(message = reasonPhrases.NOT_FOUND, status= statusCodes.NOT_FOUND){
        super(message, status)
    }
}

module.exports = {
    ErrorResponse,
    BadRequestError,
    AuthFailureError,
    NotFoundError
}