const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    propertyId: {
      type: String,
      required: true,
    },

    propertyTitle: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    paymentType: {
      type: String,
      enum: ["EMI", "FULL"],
      required: true,
    },

    paymentMethod: {
      type: String,
      enum: ["CARD", "UPI", "CASH"],
      default: "CARD",
    },

    userEmail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);