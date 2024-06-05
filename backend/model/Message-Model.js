const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const MessageSchema = new Schema(
  {
    SendID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    ReceiveID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    Message: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

const MessageModel = model("message", MessageSchema);
module.exports = MessageModel;
