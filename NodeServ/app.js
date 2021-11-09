const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

// const db = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/KRTAIndex', routes);

app.listen(3000);
