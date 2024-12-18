const connection = require('../config/database')

const getHomePage = (req, res) => {
    res.render('home.ejs')
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


module.exports = { getHomePage, getTestPage, postCreateUser, getCreateUserPage }