const logger = require("../utilities/logger");

const logToError = (error)=>{
    logger.error(`message => ${error.message}`);
}

module.exports = {
    logToError
}