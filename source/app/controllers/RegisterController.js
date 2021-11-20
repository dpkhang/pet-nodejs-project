const models = require('../models/RegisterModel');
class RegisterController {
    
    index(req, res, next) {
        res.render('page/register',{title: "REGISTER - PET STORE"});
    }

    createUser(req, res, next) {
        models.createUser(req, res);
        res.send('<script>alert("Register successfully"); location.href = "/login";</script>');
    }
    checkUser(req, res, next) {
        models.checkUser(req, res);
    }
}

module.exports = new RegisterController;