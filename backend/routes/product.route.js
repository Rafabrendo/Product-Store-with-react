import express from "express";

import { getProducts, findById, updateProduct, createProduct, deleteProduct } from "../controllers/product.controller.js";


const router = express.Router();

router.get("/", getProducts);

router.get("/:id", findById);

router.put("/:id", updateProduct);

router.post("/", createProduct);

// console.log(process.env.MONGO_URI);

router.delete("/:id", deleteProduct);

export default router;