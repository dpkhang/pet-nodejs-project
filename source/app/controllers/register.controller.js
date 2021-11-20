const models = require('../models/register.model');
class RegisterController {
    //Main page
    index(req, res, next) {
        res.render('page/register',{title: "REGISTER - PETS STORE", "link-css": '/css/register.css'});
    }
    //Create user 
    createUser(req, res, next) {
        models.createUser(req, res);
        res.send('<script>alert("Register successfully"); location.href = "/login";</script>');
    }

    //Check Exist user
    checkUser(req, res, next) {
        models.checkUser(req, res);
    }
}

module.exports = new RegisterController;