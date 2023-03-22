const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    password:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    mail:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    age:{
        type:mongoose.SchemaTypes.Number,
        required:true
    },
},
{
    minimize:true,
    timestamps:true,
    autoindex:true,
});

module.exports = mongoose.model('User',userSchema,'user');