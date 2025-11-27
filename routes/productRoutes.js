const express = require("express");
const router = express.Router();
const {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

// POST → Add product
router.post("/add", addProduct);

// GET → Get products by category
router.get("/:category", getProducts);

// PUT → Update product
router.put("/update/:id", updateProduct);

// DELETE → Delete product
router.delete("/delete/:id", deleteProduct);

module.exports = router;
