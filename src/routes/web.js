const express = require('express')
const { getHomePage, getTestPage, postCreateUser, getCreateUserPage, getUpdateUserPage, postUpdateUser,
    getDeleteUserPage, postDeleteUser
}
    = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomePage)

router.get('/test', getTestPage)

router.get('/create', getCreateUserPage)

router.get('/update/:id', getUpdateUserPage)

router.get('/delete/:id', getDeleteUserPage)

router.post('/create-user', postCreateUser)

router.post('/update-user', postUpdateUser)

router.post('/delete-user', postDeleteUser)

module.exports = router

