const express = require("express");
const router = express.Router();
const MyUserController = require("../controllers/MyUserController");
const { jwtCheck, jwtParse } = require("../middleware/auth");
const { validateMyUserRequest } = require("../middleware/validation");

router.get("/", MyUserController.getCurrentUser);
router.post("/", jwtCheck, MyUserController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  MyUserController.updateCurrentUser
);

module.exports = router;
