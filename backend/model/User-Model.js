const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const UserSchema = new Schema(
  {
    FullName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Gender: {
      type: String,
      required: true,
    },
    Status: {
      type: String,
      required: false,
      default: "Active",
    },
    Profile:{
      type: String,
      required: false,
    }
  },
  { timestamps: true }
);

const UserModel = model("user", UserSchema);
module.exports = UserModel;
