'use strict'
const os = require('node:os')
const process = require('node:process')
const mongoose = require('mongoose')

const countConnection = () => {
    return mongoose.connections.length
}

const checkOverLoad = () => {
    const numConnection = mongoose.connections.length
    const numCore = os.cpus().length
    const memoryUsage = process.memoryUsage().rss

    const maxConnection = numCore * 10
    if(maxConnection<numConnection){
        console.log(`detected overload in database!`)
        return true
    }

    return false
}

module.exports = {
    countConnection,
    checkOverLoad
}