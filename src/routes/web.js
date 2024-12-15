const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World! nodemon')
})

router.get('/test', (req, res) => {
    res.render('example.ejs')
})

module.exports = router

