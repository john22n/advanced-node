'use strict';
require('dotenv').config();
const express = require('express');
const DB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

fccTesting(app);
app.set('view engine', 'pug');
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.route('/').get((req, res) => {
    res.render(process.cwd() + '/views/pug')
})

app.listen(process.env.PORT || 3000, () => {
    console.log(process.env.PORT);
})