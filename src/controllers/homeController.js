const getHomePage = (req, res) => {
    res.render('home.ejs')
}

const getTestPage = (req, res) => {
    res.render('example.ejs')
}

const postCreateUser = (req, res) => {
    console.log(">>> req.body: ", req.body)
    res.send('create a new user')
}


module.exports = { getHomePage, getTestPage, postCreateUser }