const express = require('express');
const app = express();

var port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log('We are live on ');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});