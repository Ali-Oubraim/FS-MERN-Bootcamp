const express = require("express");

const route = express.Router();

route.get("/logout", (req, res) => {
  console.log(req.cookies);
  res.clearCookie("currentUser");
  res.clearCookie("connect.sid");
  res.status(200).json({ message: "Logout Successfuly" });
  console.log(req.cookies);
  res.end();
});

module.exports = route;
