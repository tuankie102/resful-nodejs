const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOSTNAME
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.render('example.ejs')
})


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})