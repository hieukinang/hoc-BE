const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.port || 8888
const path = require('path')
const hostname = process.env.hostname


//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//config static file
app.use(express.static(path.join(__dirname, 'public')))

//khai bao route
app.get('/', (req, res) => {
    res.send('hello ccxxx')
})
app.get('/xxx', (req, res) => {
    res.send("dcm nghich")
})
app.get('/cc', (req, res) => {
    res.render("sample.ejs")
})
app.listen(port, hostname, () => {
    console.log(`listen on ${port}`)
})
//xong 21
