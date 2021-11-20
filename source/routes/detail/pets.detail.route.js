const route = require('express').Router();
const petscontroller = require('../../app/controllers/DetailController/pets.detail.controller');


route.use('/cat', petscontroller.Cat);
route.use('/', petscontroller.index);

module.exports = route;