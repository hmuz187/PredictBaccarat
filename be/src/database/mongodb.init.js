'use strict'

require('dotenv').config()
const mongoose = require('mongoose')
const {countConnection, checkOverLoad} = require('../helpers/checkConnect.mongodb')
const {db:{host, port, name}} = require('../config/database.config')
const connectionString = `mongodb://${host}:${port}/${name}`
// const connectionString = process.env.MONGODB_URL


class Database {
    constructor(){
        this.connect()
    }

    connect(type='mongodb'){
        if(checkOverLoad()) {
            mongoose.set('debug', true)
            mongoose.set('debug', {color: true})
        }

        mongoose.connect(connectionString, {
            maxPoolSize: 50
        }).then(()=> console.log(`connected to database: `, countConnection()))
        .catch((error)=> console.log(`failed to connect database, ${error}`))
    }

    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()

module.exports = instanceMongodb
