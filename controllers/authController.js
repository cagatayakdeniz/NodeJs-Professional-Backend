const userService = require("../services/userService");
const helper = require("../helpers/index");

exports.signIn = async(req,res)=>{
    try {
        const result = await userService.SignIn(req.body);
        res.json(result);
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }
}

exports.signUp = async(req,res)=>{
    try {
        res.json(await userService.SignUp(req.body));
    } catch (error) {
        helper.errorLog.logToError(error);
        res.json(error.message);
    }
}