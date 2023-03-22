const Title = require("../../models/title")

exports.Create = async(titleModel)=>{
    return await titleModel.save();
}

exports.GetAll = async()=>{
    return await Title.find();
}

exports.GetTitleById = async(id)=>{
    return await Title.findOne({_id:id});
}

exports.GetPersonsByTitleId = async(id)=>{
    console.log(id);
    return await Title.findById(id).populate("persons","-_id name surname identitynumber email country city");
}

exports.Delete = async(id)=>{
    return await Title.deleteOne({_id:id});
}

exports.Update = async(id,req)=>{
    const updatedModel = await Title.findOne({_id:id});
    updatedModel.name = req.name;
    updatedModel.year = req.year;
    updatedModel.description = req.description;

    return await updatedModel.save();
}