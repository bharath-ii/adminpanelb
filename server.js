require("dotenv").config(); 
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// CONNECT DB
connectDB();

// ROUTES
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Admin Panel Backend Running ✔");
});

// START SERVER
app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
