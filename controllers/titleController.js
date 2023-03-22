const titleService = require("../services/titleService");
const { validationResult } = require("express-validator");
const helper = require("../helpers/index");

exports.getAllTitle = async(req,res)=>{
    try {
        const result = await titleService.GetAll()
        res.json(result);
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }
}

exports.getTitleById = async(req,res)=>{
    try {
        const id = req.params.id;
        res.json(await titleService.GetTitleById(id));
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }
}

exports.getPersonsByTitleId = async(req,res)=>{
    try {
        const id = req.params.id;
        res.json(await titleService.GetPersonsByTitleId(id));
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }
}

exports.createTitle = async(req,res)=>{
    const validErrors = validationResult(req);
    if(!validErrors.isEmpty()){
        return res.json(validErrors.errors);
    }

    try {
        const result = await titleService.Create(req.body);
        res.json(result)
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }
}

exports.updateTitle = async(req,res)=>{
    const validErrors = validationResult(req);
    if(!validErrors.isEmpty()){
        return res.json(validErrors.errors);
    }
    
    const id = req.params.id
    try {
        const result = await titleService.Update(id,req.body);
        res.json(result);
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }
}

exports.deleteTitle = async(req,res)=>{
    const id = req.params.id
    try {
        const result = await titleService.Delete(id);
        res.json(result);
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }
}