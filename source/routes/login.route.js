const express = require('express');
const route = express.Router();
const logincontroller = require('../app/controllers/login.controller');


route.get('/logout-user', logincontroller.checkLogout);
route.use('/login-user', logincontroller.login);
route.use('/', logincontroller.index);

module.exports = route;

