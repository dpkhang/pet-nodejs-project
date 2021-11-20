const petmodel = require('../models/pet.model');
class HomeController {
    //Main page
    async index(req, res, next) {
        let datacat = await petmodel.readfromDBCat(req, res, next);
        let datadog = await petmodel.readfromDBDog(req, res, next);
        let username = "";
        let email = "";
        let full_name ="";
        let img = "";
        let partial = "components/home/contents/header/login_component";
        if(req.session.username){
            username = req.session.username;
            email = req.session.email;
            full_name = req.session.fullname;
            img = req.session.img;
            partial = "components/home/contents/header/profile_component";
        }  
        res.render('page/home', 
        {
            title: "PETS STORE",
            username: username,
            email: email,
            full_name: full_name,
            img: img,
            partials: partial,
            "link-css": "/css/app.css",
            MyDataCat: datacat,
            MyDataDog: datadog,
        });
    }
}

module.exports = new HomeController;