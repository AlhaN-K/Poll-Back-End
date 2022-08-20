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
const itemsRouter = require("./src/module/Items/router");
const participantRouter = require("./src/module/participants/router");
const choicesRouter = require("./src/module/choices/router");
const AuthMiddleware = require("./src/core/middleware/auth");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", userRouter);
app.use("/api/polls", pollRouter);
app.use("/api/pollItems", itemsRouter);
app.use("/api/participants", participantRouter);
app.use("/api/choices", choicesRouter);

app.post("/api/login", AuthMiddleware.login);

app.use(errors());

module.exports = app;
