const express = require("express")
const router = express.Router()

router.post(
    "/checkout/create-checkout-session",
    jwtCheck,
    jwtParse,
    OrderController.createCheckoutSession
);

module.exports = router