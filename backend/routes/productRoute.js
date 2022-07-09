import express from "express";
import ProductController from "../controllers/productController.js";

const router = express.Router();

router.get("/products", ProductController.getAllProduct);

export default router;