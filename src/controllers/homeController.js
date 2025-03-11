
const getHomePage = (req, res) => {
    //processdata
    //callmodel
    res.send("hehehehe")
}
const img = (req, res) => {
    res.render('sample.ejs')
}


module.exports = {
    getHomePage,
    img
}