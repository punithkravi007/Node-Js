const express = require("express");
const bodyParser = require("body-parser");
const authenticateJWT = require("./Service/authenticationService");
const jwt = require("jsonwebtoken");
const accessTokenSecret = "youraccesstokensecret";
const dbConfig = require('./Database/dbConfig');
const connection = require('./Database/dbConnection')
const query = require('./Database/dbQuery');
const {userQuery} = require('./Database/dbQueries')


const app = express();

app.use(bodyParser.json());
app.listen(3000, () => {
  console.log("Authentication service started on port 3000");
});

app.post("/login",  async (req, res) => {
  const { username, password } = req.body;
  const conn = await connection(dbConfig).catch(e => {});
  const user = await query(conn, userQuery, [username, password]).catch(console.log); 

  if (user.length) {
    const accessToken = jwt.sign(
      { username: user.Username, password: user.Password, role: user.Name },
      accessTokenSecret
    );

    res.json({
      accessToken,
    });
  } else {
    res.send("Username or password incorrect");
  }
});

app.get("/getUser", authenticateJWT, (req, res) => {
  res.send("User Fetch is Success");
});

module.exports = app;
