const express = require("express");
const router = express.Router();
const PollController = require("./controller");

router.get("/", PollController.getPolls);
router.get("/:id", PollController.getPollById);
router.post("/", PollController.createPoll);
router.patch("/:id", PollController.updatePoll);
router.delete("/:id", PollController.deletePoll);

module.exports = router;
