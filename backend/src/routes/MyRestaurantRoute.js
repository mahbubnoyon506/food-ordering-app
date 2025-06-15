const express = require("express");
const router = express.Router();
const multer = require("multer");
const MyRestaurantController = require("../controllers/MyRestaurantController");
const { validateMyRestaurantRequest } = require("../middleware/validation");
const { jwtCheck, jwtParse } = require("../middleware/auth");

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

router.get("/", jwtCheck, jwtParse, MyRestaurantController.getMyRestaurant);

router.post(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  MyRestaurantController.createMyRestaurant
);

module.exports = router;
