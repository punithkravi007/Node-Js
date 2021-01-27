const mysql = require('mysql');
const host = process.env.DB_HOST || "localhost";
const user = process.env.DB_USER || "root";
const password = process.env.DB_PASS || "root";
const database = process.env.DB_DATABASE || "video_kyc";

const con = mysql.createConnection({
  host,
  user,
  password,
  database,
});

const query = "SELECT u.`Id`,"+
"u.`isActive`,"+
"u.`CreatedOn`,"+
"u.`CreatedBy`,"+
"u.`UpdatedOn`,"+
"u.`UpdatedBy`,"+
"u.`Name`,"+
"u.`Email`,"+
"u.`MobileNo`,"+
"u.`Username`,"+
"u.`Password`,"+
"u.`RoleId`,"+
"r.`Id`,"+
"r.`Name`,"+
"r.`Permission` "+
"FROM `video_kyc`.`users` as u, `video_kyc`.`role` as r "+
"WHERE u.`Username` = 'Punith' and u.`Password` = 'itt' and r.`Id` = u.`RoleId`";

console.log(query);

con.connect(function(err) {
    if (err) throw err;
  
    // if connection is successful
    con.query(query, (err, result, fields) => {
      // if any error while executing above query, throw error
      if (err) throw err;
  
      // if there is no error, you have the result
      console.log(result);
   });
  });

