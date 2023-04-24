const express = require('express');
const router = express.Router();
const {businessController} = require('../controllers')

router.get('/', (req, res) => {
    businessController.getHeadlines(req, res)
})

module.exports = router