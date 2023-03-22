const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
    name:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    year:{
        type:mongoose.SchemaTypes.Number,
        required:true
    },
    description:{
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

const Company = mongoose.model("Company",companySchema,"company");

module.exports = Company