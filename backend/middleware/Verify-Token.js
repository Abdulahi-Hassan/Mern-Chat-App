const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.VerifyToken = (req, res, next) => {
  let token = req.headers.cookie && req.headers.cookie.split("=")[1];
  if (!token) return res.json("Cookies not found");
  jwt.verify(token, process.env.token, (err, user) => {
    if (err) return res.json("Invalid token");
    req.user = user.id;
    next();
  });
};
