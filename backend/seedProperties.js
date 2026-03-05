require("dotenv").config();
const mongoose = require("mongoose");
const Property = require("./models/property");

// 🔥 Convert your frontend data to backend format
const properties = [
  {
    title: "Independent House",
    price: 2500000,
    address: "123 Ameerpet, Hyderabad, Telangana",
    image: "/images/house1.image1.png",
  },
  {
    title: "Traditional House",
    price: 450000,
    address: "78 Banjara Hills, Hyderabad, Telangana",
    image: "/images/house2.image1.png",
  },
  {
    title: "Family Home",
    price: 320000,
    address: "45 Boduppal, Hyderabad, Telangana",
    image: "/images/house3.image1.png",
  },
  {
    title: "City Apartment",
    price: 2800000,
    address: "22 Punjagutta, Hyderabad, Telangana",
    image: "/images/house4.image1.png",
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");

    // 🧹 clear old data (optional but recommended)
    await Property.deleteMany({});

    // 🌱 insert new
    await Property.insertMany(properties);

    console.log("🎉 Properties seeded successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Seed error:", err);
    process.exit(1);
  }
}

seed();