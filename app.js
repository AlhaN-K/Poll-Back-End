var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
var app = express();
const userRouter = require("./src/module/users/router");
const AuthMiddleware = require("./src/core/middleware/auth");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/users", userRouter);
app.post("/login", AuthMiddleware.login);
module.exports = app;
