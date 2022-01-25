const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({

    userId : String,
    userName : String,
    password : String,
    userAge : String,
    userSex : String,
   



});


// 자동으로 user뒤에 s붙는다
module.exports = mongoose.model('user', UserSchema);