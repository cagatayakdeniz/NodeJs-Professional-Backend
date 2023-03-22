const userDal = require("../dal/mongooseDal/userDal");
const utilities = require("../utilities/index");

exports.SignUp = async(req)=>{
    const hashedPassword = await utilities.bcrypt.hashPassword(req.password);
    req.password = hashedPassword;
    
    try {
        const json = userDal.SignUp(req);
        return json;
    } catch (error) {
        throw new Error(error);
    }
}

exports.SignIn = async(req)=>{    
    try {
        const user = await userDal.SignIn(req);

        if(user){
            const checkPassword = await utilities.bcrypt.comparePassword(req.password,user.password);

            if(checkPassword){
                const token = await utilities.jwt.createToken(user);
                return token;
            }
        }

        throw new Error("Wrong Login");
    } catch (error) {
        throw new Error(error);
    }
}