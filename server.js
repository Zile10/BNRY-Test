const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 6969;
let search = {
    value: "cars"
}

app.set('port', process.env.PORT || 6969);
app.use(express.json(), cors());

// Allowing frontend access to backend
app.use((req, res, next)=> {
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next();
});


app.use('/', (req, res) => {
    fetch(`https://newsapi.org/v2/everything?q=${search.value}&sortBy=publishedAt&apiKey=9bde1d04c4e44930aa400357aebc6237`)
    .then(res => {return res.json()})
    .then(data => {
        res.send(data.articles)
    })
})
app.use('/rsa', (req, res) => {
    fetch(`https://newsapi.org/v2/everything?country=rsa&sortBy=publishedAt&apiKey=9bde1d04c4e44930aa400357aebc6237`)
    .then(res => {return res.json()})
    .then(data => {
        res.send(data.articles)
    })
})


return app.listen(port, () => {
    console.log('Server is running...');
    console.log(`Listening on port ${port}...`);
})

// Installation
// $ npm install newsapi --save
// Usage
// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('9bde1d04c4e44930aa400357aebc6237');
// // To query /v2/top-headlines
// // All options passed to topHeadlines are optional, but you need to include at least one of them
// newsapi.v2.topHeadlines({
//   sources: 'bbc-news,the-verge',
//   q: 'bitcoin',
//   category: 'business',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// });
// // To query /v2/everything
// // You must include at least one q, source, or domain
// newsapi.v2.everything({
//   q: 'bitcoin',
//   sources: 'bbc-news,the-verge',
//   domains: 'bbc.co.uk, techcrunch.com',
//   from: '2017-12-01',
//   to: '2017-12-12',
//   language: 'en',
//   sortBy: 'relevancy',
//   page: 2
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// });
// // To query sources
// // All options are optional
// newsapi.v2.sources({
//   category: 'technology',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       sources: [...]
//     }
//   */
// });