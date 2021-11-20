const route = require('express').Router();
const productscontroller = require('../../app/controllers/DetailController/products.detail.controller');

route.use('/products-dog', productscontroller.ProductsDog);
route.use('/products-cat', productscontroller.ProductsCat);
route.use('/', productscontroller.index);

module.exports = route;