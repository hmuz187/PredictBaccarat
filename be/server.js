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