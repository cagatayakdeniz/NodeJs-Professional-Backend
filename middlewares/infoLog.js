const logger = require("../utilities/logger");

module.exports = async(req,res,next) => {
    logger.info(`Request at: path=> ${req.path} | url=> ${req.url} | body=> ${JSON.stringify(req.body)} | params=> ${JSON.stringify(req.params)} | query=> ${JSON.stringify(req.query)}`);
    
    next();
}