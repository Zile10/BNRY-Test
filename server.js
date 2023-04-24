// Variables
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
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
app.use('/tech', routes.techRoutes)
app.use('/business', routes.businessRoutes)
app.use('/search', routes.exploreRoutes)
app.use('/', routes.homeRoutes)


// Server Start
return app.listen(port, () => {
    console.log('Server is running...');
    console.log(`Listening on port ${port}...`);
})