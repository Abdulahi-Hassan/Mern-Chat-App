const Receive = require("../model/Conversation-Model");
const Send = require("../model/Message-Model");
const { GetReceivedId,io } = require("../socket/socket");
exports.SendMessage = async (req, res) => {
  let { Message } = req.body
  const SendID = req.user;
  const { id: ReceiveID } = req.params;
  let NewConservation = await Receive.findOne({
    Participants: { $all: [SendID, ReceiveID] },
  });

  if (!NewConservation) {
    NewConservation = await Receive({
      Participants: [SendID, ReceiveID],
    });
  }
  const NewMessage = new Send({ Message, SendID, ReceiveID });
  if (NewMessage) {
    NewConservation.Message.push(NewMessage._id);
  }
  await Promise.all([NewMessage.save(), NewConservation.save()]);
  const GetReceivedID = GetReceivedId(ReceiveID);
  if (GetReceivedID) {
    io.to(GetReceivedID).emit("NewMessage", NewMessage);
  }

  res.json(NewMessage);
};

exports.GetMessage = async (req, res) => {
  const SendID = req.user;
  const { id: ReceiveID } = req.params;
  let NewConservation = await Receive.findOne({
    Participants: { $all: [SendID, ReceiveID] },
  }).populate("Message");

  if (!NewConservation) return res.json([]);
  const message = NewConservation.Message;

  res.json(message);
};
