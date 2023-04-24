const {businessModel} = require('../models');

module.exports = {
  getHeadlines(req, res){
    try {
        businessModel.getHeadlines(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error)
    }
  },
}