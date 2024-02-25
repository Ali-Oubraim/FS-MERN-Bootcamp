const express = require("express");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const users = [
  {
    username: "Ali",
    password: "12345",
  },
  {
    username: "Otheruser",
    password: "54321",
  },
];

function checkAuthentication(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(403).json({ error: "You are not auth1" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(403).json({ error: "You are not auth2" });
  }

  const user = jwt.verify(token, "Im-Ali");
  if (!user) {
    return res.status(403).json({ error: "You are not auth3" });
  }
  req.user = user;
  next();
}

app.get("/", checkAuthentication, (req, res) => {
  // console.log(req.user);
  res.json({ message: `You are here ! Welcome ${req.user.username}` });
});

app.post(
  "/login",
  [
    body("username").notEmpty().isLength({ min: 3 }).trim().escape(),
    body("password").notEmpty().isLength({ min: 5 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ error: errors.array() });
      return;
    }
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ message: "Please Enter Username and Pasword !" });
      return;
    }
    const foundUser = users.find((u) => u.username === username);
    if (!foundUser) {
      res.status(404).json({ message: "User Not Exist !" });
      return;
    }
    if (password !== foundUser.password) {
      res.status(404).json({ warning: "Password Inccorect !" });
      return;
    }
    const token = jwt.sign({ username: username }, "Im-Ali", {
      expiresIn: "30min",
    });

    res.json({ message: "Login Success !", token: token });
  }
);

app.listen(3000, () => {
  console.log("Server Running for JWT Test !");
});
