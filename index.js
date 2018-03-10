// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.listen("hello", () => {
  console.log('We are live on ');
});