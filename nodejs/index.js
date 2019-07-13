const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var bookController = require('./controllers/bookController');

var app = express();
app.use(body_parser.json());
app.use(cors({ origin: '*' }));

app.listen(3000, () => console.log('Server started at port:3000'));

app.use('/books',bookController);