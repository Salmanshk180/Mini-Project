var mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();
mongoose.set('strictQuery', false)
module.exports = mongoose.connect(process.env.DATABASE,
{useNewUrlParser:true, useUnifiedTopology: true}).then(()=>{
    console.log("DB connected");
});