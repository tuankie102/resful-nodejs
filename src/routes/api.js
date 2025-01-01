const express = require('express')
const { getAllUsers, createAUser, updateAUser, deleteAUser, postUploadSingleFile, postUploadMultipleFile } = require('../controllers/apiController')
const { postCreateACustomer, postCreateManyCustomer } = require('../controllers/customerController')

const RouterAPI = express.Router()

RouterAPI.get('/', (req, res) => {
    res.send('Hello World Api!')
})

RouterAPI.get('/users', getAllUsers)
RouterAPI.post('/users', createAUser)
RouterAPI.put('/users', updateAUser)
RouterAPI.delete('/users', deleteAUser)

RouterAPI.post('/file', postUploadSingleFile)
RouterAPI.post('/files', postUploadMultipleFile)

RouterAPI.post('/customers', postCreateACustomer)
RouterAPI.post('/customers-many', postCreateManyCustomer)



module.exports = RouterAPI

