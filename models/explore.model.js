const {NEWS_API_KEY} = process.env
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(NEWS_API_KEY);


module.exports = {
  getSearchResults(req, res){
    newsapi.v2.everything({
        qInTitle: req.body.query || 'the',
        category: req.body.category || null,
        language: req.body.lang || 'en',
        sortBy: 'relevancy',
      }).then(response => {
        res.send(response)
    });
  },
}