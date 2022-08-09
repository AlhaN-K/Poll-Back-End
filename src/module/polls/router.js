const express = require("express");
const router = express.Router();
const PollController = require("./controller");
const PollValidator = require("./validation");

router.get("/", PollController.getPolls);
router.get("/:id", PollController.getPollById);
router.post("/", PollValidator.createPollSchema, PollController.createPoll);
router.patch("/:id", PollController.updatePoll);
router.delete("/:id", PollController.deletePoll);

module.exports = router;
