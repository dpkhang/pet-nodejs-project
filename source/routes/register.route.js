const express = require('express');
const route = express.Router();
const registercontroller = require('../app/controllers/register.controller');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: `source/public/img/img_sources/user_img`,
    filename: function(req, file, callback) {
        callback(null, `${file.fieldname}-${Date.now()}-${path.extname(file.originalname)}`);
    }
})
const upload = multer({
    storage: storage,
});

route.post('/check', registercontroller.checkUser);
route.post('/add', upload.single('avatar'), registercontroller.createUser);
route.use('/', registercontroller.index);

module.exports = route;