// server.js
const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();

const port = 443;
app.listen(port, () => {
  console.log('We are live on ' + port);
});

