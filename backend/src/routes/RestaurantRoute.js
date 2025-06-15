const express = require("express");
const router = express.Router();

router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City paramenter must be a valid string"),
  RestaurantController.searchRestaurant
);

module.exports = router;
