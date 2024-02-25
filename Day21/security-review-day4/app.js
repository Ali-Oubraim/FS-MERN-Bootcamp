const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const csurf = require("csurf");
const { body, validationResult } = require("express-validator");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookieParser());
app.set("view engine", "ejs");
app.use(csurf({ cookie: true }));

//Data Base
const USERS = [
  {
    username: "admin",
    password: "adminpassword",
  },
  {
    username: "user",
    password: "userpassword",
  },
];

// Routes
app.get("/", (req, res) => {
  res.render("index", { csrfToken: req.csrfToken() });
});

app.post(
  "/login",
  body("username").notEmpty().isLength({ min: 5 }).trim().escape(),
  body("password").notEmpty().isLength({ Min: 8 }).trim().escape(),

  (req, res) => {
    // Validate and authenticate the user
    // Implement appropriate validation and secure authentication mechanisms here
    // For simplicity, you can use a hardcoded username and password for demonstration purposes

    const { username, password } = req.body;
    const foundUser = USERS.find((u) => u.username === username);
    if (!foundUser) {
      res.status(400).json({ message: "User Not Exist !!" });
      return;
    }
    switch (username) {
      case "admin":
        if (password === foundUser.password) {
          req.session.isAuthenticated = true;
          res.redirect("/dashboard");
        } else {
          res.send(
            `<script>alert('Password Inccorect ! !')</script><br><a href="/">Go Back</a>`
          );
        }
        break;
      case "user":
        if (password === foundUser.password) {
          req.session.isAuthenticated = false;
          res.redirect("/dashboard");
        } else {
          res.send(
            `<script>alert('Password Inccorect ! !')</script><br><a href="/">Go Back</a>`
          );
        }
        break;

      default:
        res.status(400).json({ message: "Somthing Went Wrong !!" });
        break;
    }
  }
);

app.get("/dashboard", (req, res) => {
  // Secure the dashboard route to only allow authenticated users
  if (req.session.isAuthenticated) {
    res.render("dashboard");
  } else {
    res.send(
      `<script>alert('You Are Not Authenticated !')</script><br><a href="/">Go Back</a>`
    );
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
