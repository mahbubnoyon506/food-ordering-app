const express = require("express");
const router = express.Router();
const MyUserController = require("../controllers/MyUserController");

router.get("/", MyUserController.getCurrentUser);
router.post("/", MyUserController.createCurrentUser);

module.exports = router;
