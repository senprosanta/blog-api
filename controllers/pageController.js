const path = require('path')


//Home page controller
exports.getHomePage = (req, res, next) => {
    try {
        res.status(200).sendFile(path.join(__dirname, '../public/pages/home.html'))
    } catch (err) {
        res.status(500).sendFile(path.join(__dirname, '../public/pages/error.html'))
    }
}

//About page controller
exports.getAboutPage = (req, res, next) => {
    try {
        res.status(200).sendFile(path.join(__dirname, '../public/pages/about.html'))
    } catch (err) {
        res.status(500).sendFile(path.join(__dirname, '../public/pages/error.html'))
    }
}

//Blog page controller
exports.getBlogPage = (req, res, next) => {
    try {
        res.status(200).sendFile(path.join(__dirname, '../public/pages/blog.html'))
    } catch (err) {
        res.status(500).sendFile(path.join(__dirname, '../public/pages/error.html'))
    }
}