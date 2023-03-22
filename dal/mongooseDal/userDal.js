const User = require("../../models/user");

exports.SignUp = async(userModel)=>{
    return await User.create(userModel);
}

exports.SignIn = async(req)=>{
    const user = await User.findOne({username:req.username})
    if(user){
        return user;
    } else { return false; }
}