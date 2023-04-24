const express = require('express');
const router = express.Router();
const {exploreController} = require('../controllers')

router.get('/', (req, res) => {
    exploreController.getSearchResults(req, res)
})

module.exports = router;