const Company = require("../../models/company")

exports.Create = async(companyModel)=>{
    return await companyModel.save();
}

exports.GetAll = async()=>{
    return await Company.find();
}

exports.GetCompanyById = async(id)=>{
    return await Company.findOne({_id:id});
}

exports.GetPersonsByCompanyId = async(id)=>{
    return await Company.findOne({_id:id}).populate("persons","-_id name surname identitynumber email country city");
}

exports.Delete = async(id)=>{
    return await Company.deleteOne({_id:id});
}

exports.Update = async(id,req)=>{
    const updatedModel = await Company.findOne({_id:id});
    updatedModel.name = req.name;
    updatedModel.year = req.year;
    updatedModel.description = req.description;

    return await updatedModel.save();
}