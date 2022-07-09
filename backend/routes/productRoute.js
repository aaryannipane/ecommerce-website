import express from "express";
import ProductController from "../controllers/productController.js";

const router = express.Router();

router.get("/products", ProductController.getAllProduct);
router.post("/product/new", ProductController.createProduct);
router.put("/product/:id", ProductController.updateProduct);

export default router;