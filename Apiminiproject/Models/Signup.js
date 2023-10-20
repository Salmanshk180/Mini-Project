var mongoose= require('mongoose');
signupSchema = mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    confirmpassword:{
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
module.exports = mongoose.model("Signup",signupSchema);