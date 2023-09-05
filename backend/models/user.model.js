const mongoose = require("mongoose")
const userSchema=new mongoose.Schema({
    
    email:{
        type:String,
        required:true,
    //    lowercase:true,
       unique:true,
       
    },
        password:{
            type: String,
            required:true,
            
            },
        },
            {timestamps:true}
        );
module.exports = new mongoose.model("User",userSchema);