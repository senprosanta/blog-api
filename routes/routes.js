const express = require('express')

const pageController = require('../controllers/pageController')

const router = express.Router()

//Routes
//Home page
router.route('/').get(pageController.getHomePage)

//About page
router.route('/about').get(pageController.getAboutPage)

//Blog page
router.route('/blog').get(pageController.getBlogPage)

//Export router
module.exports = router