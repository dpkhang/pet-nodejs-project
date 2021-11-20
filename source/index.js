const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const path = require('path');
const router = require('./routes');
const database = require('./config/database');
const session = require('express-session');
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', hbs({
    extname: 'hbs',
}))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './resources/views'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}))

app.use(session({
    secret: "nodejs",
    resave:true,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: null,
    }
}));

database.connect();
router.index(app);

app.listen(3001);