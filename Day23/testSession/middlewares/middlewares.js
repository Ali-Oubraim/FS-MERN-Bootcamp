const { body, validationResult } = require("express-validator");
function isAuthenticated(req, res, next) {
  if (req.session.isAuth) {
    next();
  } else {
    res.redirect("/login");
  }
}

const inputValidation=()=> {
  return [
    body("username").notEmpty().isLength({ min: 5 }).escape(),
    body("password").notEmpty().isLength({ min: 6 }).escape(),

    (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
  ];
}
function errorHandler(err, req, res, next) {
  if (err) {
    throw new Error(err);
  }
  next();
}
module.exports = { isAuthenticated, inputValidation, errorHandler };
