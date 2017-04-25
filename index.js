var axios = require('axios');
var express = require('express');
var xml = require('xml');

var PORT = process.env.PORT || 4000;
var app = express();

// Services
var gdelt = require('./services/gdelt');
var medium = require('./services/medium');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/gdelt/:query', function (req, res) {
  gdelt(req.params.query).then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.send('error');
  });;
})

app.get('/api/medium/feed/:profile', function(req, res) {
  // res.set({
  //   'Content-Type': 'text/xml',
  // });

  medium(req.params.profile).then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.send('error');
  });
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
