const express = require("express");
const router = express.Router();
const Payment = require("../models/payment");

// ================= PAYMENT =================
router.post("/", async (req, res) => {
  try {

    console.log("💳 Payment request received:", req.body);

    const payment = new Payment(req.body);
    const savedPayment = await payment.save();

    console.log("✅ Payment stored in MongoDB:", savedPayment._id);

    res.status(201).json(savedPayment);

  } catch (error) {

    console.error("❌ Payment error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;