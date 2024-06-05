const Receive = require("../model/Conversation-Model");
const Send = require("../model/Message-Model");
exports.SendMessage = async (req, res) => {
  let { Message } = req.body;
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
  res.json({
    status: "Success",
    message: "Successfully sent message",
    NewMessage,
    NewConservation,
  });
};

exports.GetMessage = async (req, res) => {
  let { Message } = req.body;
  const SendID = req.user;
  const { id: ReceiveID } = req.params;
  let NewConservation = await Receive.findOne({
    Participants: { $all: [SendID, ReceiveID] },
  }).populate("Message");

  if(!NewConservation) return res.json([])
  const message=NewConservation.Message;

  res.json(
    message,
  );
};
