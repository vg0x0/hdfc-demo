const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from IBM Appsody!");
});
 
module.exports.app = app;
