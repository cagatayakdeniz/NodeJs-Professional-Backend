const commonService = require("../services/commonService");
const helper = require("../helpers/index");
const { validationResult } = require("express-validator");

exports.getAllCountry = (req,res)=>{
    try {
        const countries = commonService.getAll();
        res.json(countries);
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }  
}

exports.getCityByCountryId = (req,res)=>{

    const validErrors = validationResult(req);
    if(!validErrors.isEmpty()){
        return res.json(validErrors.errors);
    }

    try {
        const cities = commonService.getCityByCountryId(req.params.countryId);
        res.json(cities);
    } catch (error) {
        hhelper.errorLog.logToError(error);
        res.json(error.message);
    }    
}