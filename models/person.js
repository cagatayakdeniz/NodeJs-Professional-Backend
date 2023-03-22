const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
    name:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    surname:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    birthDate:{
        type:mongoose.SchemaTypes.Date,
        required:true
    },
    gender:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    salary:{
        type:mongoose.SchemaTypes.Number,
        required:true
    },
    identityNumber:{
        type:mongoose.SchemaTypes.String,
        required:true,
        min:11,
        max:11
    },
    mail:{
        type:mongoose.SchemaTypes.String,
        required:true,
        unique:true
    },
    password:{
        type:mongoose.SchemaTypes.String,
        required:true,
        min:8
    },
    country:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    city:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    company:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Company'
    },
    title:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Title'
    },
},{
    minimize:true,
    timestamps:true,
    autoindex:true,
});

const Person = mongoose.model("Person",personSchema,"person");

module.exports = Person