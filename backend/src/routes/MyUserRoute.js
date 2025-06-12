const express = require("express");
const router = express.Router();
const MyUserController = require("../controllers/MyUserController");

router.post("/", MyUserController.createCurrentUser);

module.exports = router;
