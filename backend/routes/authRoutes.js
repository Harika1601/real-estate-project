const express = require("express");
const router = express.Router();
const User = require("../models/User");

/* SIGNUP */
router.post("/signup", async (req, res) => {

  try {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({
      username,
      email,
      password
    });

    await user.save();

    res.json({ message: "Signup successful" });

  } catch (error) {

    console.log("Signup Error:", error);

    res.status(500).json({ message: "Server error" });

  }

});

/* LOGIN */
router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    res.json({
      message: "Login successful",
      user
    });

  } catch (error) {

    console.log("Login Error:", error);

    res.status(500).json({ message: "Server error" });

  }

});

module.exports = router;