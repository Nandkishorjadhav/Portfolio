const express = require("express");
const { sendMessage, getMessages } = require("../controllers/contactController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", sendMessage);
router.get("/messages", authMiddleware, getMessages);

module.exports = router;
