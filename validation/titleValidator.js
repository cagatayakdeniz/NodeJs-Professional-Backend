const { body,param,query } = require('express-validator');

exports.createTitle = ()=>{
    return [
        body('name').not().isEmpty()
    ]
}

exports.updateTitle = ()=>{
    return [
        body('name').not().isEmpty()
    ]
}