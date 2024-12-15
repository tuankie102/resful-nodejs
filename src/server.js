const express = require('express')
require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const WebRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOSTNAME

configViewEngine(app)
app.use('/', WebRoutes)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})