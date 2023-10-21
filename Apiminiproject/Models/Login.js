var mongoose= require('mongoose')
loginSchema = mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    addedOn:{
        type:String
    },
    isActive:{
        type:Boolean,
        default:true
    }
});
module.exports = mongoose.model("Login",loginSchema);