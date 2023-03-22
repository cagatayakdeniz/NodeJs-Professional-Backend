const mongoose = require("mongoose");

const titleSchema = mongoose.Schema({
    name:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    persons:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Person'
    }]
},{
    minimize:true,
    timestamps:true,
    autoindex:true,
});

const Title = mongoose.model("Title",titleSchema,"title");

module.exports = Title