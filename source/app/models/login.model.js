const user = require('../../config/schemas/user.schema'); 

class LoginModel {
    checkUserLogin(req, res){
        user.findOne({username: req.body.username})
            .then(user => {
                if(user && user.password == req.body.password){
                    req.session.email = user.email;
                    req.session.fullname = user.firstname + ' ' + user.lastname;
                    req.session.img = user.avatar;
                    req.session.username = req.body.username;
                    res.redirect('/');
                }else{
                    res.send(`<script>alert('Login is unsuccessfull.'); location.href = '/login';</script>`);
                }
            })
            .catch(err => {
                res.send(`<script>alert('Server Error')</script>`);
            })
    }
}

module.exports =  new LoginModel;