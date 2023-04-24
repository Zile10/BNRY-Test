const express = require('express');
const router = express.Router();
const {techController} = require('../controllers')

router.get('/', (req, res) => {
    techController.getHeadlines(req, res)
})

module.exports = router