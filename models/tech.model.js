const {NEWS_API_KEY} = process.env
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(NEWS_API_KEY);


module.exports = {
  getHeadlines(req, res){
    newsapi.v2.topHeadlines({
      category: 'technology',
      language: 'en',
      sortBy: 'relevancy',
    }).then(response => {
      res.send(response)
    });
  },
}

