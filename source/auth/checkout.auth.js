
class AuthCheckSession {
    index(req,res, next) {
        if(!req.session.username){
            res.redirect('/');
            return;
        }else {
            next();
        }
    } 
}

module.exports = new AuthCheckSession;