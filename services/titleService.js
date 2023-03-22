const Title = require("../models/title");
const titleDal = require("../dal/mongooseDal/titleDal");
const personDal = require("../dal/mongooseDal/personDal");

exports.Create = async(req,res)=>{
    try {
        const title = new Title({ 
            name: req.name,
            persons: req.persons
        });
        const json = await titleDal.Create(title);
        return json;

    } catch (error) {
        throw new Error(error);
    }
}

exports.GetAll = async(req,res)=>{
    try {
        // throw new Error("Test failed");
        return await titleDal.GetAll();
    } catch (error) {
        throw new Error(error);
    }
}

exports.GetTitleById = async(id)=>{
    try {
        return await titleDal.GetTitleById(id);
    } catch (error) {
        throw new Error(error);
    }
}

exports.GetPersonsByTitleId = async(id)=>{
    try {
        return await titleDal.GetPersonsByTitleId(id);
    } catch (error) {
        throw new Error(error);
    }
}

exports.Delete = async(id)=>{
    try {
        const title = await titleDal.GetTitleById(id);
        title.persons.forEach(async(element) => {
            const person = await personDal.GetPersonById(element);
            person.title = null;
            await personDal.Create(person);
        });

        return await titleDal.Delete(id);
    } catch (error) {
        throw new Error(error);
    }
}

exports.Update = async(id,req)=>{
    try {
        return await titleDal.Update(id,req);
    } catch (error) {
        throw new Error(error);
    }
}

