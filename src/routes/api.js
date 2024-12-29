const express = require('express')
const { getAllUsers, createAUser, updateAUser } = require('../controllers/apiController')

const RouterAPI = express.Router()

RouterAPI.get('/', (req, res) => {
    res.send('Hello World Api!')
})

RouterAPI.get('/users', getAllUsers)

RouterAPI.post('/users', createAUser)

RouterAPI.put('/users', updateAUser)


module.exports = RouterAPI

