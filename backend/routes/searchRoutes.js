const express = require("express");
const router = express.Router();
const Property = require("../models/property");

// 🔍 UNIVERSAL SEARCH
router.get("/", async (req, res) => {
  try {
    const q = req.query.q?.trim().toLowerCase();

    console.log("🔍 Search query:", q);

    // ✅ if empty OR all → return all
    if (!q || q === "all") {
      const properties = await Property.find();
      return res.json(properties);
    }

    // ✅ smart search
    const properties = await Property.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } },
        { address: { $regex: q, $options: "i" } },
      ],
    });

    res.json(properties);
  } catch (err) {
    console.error("❌ Search error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;