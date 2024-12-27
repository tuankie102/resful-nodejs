const express = require('express')
const { getAllUsers } = require('../controllers/apiController')

const RouterAPI = express.Router()

RouterAPI.get('/', (req, res) => {
    res.send('Hello World Api!')
})

RouterAPI.get('/users', getAllUsers)


module.exports = RouterAPI

