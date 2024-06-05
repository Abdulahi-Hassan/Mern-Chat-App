const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.GenerateToken = (user, res) => {
  let token = jwt.sign({ id: user._id }, process.env.token);
  res.cookie("token", token, {
    httpOnly: true,
    SameSite: "Liibaan",
    expires: new Date("2025/6/20"),
  });
  const { Password, ...info } = user._doc;
  res.json({ status: "Success", message: "Success Logged In",...info, token });
};
