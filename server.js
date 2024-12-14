const express = require('express')
const app = express()
const port = 8081

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('Just make a test!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})