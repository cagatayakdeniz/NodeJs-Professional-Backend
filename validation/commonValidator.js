const { body,param,query } = require('express-validator');

exports.getCityByIdValid = ()=>{
    return[
        param('countryId').isLength({min:1,max:4}).withMessage("invalid countryId")
    ]
}