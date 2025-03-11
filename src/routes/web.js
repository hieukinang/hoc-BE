const express = require('express')
const router = express.Router()
const { getHomePage, img } = require('../controllers/homeController');



//khai bao route
// router.get('/', (req, res) => {
//     res.send('hello ccxxx')
// })==
router.get('/', getHomePage);
router.get('/cc', img)


module.exports = router;
