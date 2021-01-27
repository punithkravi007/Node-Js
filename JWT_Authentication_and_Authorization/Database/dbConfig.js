const host = process.env.DB_HOST || "localhost";
const user = process.env.DB_USER || "root";
const password = process.env.DB_PASS || "root";
const database = process.env.DB_DATABASE || "video_kyc";

module.exports = { host, user, password, database };
