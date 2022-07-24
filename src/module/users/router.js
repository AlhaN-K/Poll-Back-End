const express = require("express");
const router = express.Router();
const UserControler = require("./controller");

router.get("/", UserControler.getAllUser);
router.get("/:id", UserControler.getUserById);
router.post("/", UserControler.createUser);

module.exports = router;
