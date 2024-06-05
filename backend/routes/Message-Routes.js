const express = require("express");
const { VerifyToken } = require("../middleware/Verify-Token");
const { SendMessage,GetMessage } = require("../controller/Message-controller");
const router = express.Router();
router.get("/:id", VerifyToken, GetMessage).post("/send/:id", VerifyToken, SendMessage);
module.exports = router;
