const express = require("express");
const router = express.Router();
const UserController = require("./controller");
const AuthMiddleware = require("../../core/middleware/auth");
const UserValidator = require("./validation/index");

router.get("/", AuthMiddleware.jwtTokenValidation, UserController.getAllUser);
router.get(
  "/:id",
  AuthMiddleware.jwtTokenValidation,
  UserController.getUserById
);
router.post("/", UserValidator.createUserSchema, UserController.createUser);
router.delete(
  "/:id",
  AuthMiddleware.jwtTokenValidation,
  UserController.deleteUser
);
module.exports = router;
