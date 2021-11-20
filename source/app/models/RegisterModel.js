const userschema = require('../../config/database/UserSchemaModel');

class RegisterModel {
    createUser(req, res){
        let path = "public/img/icons/add-avatar.png";
        if(req.file){
            path = req.file.path.split('/').slice(2).join('/');
        }
        const user = new userschema({
            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            age:req.body.age,
            avatar: path,
        })
        user.save();
    }
    checkUser(req, res){
        userschema.findOne({username: req.body.username})
            .then(user => {
                if(user && user.username == req.body.username){
                    res.send("Username is existed.");
                }else {
                    res.send("");
                }
            })
            .catch(err => {
                res.send("hello");
            })
    }
}

module.exports = new RegisterModel;