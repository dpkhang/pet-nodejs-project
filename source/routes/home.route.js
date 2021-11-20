const express = require('express');
const route = express.Router();
const homecontroller = require('../app/controllers/home.controller');

//route home
route.use('/', homecontroller.index);

module.exports = route;
