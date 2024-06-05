const User = require("../model/User-Model");
exports.GetAlluser = async (req, res) => {
  let GetAll = await User.find({ _id: { $ne: req.user } }).select("-Password");
  res.json(GetAll);
};


