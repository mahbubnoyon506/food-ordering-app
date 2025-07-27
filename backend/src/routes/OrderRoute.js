const express = require("express")
const router = express.Router()
const { jwtCheck, jwtParse } = require("../middleware/auth");
const OrderController = require("../controllers/OrderController")

router.post(
    "/checkout/create-checkout-session",
    jwtCheck,
    jwtParse,
    OrderController.createCheckoutSession
);

module.exports = router