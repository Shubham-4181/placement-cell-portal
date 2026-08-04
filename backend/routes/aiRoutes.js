const express = require("express");
const router = express.Router();

const { askAI } = require("../controllers/aiController");

// POST Endpoint for AI Assistant
router.post("/chat", askAI);

module.exports = router;