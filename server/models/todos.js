
const mongoose=require('mongoose');

var Todos= mongoose.model('Todos',{

    text:{
        type:String,
        trim:true,
        minlength:1,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }

});

module.exports={
    Todos
};