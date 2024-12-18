const getHomePage = (req, res) => {
    res.render('home.ejs')
}

const getTestPage = (req, res) => {
    res.render('example.ejs')
}


module.exports = { getHomePage, getTestPage }