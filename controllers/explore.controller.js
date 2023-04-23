const {countryModel} = require('../models');

module.exports = {
  getHeadlines(req, res){
    try {
      countryModel.getHeadlines((req, res))
    } catch (error) {
      console.log(error);
      res.status(400).send(error)
    }
  },
  getSearchResults(req, res){
    try {
      countryModel.getSearchResults((req, res))
    } catch (error) {
      console.log(error);
      res.status(400).send(error)
    }
  },
}