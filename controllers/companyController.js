const companyService = require("../services/companyService");
const helper = require("../helpers/index");

exports.getAllCompany = async(req,res)=>{
    try {
        const result = await companyService.GetAll()
        res.json(result);
    } catch (error) {
        helper.errorLog.logToError(error);
        console.log(error);
    }
}

exports.getCompanyById = async(req,res)=>{
    try {
        const id = req.params.id;
        res.json(await companyService.GetCompanyById(id));
    } catch (error) {
        helper.errorLog.logToError(error);
        console.log(error);
    }
}

exports.getPersonsByCompanyId = async(req,res)=>{
    try {
        const id = req.params.id;
        res.json(await companyService.GetPersonsByCompanyId(id));
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }
}

exports.createCompany = async(req,res)=>{
    try {
        const result = await companyService.Create(req.body);
        res.json(result)
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }
}

exports.updateCompany = async(req,res)=>{
    const id = req.params.id
    try {
        const result = await companyService.Update(id,req.body);
        res.json(result);
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }
}

exports.deleteCompany = async(req,res)=>{
    const id = req.params.id
    try {
        const result = await companyService.Delete(id);
        res.json(result);
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }
}