const {exploreModel} = require('../models');

module.exports = {
  getSearchResults(req, res){
    try {
      exploreModel.getSearchResults(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error)
    }
  },
}