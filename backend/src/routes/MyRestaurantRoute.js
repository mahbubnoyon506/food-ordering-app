const express = require("express");
const router = express.Router();
const multer = require("multer");
const MyRestaurantController = require("../controllers/MyRestaurantController");

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

router.post(
  "/",
  upload.single("imageFile"),
  //   validateMyRestaurantRequest,
  //   jwtCheck,
  //   jwtParse,
  MyRestaurantController.createMyRestaurant
);

module.exports = router;
