const Company = require("../models/company");
const companyDal = require("../dal/mongooseDal/companyDal");
const personDal = require("../dal/mongooseDal/personDal");

exports.Create = async(req,res)=>{
    try {
        const company = new Company({ 
            name: req.name,
            year: req.year,
            description: req.description,
            persons: req.persons
        });
        const json = await companyDal.Create(company);
        return json;

    } catch (error) {
        throw new Error(error);
    }
}

exports.GetAll = async(req,res)=>{
    try {
        return await companyDal.GetAll();
    } catch (error) {
        throw new Error(error);
    }
}

exports.GetCompanyById = async(id)=>{
    try {
        return await companyDal.GetCompanyById(id);
    } catch (error) {
        throw new Error(error);
    }
}

exports.GetPersonsByCompanyId = async(id)=>{
    try {
        return await companyDal.GetPersonsByCompanyId(id);
    } catch (error) {
        throw new Error(error);
    }
}

exports.Delete = async(id)=>{
    try {
        const company = await companyDal.GetCompanyById(id);
        company.persons.forEach(async(element) => {
            const person = await personDal.GetPersonById(element);
            person.company = null;
            await personDal.Create(person);
        });

        return await companyDal.Delete(id);
    } catch (error) {
        throw new Error(error);
    }
}

exports.Update = async(id,req)=>{
    try {
        return await companyDal.Update(id,req);
    } catch (error) {
        throw new Error(error);
    }
}

