const fs = require("fs/promises");
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const passport =require('passport');
const local =require('./strategies/local');

const USERS = require("./users.json");
const {
  errorHandler,
  inputValidation,
  isAuthenticated,
} = require("./middlewares/middlewares");

const app = express();
const port = 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(
  session({
    secret: "this-is-my-secret",
    cookie: { maxAge: 60000 * 10 },
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session())
app.use(errorHandler);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login",(req, res) => {
  res.render("login");
});

app.post("/login", local.authenticate("local"),(req, res) => {
  
  // console.log(req.cookies);
  res.redirect("/protected");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", inputValidation(), async (req, res) => {
  const { username, password, role } = req.body;
  const hashPws = await bcrypt.hash(password, 10);
  USERS.push({
    id: Math.floor(Date.now() * Math.random()),
    username,
    password: hashPws,
    role,
  });
  save(USERS);
  res.render("login");
});

app.get("/protected", (req, res) => {
  // console.log('inside Protected');
  // console.log(req.user);
  currentUser = USERS.find(u=>u.id===req.user)
  username = currentUser.username;
  res.render("protected");
  // console.log(req.cookies);
});

app.post("/logout", isAuthenticated, (req, res) => {
  // console.log(req.session);
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect("/");
  });
});

async function save(data) {
  await fs.writeFile("./users.json", JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.log(err);
    }
  });
}

app.listen(port, () => {
  console.log(`Server Listening in port ${port} for Local Passport...`);
});
