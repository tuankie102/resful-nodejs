const connection = require("../config/database")
const User = require('../models/User')
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require("../services/CRUDService")

const getHomePage = async (req, res) => {
    // let users = await getAllUsers()
    let users = await User.find({})
    res.render('home.ejs', { listUsers: users })
}

const getTestPage = (req, res) => {
    res.render('example.ejs')
}

const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body

    // User.create(req.body)
    User.create({
        email: email,
        name: name,
        city: city
    })

    res.send('Create user successfully')
}

const getCreateUserPage = (req, res) => {
    res.render('create.ejs')
}

const getUpdateUserPage = async (req, res) => {
    const userId = req.params.id
    // let user = await getUserById(userId)
    let user = await User.findById(userId)
    res.render('edit.ejs', { editUser: user })
}

const postUpdateUser = async (req, res) => {
    let { userId, email, name, city } = req.body
    // updateUserById(userId, email, name, city)
    await User.updateOne({ _id: userId }, {
        email: email,
        name: name,
        city: city
    })
    res.redirect('/')
}

const getDeleteUserPage = async (req, res) => {
    const userId = req.params.id
    let user = await getUserById(userId)
    res.render('delete.ejs', { editUser: user })
}

const postDeleteUser = async (req, res) => {
    deleteUserById(req.body.userId)
    res.redirect('/')
}


module.exports = {
    getHomePage, getTestPage, postCreateUser,
    getCreateUserPage, getUpdateUserPage, postUpdateUser, getDeleteUserPage, postDeleteUser
}