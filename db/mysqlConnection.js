const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'cagatay2242829',
    database:'mvcdb'
});

// connection.connect((err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Database connection success");
//     }
// })

module.exports = connection.promise();