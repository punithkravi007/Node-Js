const express = require("express");
const bodyParser = require("body-parser");
const authenticateJWT = require("./Service/authenticationService");
const jwt = require("jsonwebtoken");
const accessTokenSecret = "youraccesstokensecret";
const users = require("./Service/UserService");
const dbConfig = require('./Repository/dbConfig');
const app = express();

app.use(bodyParser.json());
app.listen(3000, () => {
  console.log("Authentication service started on port 3000");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Fetch the User and Role from Database against the credentials user passed and store it in user variable.

  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });

  

  if (user) {
    const accessToken = jwt.sign(
      { username: user.username, role: user.role },
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
