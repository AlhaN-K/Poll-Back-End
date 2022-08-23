const express = require("express");
const router = express.Router();
const ParticipantController = require("./controller");
const ParticipantValidator = require("./validation");
const AuthMiddleware = require("../../core/middleware/auth");

router.get(
  "/",
  AuthMiddleware.jwtTokenValidation,
  ParticipantController.getParticipants
);
router.get(
  "/:id",
  AuthMiddleware.jwtTokenValidation,
  ParticipantController.getParticipantById
);
router.get("/id/:id", ParticipantController.getParticipantByPollId);
router.post(
  "/",
  AuthMiddleware.jwtTokenValidation,
  ParticipantValidator.createParticipantSchema,
  ParticipantController.createParticipant
);
router.patch(
  "/:id",
  AuthMiddleware.jwtTokenValidation,
  ParticipantValidator.updateParticipantSchema,
  ParticipantController.updateParticipant
);
router.delete(
  "/:id",
  AuthMiddleware.jwtTokenValidation,
  ParticipantController.deleteParticipant
);
module.exports = router;
