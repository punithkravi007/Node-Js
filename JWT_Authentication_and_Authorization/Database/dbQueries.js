const userQuery = "SELECT u.`Id`,"+
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
"WHERE u.`Username` = ? and u.`Password` = ? and r.`Id` = u.`RoleId`";

module.exports = {userQuery}
