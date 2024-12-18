const connection = require("../config/database")
const { getAllUsers } = require("../services/CRUDService")

const getHomePage = async (req, res) => {
    let users = await getAllUsers()
    res.render('home.ejs', { listUsers: users })
}

const getTestPage = (req, res) => {
    res.render('example.ejs')
}

const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body
    let [results, fields] = await connection.query(
        'INSERT INTO users (email, name, city) VALUES (?, ?, ?) ', [email, name, city]
    );
    console.log('>>>>>>check results: ', results)
    res.send('Create user successfully')
}

const getCreateUserPage = (req, res) => {
    res.render('create.ejs')
}

const getUpdateUserPage = (req, res) => {
    const userId = req.params.id
    console.log('>>>>>>check req.params: ', userId)
    res.render('edit.ejs')
}


module.exports = { getHomePage, getTestPage, postCreateUser, getCreateUserPage, getUpdateUserPage }