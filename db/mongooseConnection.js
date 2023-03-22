const mongoose = require("mongoose");
const utilities = require("../utilities/index");
const titleModel = require("../models/title");
const companyModel = require("../models/company");
const personModel = require("../models/person");
const userModel = require("../models/user");

exports.connection = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/mvcProject");

        console.log('Database connection success');
        utilities.logger.info('Database connection success');
    } catch (error) {
        console.log(error);
        utilities.logger.error(error);
    }
}