const express = require("express");
const router = express.Router();
const PollController = require("./controller");
const PollValidator = require("./validation");
const AuthMiddleware = require("../../core/middleware/auth");

router.get("/", AuthMiddleware.jwtTokenValidation, PollController.getPolls);
router.get("/:id", PollController.getPollById);
router.post(
  "/",
  AuthMiddleware.jwtTokenValidation,
  PollValidator.createPollSchema,
  PollController.createPoll
);
router.patch(
  "/title/:id",
  AuthMiddleware.jwtTokenValidation,
  PollValidator.updateTitleSchema,
  PollController.updatePollTitle
);
router.patch(
  "/description/:id",
  AuthMiddleware.jwtTokenValidation,
  PollValidator.updateDescriptionSchema,
  PollController.updatePollDescription
);
router.delete(
  "/:id",
  AuthMiddleware.jwtTokenValidation,
  PollController.deletePoll
);

module.exports = router;
