const express = require("express");
const route = express.Router();

route.get("/protected", (req, res) => {
  const { currentUser } = req.cookies;
  res.status(200).json({
    Message: `Welcome ${currentUser.username} , You Are Authenticated !! Do what ever You want`,
  });
});

module.exports = route;
