const mongoose = require("mongoose");
require('dotenv').config()
exports.mongodb = () => {
  mongoose.connect(process.env.mongodb);
  console.log("Successfully connected mongodb");
};
