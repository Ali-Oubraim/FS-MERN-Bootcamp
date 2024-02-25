const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const registerRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");
const protectedRoute = require("./routes/protectedRoute");
const logoutRoute = require("./routes/logoutRoute");
const profileRoute = require("./routes/profileRoute");
const middlewares = require("./middlewares/middlewares");

const app = express();
const port = 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "this-is-my-secret",
    cookie: { maxAge: 60000 * 10 },
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/api", (req, res) => {
  console.log("iam in home");
  console.log(req.cookies);
  res.json("Welcome To My Application");
});
app.use("/api", registerRoute);

app.use("/api", logoutRoute);

app.use("/api", loginRoute);

app.use("/api", middlewares.isAuthenticated, profileRoute);

app.use("/api", middlewares.isAdmin, protectedRoute);

// app.use();

app.listen(port, () => {
  console.log(`Server Listening in port ${port} for Session...`);
});
