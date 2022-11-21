const express = require('express')

const router = express.Router()

const Styler = require('../models/stylerModel')

router.get('/stylers', async (req, res) => {
    try {
        const stylers = await Styler.find()
        res.status(200).send({ data: stylers})
    } catch (err) {
        res.status(400).send({ error: err})
    }
})

module.exports = router