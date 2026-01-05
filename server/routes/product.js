// server/routes/products.js
import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// Fake products
const products = [
  { id: 1, name: "Cow Milk", price: 50 },
  { id: 2, name: "Ghee", price: 200 },
  { id: 3, name: "Paneer", price: 150 },
  { id: 4, name: "Curd", price: 40 }
];

// GET /api/products
router.get("/", (req, res) => {
  res.json(products);
});

export default router;
