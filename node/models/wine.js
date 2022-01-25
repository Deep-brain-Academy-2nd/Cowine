const mongoose = require('mongoose');
const WineSchema = new mongoose.Schema({


    wine_code : String,
    wine_name : String,
    img_url : String,
    badge : String,
    sugar_content : String,
    acidity : String,
    body : String,
    tannin : String, 
    producer : String,
    nation : String,
    production_area : String,
    main_varieties :String

});

module.exports = mongoose.model('wine_info', WineSchema);