
const homerouter = require('./home.route');
const registerrouter = require('./register.route');
const loginrouter = require('./login.route');
const detailrouter = require('./detail.route');
const profilerouter = require('./profile.route');
class Router {
    index(app) {
        app.use('/detail', detailrouter)
        app.use('/login', loginrouter);
        app.use('/register', registerrouter);
        app.use('/profile', profilerouter);
        app.use('/', homerouter);
    }
}

module.exports = new Router;
