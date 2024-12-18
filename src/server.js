const express = require('express')
require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const WebRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOSTNAME

configViewEngine(app)
app.use('/', WebRoutes)

connection.query('select * from Users u', function (error, results, fields) {
    console.log('test data: ', results)
});


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})