const personService = require("../services/personService");
const { validationResult } = require("express-validator");
const helper = require("../helpers/index");

exports.getAllPerson = async(req,res)=>{
    try {
        const person = await personService.GetAll();
        res.json(person);
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }
}

exports.getPersonById = async(req,res)=>{
    const id = req.params.id;

    try {
        const person = await personService.GetPersonById(id);
        res.json(person);
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }
}

exports.createPerson = async(req,res)=>{
    const validErrors = validationResult(req);
    if(!validErrors.isEmpty()){
        return res.json(validErrors.errors);
    }

    try {
        const person = await personService.Create(req.body);
        res.json(person);
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }
}

exports.updatePerson = async(req,res)=>{
    const validErrors = validationResult(req);
    if(!validErrors.isEmpty()){
        return res.json(validErrors.errors);
    }
    
    const personId = req.params.id;
    try {
        const json = await personService.Update(req.params.id,req.body);
        res.send(json);
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }
}

exports.deletePersonById = async(req,res)=>{
    try {
        const result = await personService.Delete(req.params.id);
        res.send(result);   
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }
}

exports.companyGetPersonId = async(req,res)=>{
    const personId = req.params.id;
    try {
        const result = await personService.GetCompanyByPersonelId(personId);
        res.json(result);
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }
}

exports.titleGetPersonId = async(req,res)=>{
    const personId = req.params.id;
    try {
        const result = await personService.GetTitleByPersonelId(personId);
        res.json(result);
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }
}
