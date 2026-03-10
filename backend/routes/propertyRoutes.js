const express = require("express");
const router = express.Router();
const Property = require("../models/property");

/* POST PROPERTY */
router.post("/", async (req, res) => {
  try {
    const property = new Property(req.body);
    const savedProperty = await property.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    console.error("❌ Error saving property:", error);
    res.status(500).json({ message: "Failed to save property" });
  }
});

/* SEARCH PROPERTY */
router.get("/search", async (req, res) => {
  try {
    const q = req.query.q?.trim();

    const properties = await Property.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } },
        { address: { $regex: q, $options: "i" } }
      ]
    });

    res.json(properties);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Search failed" });
  }
});

module.exports = router;