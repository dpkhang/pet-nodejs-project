const express = require('express');
const route = express.Router();
const homecontroller = require('../app/controllers/HomeController');

route.use('/', homecontroller.index);

module.exports = route;
