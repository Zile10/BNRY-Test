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
    fetch(`https://newsapi.org/v2/everything?q=${search.value}&from=2023-03-20&sortBy=publishedAt&apiKey=9bde1d04c4e44930aa400357aebc6237`)
    .then(res => {return res.json()})
    .then(data => {
        res.send(data)
    })
})


return app.listen(port, () => {
    console.log('Server is running...');
    console.log(`Listening on port ${port}...`);
})
