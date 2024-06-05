const express = require("express");
const { GetAlluser } = require("../controller/User-controller");
const { VerifyToken } = require("../middleware/Verify-Token");
const router = express.Router();
router.get("/users",VerifyToken, GetAlluser)
module.exports = router;
