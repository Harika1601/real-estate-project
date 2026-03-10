const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

/* CREATE APP */
const app = express();

/* ROUTES */
const propertyRoutes = require("./routes/propertyRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const contactRoutes = require("./routes/contactRoutes");
const authRoutes = require("./routes/authRoutes");

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* TEST ROUTE (optional) */
app.get("/", (req, res) => {
  res.send("🚀 DreamHouse Backend Running");
});

/* MONGODB CONNECTION */

mongoose
  .connect("mongodb://127.0.0.1:27017/dreamhouse")
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB Error:", err);
  });

/* API ROUTES */

app.use("/api/auth", authRoutes);          // Signup & Login
app.use("/api/properties", propertyRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/contact", contactRoutes);

/* SERVER START */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});