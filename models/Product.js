const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  category: { type: String, required: true }, // screen-guard, phone-case etc.

  baseModel: { type: String, required: true },
  modelNumber: { type: String },

  // SCREEN GUARD SPECIAL FIELDS
  height: { type: String },
  width: { type: String },
  topLeftRadius: { type: String },
  topRightRadius: { type: String },
  bottomLeftRadius: { type: String },
  bottomRightRadius: { type: String },

  compatibleDevices: [{ type: String }],

  originalDrawingUrl: { type: String }, // image upload URL optional
});

module.exports = mongoose.model("Product", productSchema);
