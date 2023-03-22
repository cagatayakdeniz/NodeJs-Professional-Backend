const { body,param,query } = require('express-validator');
const personService = require("../services/personService");

exports.createPerson = ()=>{
    return [
        body('name').not().isEmpty(),
        body('surname').not().isEmpty(),
        body('birthDate').not().equals(0),
        body('gender').not().isEmpty(),
        body('salary').isNumeric(),
        body('identityNumber').isNumeric(),
        body('email').not().isEmpty().isEmail().custom(async(value, { req }) => {
            const result = await personService.GetPersonByEmail(value)
            if (result) {
                throw new Error('Email Adresi Kullanımda')
            }
            return true
        }),
        body('password').not().isEmpty(),
        body('password').isLength({ min: 3, max: 30 }),
        body('country').not().isEmpty(),
        body('city').not().isEmpty(),
        body('company').isMongoId(),
        body('title').isMongoId(),
    ]
}

exports.updatePerson = ()=>{
    return [
        body('name').not().isEmpty(),
        body('surname').not().isEmpty(),
        body('birthDate').not().equals(0),
        body('gender').not().isEmpty(),
        body('salary').isNumeric(),
        body('identityNumber').isNumeric(),
        body('email').not().isEmpty().isEmail().custom(async(value, { req }) => {
            const result = await personService.GetPersonByEmail(value)
            if (result) {
                throw new Error('Email Adresi Kullanımda')
            }
            return true
        }),
        body('password').not().isEmpty(),
        body('password').isLength({ min: 3, max: 30 }),
        body('country').not().isEmpty(),
        body('city').not().isEmpty(),
        body('company').isMongoId(),
        body('title').isMongoId(),
    ]
}