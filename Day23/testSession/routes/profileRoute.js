const express = require("express");
const route = express.Router();
const session = require("express-session");
const store = new session.MemoryStore();

route.get("/profile", (req, res) => {
  //   const { user } = req.session;
  res.json({ message: `Welcome , This is Your Profile ` });
  console.log(req.sessionID);
  console.log('iam in profile');
  console.log(req.cookies);
});

module.exports = route;
