var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
var cors = require("cors");
const { errors } = require("celebrate");
var app = express();

const userRouter = require("./src/module/users/router");
const pollRouter = require("./src/module/polls/router");
const itemsRouter = require("./src/module/items/router");
const participantRouter = require("./src/module/participants/router");
const AuthMiddleware = require("./src/core/middleware/auth");

app.use(cors({ origin: "*", methods: "GET,HEAD,PUT,PATCH,POST,DELETE" }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/users", userRouter);
app.use("/polls", pollRouter);
app.use("/pollItems", itemsRouter);
app.use("/participants", participantRouter);
app.post("/login", AuthMiddleware.login);

app.use(errors());

module.exports = app;
