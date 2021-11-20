const express = require('express');
const route = express.Router();
const foodsrouter = require('./detail/foods.detail.route');
const petsrouter = require('./detail/pets.detail.route');
const productsrouter = require('./detail/products.detail.route');
const detailcontroller = require('../app/controllers/detail.controller');

// route.use('/foods/test', detailcontroller.test);
route.use('/foods', foodsrouter);
route.use('/products', productsrouter);
route.use('/pets', petsrouter);
route.use('/', detailcontroller.index);

module.exports = route;
