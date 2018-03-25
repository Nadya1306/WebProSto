const express = require('express');
const app = express();
const fs = require('fs');

var port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log('We are live on - ' + port);
});

app.get('/', function (req, res) {
  const content = fs.readFileSync('list.json');
  const data = JSON.parse(content);
  res.send(data);
});
