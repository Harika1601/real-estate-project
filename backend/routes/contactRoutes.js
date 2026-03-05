const express = require("express");
const router = express.Router();
const Contact = require("../models/contactModel");

// ================= CONTACT FORM =================
router.post("/", async (req, res) => {
  try {

    console.log("📡 POST /api/contact request received");
    console.log("📞 Contact form submitted:", req.body);

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      console.log("❌ Missing fields");
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const contact = new Contact({
      name,
      email,
      message,
    });

    const savedContact = await contact.save();

    console.log("✅ Contact saved in MongoDB:", savedContact._id);

    res.status(201).json({
      message: "Contact message saved",
      data: savedContact,
    });

  } catch (error) {

    console.error("❌ Contact error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;