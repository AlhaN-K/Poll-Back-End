const express = require("express");
const router = express.Router();
const ItemsController = require("./controller");
const ItemsValidator = require("./validation/index");
const AuthMiddleware = require("../../core/middleware/auth");

router.get("/", AuthMiddleware.jwtTokenValidation, ItemsController.getItems);
router.get(
  "/:id",
  AuthMiddleware.jwtTokenValidation,
  ItemsController.getItemById
);
router.get("/id/:id", ItemsController.getItemByPollId);
router.post(
  "/",
  AuthMiddleware.jwtTokenValidation,
  ItemsValidator.createItemSchema,
  ItemsController.createItems
);

module.exports = router;
