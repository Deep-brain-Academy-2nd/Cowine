
const User = require('../models/user');
const crpyto = require('crypto');
const jwt = require('jsonwebtoken');

let jwtKey = "cowine"


exports.createUser = function (req, res){
    
    let userName = req.body.userName;
    let password = req.body.password;
    let userId = req.body.userId;
    let userAge = req.body.userAge;
    let userSex = req.body.userSex;
 
   
    const hash = crpyto.createHash('sha256');
    hash.update(password);
    let hash_password = hash.digest('hex');
    



    new User({userName: userName, password: hash_password, userId: userId, userAge: userAge, userSex:userSex}).save((err, doc)=>{
        if (doc){
            console.log(doc);
            res.send("유저 생성");
        }
    });

};

exports.readUser = function (req, res){
    console.log("controller user : ",req.user);
    let token = jwt.sign(req.user.toJSON(), jwtKey);
    console.log("controller user token : ",token);
    
    res.send(token);

};

exports.updateUser = function (req, res){
    res.send("유저 수정");

};

exports.deleteUser = function (req, res){
    res.send("유저 삭제");

};