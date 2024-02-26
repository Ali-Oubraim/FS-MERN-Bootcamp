const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const USERS = require("../users.json");

passport.use(
  new localStrategy(async (username, password, done) => {
    try {
      console.log(
        `inside localStrategy username : ${username} - password : ${password}`
      );
      const foundUser = USERS.find((u) => u.username === username);
      if (!foundUser) throw new Error("User Not Found");
      const compare = await bcrypt.compare(password, foundUser.password);
      if (!compare) throw new Error("Invalid Password");
      done(null, foundUser);
    } catch (err) {
      done(err, null);
    }
  })
);

passport.serializeUser((user, done) => {
  console.log(`inside serialiseUser user : `);
  console.log(user);

  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  try {
    console.log(`inside DeserialiseUser id : ${id} `);
    const findUser = USERS.find((u) => u.id === id);
    if (!findUser) throw new Error("User Not Found");

    done(null, findUser.id);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;
