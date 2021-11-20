const route = require('express').Router();
const foodcontroller = require('../../app/controllers/DetailController/foods.detail.controller');

route.use('/foods-dog', foodcontroller.FoodDog);
route.use('/foods-cat', foodcontroller.FoodCat);
route.use('/', foodcontroller.index);

module.exports = route;