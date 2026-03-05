const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    price: String,
    address: String,
    bhk: String,
    bathrooms: String,
    area: String,
    age: String,
    status: String,
    paymentOptions: [String],
    description: String,
    images: [String],
    contact: {
      name: String,
      phone: String,
      email: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);