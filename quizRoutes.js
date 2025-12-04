const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

// Add a question
router.post("/add", async (req, res) => {
    const q = new Question(req.body);
    await q.save();
    res.json({ message: "Question added!" });
});

// Get all questions
router.get("/all", async (req, res) => {
    const data = await Question.find();
    res.json(data);
});

module.exports = router;