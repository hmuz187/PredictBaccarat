//v1/admin

const express = require('express')
const router = express.Router()

// router.post('/login', (req, res, next) => {
//     res.send('login')
// } )

router.get('/login', (req, res, next) => {
    res.send('login')
} )

router.get('/dashboard', (req, res, next) => {
    res.send('dashboard')
} )

router.get('/notification', (req, res, next) => {
    res.send('notification')
} )

router.get('/product', (req, res, next) => {
    res.send('product')
} )

router.get('/report', (req, res, next) => {
    res.send('report')
} )

router.get('/user', (req, res, next) => {
    res.send('user')
} )

module.exports = router