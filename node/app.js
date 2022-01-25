const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const router = require('./routes/router');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise
// mongoose.connect('mongodb://localhost/cowine')
mongoose.connect('mongodb+srv://cowine:1234@cowine.voxxr.mongodb.net/cowine_db?retryWrites=true&w=majority', {
                }).then(() => console.log('MongoDB Connected…'))
                .catch(err => console.log(err))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(router);

app.get('/home', (req, res)=>{

    res.sendFile(__dirname + '/view/index.html');
});

app.get("/borderList", async (req, res, next) => {
    try {
      const { borderDate } = req.query;
      const borderList = await wine_infos.find({  });
      res.json({ borderList: borderList });
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

const server = app.listen(port, () => {
    console.log("App is running on port " + port);
});
