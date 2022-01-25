const User = require('../models/user');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const crypto = require('crypto');

passport.use(new BasicStrategy(
    function (id, password, callback){


        const hash = crypto.createHash('sha256');
        hash.update(password);
        let hash_password = hash.digest('hex');

        User.findOne({userName:id, password:hash_password},{password:0},(err,doc)=>{
            if (doc){    
                callback(null, doc);
            }else{
                callback(null, false);
            }
        });


        // if (id ==='test' && password ==="1234"){
        //     callback(null,id);
        // }else{
        //     callback(null, false);
        // }
    }
));

exports.isBasicAuthenticated = passport.authenticate('basic', {session:false});