const express = require("express");
const router = express.Router();
const Property = require("../models/property");

// 🔍 SEARCH PROPERTIES
router.get("/search", async (req, res) => {
  try {
    const q = req.query.q?.trim();

    console.log("🔍 Search request:", q);

    if (!q || q.toLowerCase() === "all") {
      const properties = await Property.find();
      console.log(`📦 Sending all properties (${properties.length})`);
      return res.json(properties);
    }

    const properties = await Property.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { type: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } },
      ],
    });

    console.log(`✅ Found ${properties.length} matching properties`);

    res.json(properties);
  } catch (err) {
    console.error("❌ Search error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ GET ALL PROPERTIES
router.get("/", async (req, res) => {
  try {
    console.log("📤 Fetching all properties");

    const properties = await Property.find();

    console.log(`✅ ${properties.length} properties returned`);

    res.json(properties);
  } catch (err) {
    console.error("❌ Fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ SAVE PROPERTY
router.post("/", async (req, res) => {
  try {
    console.log("📥 New property request received");
    console.log(req.body);

    const property = new Property(req.body);
    const savedProperty = await property.save();

    console.log("✅ Property saved to MongoDB:", savedProperty._id);

    res.status(201).json({
      message: "Property saved successfully",
      data: savedProperty,
    });
  } catch (err) {
    console.error("❌ Save error:", err);
    res.status(500).json({ message: "Failed to save property" });
  }
});

module.exports = router;