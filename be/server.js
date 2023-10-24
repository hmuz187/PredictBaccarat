const app = require('./src/app')

const port = process.env.PORT

const server = app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})

process.on('SIGNINT', ()=>{
    server.close(()=>{
        console.log(`server is closed`)
    })
})


























// const app = require('./src/app')
// const https = require('node:https')
// const http = require('http')
// const fs = require('fs')

// const options = {
    
//     //key: fs.readFileSync('./src/secret/selfsigned.key', "utf8"),
//     //cert: fs.readFileSync('./src/secret/selfsigned.crt', "utf8"),


//     //key: fs.readFileSync('./src/secret/selfsigned.key', "utf8"),
//     //cert: fs.readFileSync('./src/secret/selfsigned.crt', "utf8"),

//     //key: fs.readFileSync('./src/secret/key.pem'),
//     //cert: fs.readFileSync('./src/secret/cert.pem'),

//     key: fs.readFileSync('server.key'),
//     cert: fs.readFileSync('server.pem'),

//     //key: fs.readFileSync('./src/secret/new/server-key.pem', "utf8"),
//     //cert: fs.readFileSync('./src/secret/new/server-cert.pem', "utf8"),
// }

// const port = process.env.PORT || 2002

// http.createServer(app).listen(port, () => console.log(`server is running https`));
// https.createServer(options, app).listen(2443, () => console.log(`server is running https`));








// const app = require('./src/app')
// const https = require('node:https')
// const http = require('http')
// const fs = require('fs')

// const port = process.env.PORT

// const options = {
//     //key: fs.readFileSync('./src/secret/selfsigned.key', "utf8"),
//     //cert: fs.readFileSync('./src/secret/selfsigned.crt', "utf8"),

//     key: fs.readFileSync('./src/secret/key.pem',"utf8"),
//     cert: fs.readFileSync('./src/secret/cert.pem', "utf8"),

//     //key: fs.readFileSync('./src/secret/new/server-key.pem', "utf8"),
//     //cert: fs.readFileSync('./src/secret/new/server-cert.pem', "utf8"),
// }

// const server = https.createServer(options, app).listen(443, ()=>{
//     console.log(`server is running on ${port}`)
// })

// process.on('SIGNINT', ()=>{
//     server.close(()=>{
//         console.log(`server is closed`)
//     })
// })





// const app = require('./src/app')
// const https = require('node:https')
// const http = require('http')
// const fs = require('fs')

// const options = {
//     // key: fs.readFileSync('./src/secret/selfsigned.key', "utf8"),
//     // cert: fs.readFileSync('./src/secret/selfsigned.crt', "utf8"),

//     key: fs.readFileSync('./src/secret/key.pem'),
//     cert: fs.readFileSync('./src/secret/cert.pem'),

//     //key: fs.readFileSync('./src/secret/new/server-key.pem', "utf8"),
//     //cert: fs.readFileSync('./src/secret/new/server-cert.pem', "utf8"),
// }

// const port = process.env.PORT || 2002

// http.createServer(app).listen(port, () => console.log(`server is running https`));
// https.createServer(options, app).listen(2443, () => console.log(`server is running https`));





















// const whitelist = config.CORS_WHITELIST;
//   const corsOptions = {
//     origin(origin, callback) {
//       const isOriginAllowed = whitelist.indexOf(origin) !== -1;
//       const allowAccessAnyway = whitelist.length === 0;
//       if (isOriginAllowed || allowAccessAnyway) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//   };
//   const httpsOptions = {
//     key: fs.readFileSync('./secrets/key.pem'),
//     cert: fs.readFileSync('./secrets/cert.pem'),
//   };
//   app.use(cors(corsOptions));
//   app.useGlobalFilters(new ErrorFilter());
//   await app.listen(config.PORT);
//   await https.createServer(httpsOptions, server).listen(443);
//   logger.log(`Listening on port ${config.PORT}.`);