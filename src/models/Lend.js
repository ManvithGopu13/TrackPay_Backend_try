const mongoose = require("mongoose");

const LendSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    interestType: { type: String, enum: ["simple", "compound"], required: true },
    period: { type: String, enum: ["daily","weekly", "monthly", "yearly"], required: true },
    status: { type: String, enum: ["active", "closed"], default: "active" },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lend", LendSchema);
