const Person = require("../../models/person")

exports.Create = async(personModel)=>{
    return await personModel.save();
}

exports.GetAll = async()=>{
    return await Person.find();
}

exports.GetPersonById = async(id)=>{
    return await Person.findOne({_id:id});
}

exports.Delete = async(id)=>{
    return await Person.deleteOne({_id:id});
}

exports.Update = async(id,req)=>{
    const updatedModel = await Person.findOne({_id:id});
    updatedModel.name = req.name;
    updatedModel.surname = req.surname;
    updatedModel.birthDate = req.birthDate;
    updatedModel.gender = req.gender;
    updatedModel.salary = req.salary;
    updatedModel.identityNumber = req.identityNumber;
    updatedModel.email = req.email;
    updatedModel.password = req.password;
    updatedModel.country = req.country;
    updatedModel.city = req.city;
    updatedModel.company = req.company;
    updatedModel.title = req.title;

    return await updatedModel.save();
}

exports.GetPersonelByFilter = async(where)=>{
    return await Person.findOne(where);
}

exports.GetCompanyByPersonelId = async(id)=>{
    return await Person.findById(id).populate({ path: 'company', select: 'name year description' });
}

exports.GetTitleByPersonelId = async(id)=>{
    return await Person.findById(id).populate({ path: 'title', select: 'name' });
}

