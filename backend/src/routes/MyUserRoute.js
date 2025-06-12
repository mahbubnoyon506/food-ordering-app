const express = require("express");
const router = express.Router();
const MyUserController = require("../controllers/MyUserController");
const { jwtCheck } = require("../middleware/auth");

router.get("/", MyUserController.getCurrentUser);
router.post("/", jwtCheck, MyUserController.createCurrentUser);

module.exports = router;
