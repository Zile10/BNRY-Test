// Variables
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const port = process.env.PORT || 6969;


// Server Setup
app.set('port', port);
app.use(express.json(), cors());


// Allowing access to api
app.use((req, res, next)=> {
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next();
});


// Routes
app.use('/za', (req, res) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=za&apiKey=9bde1d04c4e44930aa400357aebc6237`)
    .then(res => {return res.json()})
    .then(data => {
        res.send(data.articles)
    })
})

app.use('/', routes.homeRoutes)

// app.use('/', (req, res) => {
//     fetch(`https://newsapi.org/v2/everything?q=cats&sortBy=publishedAt&apiKey=9bde1d04c4e44930aa400357aebc6237`)
//     .then(res => {return res.json()})
//     .then(data => {
//         res.send(data.articles)
//     })
// })


// Server Start
return app.listen(port, () => {
    console.log('Server is running...');
    console.log(`Listening on port ${port}...`);
})