const express = require("express");
const router = express.Router();
const Property = require("../models/property");

// 🔥 SEARCH PROPERTIES
router.get("/search", async (req, res) => {
  try {
    const q = req.query.q;

    if (!q) {
      return res.json([]);
    }

    const results = await Property.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { address: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } },
      ],
    });

    res.json(results);
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ message: "Search failed" });
  }
});

module.exports = router;