const model = require('../models/login.model');
const petmodel = require('../models/pet.model');
class LoginController {
    //main page
    index(req, res) {
        res.render('page/login', {title: "LOGIN - PETS STORE", "link-css": "/css/login.css"});
    }
    //Executed Login (Xử lý đăng nhập)
    login(req, res, next){
        model.checkUserLogin(req, res);
   //     res.send(req.cookies.username);
    }

    //Executed Logout(Xử lý đăng xuất)
    checkLogout(req, res){
        if(req.session.username){
            req.session.destroy(err=>{
                if(err)
                    res.redirect('/');
            });
        }
        res.redirect('/');
    }
}

module.exports = new LoginController;