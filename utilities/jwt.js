const jwt = require("jsonwebtoken");

const createToken = (user) => {
    const token = jwt.sign({
        userId:user._id,
        username:user.username,
        email:user.email    
    },process.env.SECRET_KEY,{
        expiresIn: process.env.EXPIRESIN
    });

    return token;
}

const decodedToken = (token) => {
    var decodedToken = null;
    try {
        const verify = jwt.verify(token,process.env.SECRET_KEY);
        decodedToken = verify;
    } catch (error) {
        decodedToken = null;
        console.log('error',error);
    }
    return decodedToken;
}

module.exports = {
    createToken,
    decodedToken
}