const route = require('express').Router();
const profilecontroller = require('../app/controllers/profile.controller');
const auth = require('../auth/checkout.auth');

route.use('/change-password', profilecontroller.changePassword);
route.use('/', auth.index, profilecontroller.index);

module.exports= route;