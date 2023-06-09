const {NEWS_API_KEY} = process.env
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(NEWS_API_KEY);

module.exports = {
  getHeadlines(req, res){
    newsapi.v2.topHeadlines({
      language: 'en',
    }).then(response => {
      res.send(response)
    }).catch(error => {
      console.log(error);
      res.status(500).send('Error getting headlines');
    });
  },
}


// Usage
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

