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
router.post("/checkout/webhook", OrderController.stripeWebhookHandler);

module.exports = router