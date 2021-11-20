const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Pet schema
const pet = new schema({
    petname: {type: String, maxLength: 16},
    type: {type: String, maxLength: 16},
    amount: {type: Number},
    image: {type: String, maxLength: 128},
    price: {type: Number},
    describe: {type: String, maxLength: 128},
    color: {type: String, maxLength:16},
})

module.exports = mongoose.model('Pet', pet, 'Pet');
