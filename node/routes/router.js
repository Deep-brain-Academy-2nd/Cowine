const express = require('express');
const router = express.Router();
const user = require('../controller/user');
const auth = require('../auth/auth');
const wine = require('../models/wine');

router.get("/index", async (req, res) => {
    try {

      let winelist = await wine.find()
      res.json({ winelist: winelist });

    } catch (e) {
      console.error(e);
    }
});


// router.get("/wineList2/:id", async (req, res) => {
//     // const { id } = req.params.id;
//     res.send("gi");
//     // border = await wine.findOne({ _id: id });
//     // //detail 값으로 넘겨줌
//     // res.json({ detail: border });
// });

router.get("/index/:id",async  (req, res)=>{
    try {
    const {id} = req.query;
    let wineDetail = await wine.findOne({_id: id});

    res.json({ detail: wineDetail });
    }
    catch (e) {
        console.error(e);
      }
});

   
router.get("/winelist",async  (req, res)=>{
    try {
        const {flag} = req.query;
        const {desc} = req.query;

        if (flag === "body"){
            let wineDetail = await wine.find().sort({ "body" : desc });
            res.json({ detail: wineDetail });
        }
        else{
            let wineDetail = await wine.find().sort({ "tannin" : desc });
            res.json({ detail: wineDetail });
            res.send("hi");
        }
    }
    catch (e) {
        console.error(e);
      }
});



router.route('/user')
    .post(user.createUser)
    .get(auth.isBasicAuthenticated, user.readUser)
    .put(auth.isBasicAuthenticated,user.updateUser)
    .delete(auth.isBasicAuthenticated,user.deleteUser)



    // .get(wine.readWine);

router.route('/test')
    .get((req, res)=>{
        
        console.log(req.body);
        res.send("확인");
    
    })
    .post((req,res) =>{
        console.log(req.body);
        res.send("POST");
    })



module.exports = router;


