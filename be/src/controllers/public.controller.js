'use strict'

const PublicService = require("../services/public.service")
const {OK, SuccessResponse, CREATED} = require('../helpers/success.response')

class PublicController {

    tableResultString = (req, res, next) =>{
        // new OK({
        //     message: 'Get result example sucess!',
        //     metadata: PublicService.tableResultString(req.body),
        //     // options: {
        //     //     limit: 10,
        //     //     new: 5
        //     // }
        // }).send(res)
        res.status(200).json({
            message: 'OK',
            data: PublicService.tableResultString(req.body)
        })
    }
}

module.exports = new PublicController()