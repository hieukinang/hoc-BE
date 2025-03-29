require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.port || 8888
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const hostname = process.env.hostname
const webRouter = require('./routes/web')
const connection = require('./config/database.js')


//config template 
configViewEngine(app);

//khai bao route
app.use('/', webRouter);

app.listen(port, hostname, () => {
    console.log(`listen on ${port}`)
})




connection.query(
    'select	* from users',
    function (err, results, fields) {
        console.log("hehehe", results)
    }
)

//xong 30
