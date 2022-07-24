const express = require("express");
const router = express.Router();
const UserControler = require("./controller");
const AuthMiddleware = require("../../core/middleware/auth");
router.get("/", AuthMiddleware.jwtTokenValidation, UserControler.getAllUser);
router.get(
  "/:id",
  AuthMiddleware.jwtTokenValidation,
  UserControler.getUserById
);
router.post("/", UserControler.createUser);

module.exports = router;
