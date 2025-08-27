const Message = require("../models/Message");

exports.sendMessage = async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
