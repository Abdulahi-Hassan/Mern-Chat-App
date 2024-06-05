const express = require("express");
const { SignUp, Login, LogOut } = require("../controller/Auth-controller");
const router = express.Router();
router.post("/signup", SignUp).post("/login", Login).post("/logout", LogOut);
module.exports = router;
