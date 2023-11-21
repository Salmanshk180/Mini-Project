var mongoose= require('mongoose')
contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required: true,
    },
    pstoi:{
        type:[String],
        required: true,
        enum:["Please selct the type of your inquiry","General","Select a feature","Report a bug"]
    },
    message:{
        type:String,
    },
    isActive:{
        type:Boolean,
        default:true
    },
    addedOn:{
        type:String
    },
});
module.exports = mongoose.model("Contact",contactSchema);