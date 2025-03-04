require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.port || 8888
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const hostname = process.env.hostname
const webRouter = require('./routes/web')

//config template 
configViewEngine(app);

//khai bao route
app.use('/', webRouter);

app.listen(port, hostname, () => {
    console.log(`listen on ${port}`)
})

//xong 24
