//v1/public

const express = require('express')
const publicController = require('../../controllers/public.controller')
const router = express.Router()

router.get('/try/algorithm', (req, res) => {res.send('algo')} )

router.post('/try/tableResultString', publicController.tableResultString)

router.get('/package/list', (req, res) => {res.send('package list')})

module.exports = router