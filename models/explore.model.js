const {NEWS_API_KEY} = process.env
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(NEWS_API_KEY);


module.exports = {
  getSearchResults(req, res){
    let newsapiObj = {
        qInTitle: req.body.query || '',
        category: req.body.category || null,
        language: req.body.lang || 'en',
        sortBy: 'relevancy',
      }
    if(!req.body.query) newsapiObj.q = 'the'
    newsapi.v2.everything(newsapiObj).then(response => {
        res.send(response)
    });
  },
}