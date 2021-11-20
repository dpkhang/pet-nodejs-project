const mongoose = require('mongoose');
const schema = mongoose.Schema;


//user schema
const user = new schema({
    username: {type: String, maxLength: 32},
    password: {type: String, maxLength: 32},
    email: {type: String, maxLength: 128},
    firstname: {type: String, maxLength: 32},
    lastname: {type: String, maxLength: 32},
    age: {type: Number},
    avatar: {type: String, maxLength: 512},
});

module.exports = mongoose.model('User', user, 'User');