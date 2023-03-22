const Person = require("../models/person");
const personDal = require("../dal/mongooseDal/personDal");
const utilities = require("../utilities/");
const companyDal = require("../dal/mongooseDal/companyDal");
const titleDal = require("../dal/mongooseDal/titleDal");

exports.GetAll = async()=>{
    try {
        const json = await personDal.GetAll();
        return json;
    } catch (error) {
        throw new Error(error);
    }
}

exports.Create = async(req,res)=>{
    try {
        const person = new Person({ 
            name: req.name,
            surname: req.surname,
            birthDate: req.birthDate,
            gender: req.gender,
            salary: req.salary,
            identityNumber: req.identityNumber,
            email: req.email,
            password: await utilities.bcrypt.hashPassword(req.password),
            country: req.country,
            city: req.city,
            company: req.company,
            title: req.title,
        });
        const company = await companyDal.GetCompanyById(req.company);
        const title = await titleDal.GetTitleById(req.title);

        title.persons.push(person._id);
        await titleDal.Create(title);
        company.persons.push(person._id);
        await companyDal.Create(company);

        const json = await personDal.Create(person);
        return json;
    } catch (error) {
        throw new Error(error);
    }
}

exports.Delete = async(id)=>{
    try {
        const person = await personDal.GetPersonById(id);

        const company = await companyDal.GetCompanyById(person.company);
        const title = await titleDal.GetTitleById(person.title);

        const personsForCompany = company.persons.filter(c=>c._id==id);
        const personsForTitle = title.persons.filter(t=>t._id==id);

        company.persons.splice(personsForCompany,1);
        title.persons.splice(personsForTitle,1);


        await titleDal.Create(title);
        await companyDal.Create(company);
        
        const json = await personDal.Delete(id)
        return json;

    } catch (error) {
        throw new Error(error);
    }
}

exports.Update = async(id,req)=>{
    try {
        const json = await personDal.Update(id,req)
        return json;

    } catch (error) {
        throw new Error(error);
    }
}

exports.GetPersonById = async(id)=>{
    try {
        const json = await personDal.GetPersonById(id);
        return json;
    } catch (error) {
        throw new Error(error);
    }
}

exports.GetPersonByEmail = async(email)=>{
    try {
        const json = await personDal.GetPersonelByFilter({email});
        return json;
    } catch (error) {
        throw new Error(error);
    }
}

exports.GetCompanyByPersonelId = async(id)=>{
    try {
        const json = await personDal.GetCompanyByPersonelId(id);
        return json;
    } catch (error) {
        throw new Error(error);
    }
}

exports.GetTitleByPersonelId = async(id)=>{
    try {
        const json = await personDal.GetTitleByPersonelId(id);
        return json;
    } catch (error) {
        throw new Error(error);
    }
}