function isAdmin(req, res, next) {
  if (req.cookies.currentUser) {
    const { currentUser } = req.cookies;
    if (currentUser.type === "admin") {
      next();
    } else {
      return res
        .status(400)
        .json({ Message: `You Are Not Allowed To Be Here !!` });
    }
  } else {
    return res
      .status(400)
      .json({ Message: `You Are Not Authenticated Login First !!` });
  }
}

function isAuthenticated(req, res, next) {
  if (req.cookies.currentUser) {
    next();
  } else {
    return res
      .status(400)
      .json({ Message: `You Are Not Authenticated Login First auth !!` });
  }
}

function logging(req, res, next) {}

function errorHandler(err, req, res, next) {
  if (err) {
    res
      .status(500)
      .json({ Message: `Oops ,Somthing Went Wrong !! ${err.stack}` });
  } else {
    next();
  }
}

module.exports = { isAdmin, isAuthenticated, errorHandler };
