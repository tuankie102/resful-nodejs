const express = require('express')
require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const WebRoutes = require('./routes/web')
const mysql = require('mysql2');

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOSTNAME

configViewEngine(app)
app.use('/', WebRoutes)

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejs',
    port: 3306,
    password: '123456'
});

connection.query('select * from Users u', function (error, results, fields) {
    console.log('test data: ', results)
    console.log('test field: ', fields)
});


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})