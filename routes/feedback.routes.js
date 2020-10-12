const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const Feedback = require("../models/Feedback");
const auth = require("../middleware/auth.middleware");
const router = Router();

// /api/feedback/sendFeedback
router.post(
  "/sendFeedback",
  // auth,
  [check("email", "Incorrect email").isEmail()],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Incorrect feedback data",
        });
      }
      const { name, number, email, message } = req.body;

      const feedback = new Feedback({ name, number, email, message });

      await feedback.save();

      res.status(201).json({ message: "Feedback send" });
    } catch (e) {
      res.status(500).json({ message: "Something went wrong, please, try again" });
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const feedbacksData = await Feedback.find();
    res.json(feedbacksData);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

module.exports = router;
