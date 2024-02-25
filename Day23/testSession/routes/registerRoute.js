const fs = require("fs/promises");
const express = require("express");
const USERS = require("../users.json");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");

const route = express.Router();

route.post(
  "/register",
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
    body("type").default('user').default('admin')
      .notEmpty()
      .isLength({ min: 4 })
      .trim()
      .escape()
      .withMessage("Please Give a Valid Type"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ Warning: errors.array() });
    }
    const { username, password, type } = req.body;
    if (username && password && type) {
      const hashedPassword = await bcrypt.hash(password, 5);
      USERS.push({
        username,
        password: hashedPassword,
        type,
      });
      save(USERS);
      res.json({ msg: "Registred Successfuly !" });
    } else {
      res.json({ msg: "Bad Cridential !" });
    }
  }
);


async function save(data) {
  await fs.writeFile(
    "./testSession/users.json",
    JSON.stringify(data, null, 2),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}


module.exports = route;