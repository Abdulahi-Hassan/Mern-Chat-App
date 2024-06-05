const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const ConversationSchema = new Schema(
  {
    Participants: 
      [{
        type: Schema.Types.ObjectId,
        required: false,
        ref: "user",
      }],
    
    Message:[ {
      type: String,
      required: false,
      default: [],
      ref: "message",
    }],
  },
  { timestamps: true }
);

const ConversationModel = model("conversation", ConversationSchema);
module.exports = ConversationModel;
