const express = require("express");
const router = express.Router();
const ChoiceController = require("./controller");
const AuthMiddleware = require("../../core/middleware/auth");
const ChoiceValidator = require("./validation/index");

router.get("/", AuthMiddleware.jwtTokenValidation, ChoiceController.getChoices);
router.get(
  "/:id",
  AuthMiddleware.jwtTokenValidation,
  ChoiceController.getChoiceById
);
router.get("/id/:id", ChoiceController.getChoiceById);
router.post(
  "/",
  AuthMiddleware.jwtTokenValidation,
  ChoiceValidator.createChoiceSchema,
  ChoiceController.createChoice
);

module.exports = router;
