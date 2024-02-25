const express = require("express");
const USERS = require("../users.json");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");

const route = express.Router();
route.use(cookieParser());
route.post(
  "/login",
  [
    body("username")
      .notEmpty()
      .isLength({ min: 5 })
      .trim()
      .escape()
      .withMessage("Please Give a Valid Username"),
    body("password")
      .notEmpty()
      .isLength({ min: 8 })
      .trim()
      .escape()
      .withMessage("Please Give a Valid Password"),
  ],
  async (req, res) => {
    // const { cookies } = req;
    console.log(req.sessionID);
    // res.json(cookies);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ Warning: errors.array() });
    }
    const { username, password } = req.body;
    if (username && password) {
      const user = USERS.find((u) => u.username === username);
      if (!user) {
        return res.status(404).json({ Message: `${username} Not Exist !` });
      }
      const checkPassword = await bcrypt.compare(password, user.password);
      if (!checkPassword) {
        return res.status(400).json({ Message: `Password Inccorect !!` });
      }
      req.session.authenticated = true;
      req.session.user = user;
      res.cookie("currentUser", user);
      res.json(req.session);
      console.log("**iam in login");
      console.log(req.cookie);
    } else {
      return res.status(400).json({ Message: `Bad Credintial !!` });
    }
  }
);

module.exports = route;
