const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');

app.use(bodyParser.json());
app.use(cors());
app.use(routes);

module.exports = app;