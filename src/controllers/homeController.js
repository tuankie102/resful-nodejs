const getHomePage = (req, res) => {
    res.send('Hello World! nodemon')
}

const getTestPage = (req, res) => {
    res.render('example.ejs')
}


module.exports = { getHomePage, getTestPage }