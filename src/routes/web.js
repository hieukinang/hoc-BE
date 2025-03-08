const express = require('express')
const router = express.Router()



//khai bao route
router.get('/', (req, res) => {
    res.send('hello ccxxx')
})
router.get('/xxx', (req, res) => {
    res.send("dcm nghich")
})
router.get('/xh', (req, res) => {
    res.send("dcm nghichvl")
})
router.get('/xscasd', (req, res) => {
    res.send("dcm nghichvldfasdf")
})
router.get('/cc', (req, res) => {
    res.render("sample.ejs")
})



module.exports = router;
