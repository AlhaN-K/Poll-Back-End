const express = require("express");
const router = express.Router();
const itemsController = require("./controller");
const itemsValidator = require("./validation/index");
const AuthMiddleware = require("../../core/middleware/auth");

router.get("/", AuthMiddleware.jwtTokenValidation, itemsController.getItems);
router.get(
  "/:id",
  AuthMiddleware.jwtTokenValidation,
  itemsController.getItemById
);
router.post(
  "/",
  AuthMiddleware.jwtTokenValidation,
  itemsValidator.createItemSchema,
  itemsController.createItems
);

module.exports = router;
