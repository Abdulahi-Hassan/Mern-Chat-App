const User = require("../model/User-Model");
const bcrypt = require("bcryptjs");
const { GenerateToken } = require("../token/Generate-Token");
const { UserValidation, Liibaan } = require("../validation/UserValidation");

exports.SignUp = async (req, res) => {
  let { FullName, Email, Password, Gender } = req.body;
  const { error } = UserValidation(req.body);
  if (error) return res.send(error.message);
  let Boy =
    "https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
  let Girl =
    "https://th.bing.com/th/id/R.f3c53f5d3b1820210928d06d5c11bd80?rik=C4mTjOgJdZLVDg&pid=ImgRaw&r=0";
  let salt = await bcrypt.genSalt(10);
  let hashpass = await bcrypt.hash(Password, salt);
  const NewUser = new User({
    FullName,
    Email,
    Password: hashpass,
    Gender,
    Profile: Gender === "male" ? Boy : Girl,
  });

  GenerateToken(NewUser,res)
  const OldUser = await User.findOne({ Email });
  if (OldUser) return res.status(200).json("User Already Registered");
  await NewUser.save();
  
};

exports.Login = async (req, res) => {
  let { Email, Password } = req.body;
  const { error } = Liibaan(req.body);
  if (error) return res.send(error.message);
  const OldUser = await User.findOne({ Email });
  if (!OldUser) return res.json("User not found");
  const IsPassCorrect = await bcrypt.compare(Password, OldUser.Password);
  if (!IsPassCorrect) return res.json("Invalid Credentials");
  GenerateToken(OldUser, res);
};

exports.LogOut = async (req, res) => {
  res.clearCookie("token");
  res.json({
    status: "Success",
    message: "Successfully Logout",
  });
};
