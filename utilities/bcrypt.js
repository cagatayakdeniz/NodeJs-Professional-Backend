const bcrypt = require("bcrypt");

exports.hashPassword = async(password)=>{
    try {
        return await bcrypt.hash(password,10);
    } catch (error) {
        console.log(error.message);
    }
}

exports.comparePassword = async(password,hashPassword)=>{
    try {
        return await bcrypt.compare(password,hashPassword);
    } catch (error) {
        console.log(error.message);
    }
}