const jwt = require("../utilities/jwt");
const { StatusCodes } = require("http-status-codes");
const consts = require("../consts/index");
const helper = require("../helpers/index");

module.exports = (req,res,next)=>{
    try {
        if(!req.url.includes('/api/')){

            if(req.headers.authorization==null){
                throw new Error("IsAuth Error");
            }

            const token = req.headers.authorization.split(' ')[1];
   
            if(jwt.decodedToken(token)==null){
                return res.status(StatusCodes.UNAUTHORIZED).send(consts.authConst.AUTH);
            }
    
            req.user = jwt.decodedToken(token);
        }
        
        next();
    } catch (error) {
        helper.errorLog.logToError(error);
        return res.json(error.message);
    }   
}