const mongoose = require('mongoose');


//connect Database
async function connect(){
    try{
        await mongoose.connect("mongodb+srv://dpkhang:08062000aB@dpkhang.sqkgd.mongodb.net/Pets?retryWrites=true&w=majority"), {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        }
        console.log("connect is successfully");
    }catch(e){
        console.log("connect error");
    }
}

module.exports = { connect }