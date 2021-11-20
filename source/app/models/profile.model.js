const userschema = require('../../config/schemas/user.schema');

class ProfileModel {
    getInfo_User(req, res, next) {
        return userschema.findOne({ username: req.session.username})
            .then(users=>{
                return users;
            })
            .catch(err=>{next()});
    }
}

module.exports = new ProfileModel;