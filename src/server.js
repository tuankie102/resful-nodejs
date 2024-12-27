const express = require('express')
require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const WebRoutes = require('./routes/web')
const ApiRoutes = require('./routes/api')
const connection = require('./config/database')


const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOSTNAME

// config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

configViewEngine(app)
app.use('/', WebRoutes);
app.use('/v1/api/', ApiRoutes);

(async () => {
    try {
        await connection(); // Ensure the connection is awaited
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
})();