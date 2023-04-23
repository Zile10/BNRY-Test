const express = require('express');
const router = express.Router();
const {homeController} = require('../controllers')

router.get('/', (req, res) => {
    homeController.getHeadlines(req, res)
})

module.exports = router