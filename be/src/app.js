const express = require('express')
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
// app.use(helmet({   contentSecurityPolicy: false }))
app.use(compression())
app.use(morgan('dev'))
dotenv.config()

//check cor api


 app.use(cors())


//init database
require('./database/mongodb.init')



//init routes
app.use('/api/', require('./routes/index'))



//handle errors
app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    const statusCode = error.status || 500
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: error.message || 'Internal Server Error'
    })
})

module.exports = app




























// const corsOptions ={
//     // origin:'*', 
//     origin: ["https://www.sinhli247.com","http://192.168.40.110:2002","http://103.116.105.147:2002", "http://localhost:3000"],
//     //  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
//     //  allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
//     //  credentials: true,
//     // optionSuccessStatus:200,
//  }
 
//  app.use(cors(corsOptions))





// app.use(cors())
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", '*');
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
//     next();
// });
