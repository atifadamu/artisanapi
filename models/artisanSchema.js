const mongoose = require("mongoose")

const artisanSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    work:{
        type: String,
        required: true
    },
    yearsofexperience:{
        type: Number,
        required: true
    },
    location:{
        type: String,
        required: true
    }
},{
    timestamps:true
})

const Artisan = mongoose.model("Artisan", artisanSchema);
module.exports=Artisan;