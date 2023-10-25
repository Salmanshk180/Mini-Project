var mongoose= require('mongoose');
signupSchema = mongoose.Schema({
    email:{
        type:String,
    unique:true,
    requied:true,
    },
    password:{
        type:String,
        requied:true,
    },
   
    addedOn:{
        type:String
    },
    isActive:{
        type:Boolean,
        default:true
    }
});
module.exports = mongoose.model("Signup",signupSchema);