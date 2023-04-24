const {techModel} = require('../models');

module.exports = {
  getHeadlines(req, res){
    try {
        techModel.getHeadlines(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error)
    }
  },
}