const connection = require('../config/database')

const getHomePage = (req, res) => {
    res.render('home.ejs')
}

const getTestPage = (req, res) => {
    res.render('example.ejs')
}

const postCreateUser = (req, res) => {
    let { email, name, city } = req.body

    connection.query(
        'INSERT INTO users (email, name, city) VALUES (?, ?, ?) ',
        [email, name, city],
        function (err, results) {
            res.send('created a new user')
        }
    )
}


module.exports = { getHomePage, getTestPage, postCreateUser }