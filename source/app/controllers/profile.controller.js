const profilemodel = require('../models/profile.model');
class  ProfileController {
    async index(req, res, next) {
        let user_info = [];
        console.log(req.session.username);
        user_info = await profilemodel.getInfo_User(req, res, next);
        console.log(user_info);
        res.render('page/profile', 
        {
            title: 'PROFILE - PETS STORE',
            username: req.session.username,
            email: user_info.email,
            'full-name': user_info.firstname + ' ' + user_info.lastname,
            avatar: user_info.avatar,
            age: user_info.age,
            "link-css": '/css/profile.css',
            "tab-title": 'Profile',
            partials: 'components/detail/profile',
        });
    }

    changePassword(req, res, next) {
    }
}

module.exports = new ProfileController;
