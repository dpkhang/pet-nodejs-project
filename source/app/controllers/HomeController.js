
class HomeController {
    index(req, res, next) {
        res.render('page/home', {title: "PET STORE"});
    }

    login(req, res, next) {
        res.render('page/login', {title: "LOGIN - PET STORE"});
    }
}

module.exports = new HomeController;