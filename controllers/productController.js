const Product = require("../models/Product");

// ADD PRODUCT
exports.addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.json({ success: true, product });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

// GET ALL PRODUCTS BY CATEGORY
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    return res.json({ success: true, products });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

// UPDATE PRODUCT
exports.updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.json({ success: true, updated });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.json({ success: true });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};
