const express= require('express')
const app = express()
const helmet = require('helmet')
const compression = require('compression')
const morgan = require('morgan')
const dotenv = require('dotenv')
const path = require('node:path')
const cors = require('cors')




//init middleware
app.use(express.json())
app.use(express.urlencoded({
    extended: false,
    limit: '30mb'
}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(helmet())
app.use(compression())
app.use(morgan('dev'))
dotenv.config()

//check cor api
app.use(cors())


//init database
require('./database/mongodb.init')



//init routes
app.use('', require('./routes/index'))



//handle errors
app.use((req, res, next)=>{
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next)=>{
    const statusCode = error.status || 500
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: error.message || 'Internal Server Error'
    })
})

module.exports = app