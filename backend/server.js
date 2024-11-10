// const express = require('express')
import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';
import mongoose from 'mongoose';

dotenv.config();


const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.get("/api/products", async(req, res) =>{
    try {
        const products = await Product.find({})
        res.status(200).json({
            success: true,
            data: products
        })
    } catch (error) {
        console.log("Error in fetching products:", error.message);
        res.status(500).json({
            success: false,
            message: "Server Error"
        })

    }

})

app.get("/api/products/:id", async(req, res) =>{
    const {id} = req.params
    console.log(id)
    try {
        const product = await Product.findById(id)
        return res.status(200).json({
            success: true,
            data: product
        })
    } catch (error) {
        console.log("Error in fetching product:", error.message);
        res.status(504).json({
            success: false,
            message: "Product not found"
        })

    }

})

app.put("/api/products/:id", async(req, res) => {
    const { id } = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            success: false,
            message: "Invalid Product Id"
        });
    }

    try {
        const updateProduct = await Product.findByIdAndUpdate(id, product, {new:true})
        res.status(200).json({
            success: true,
            data: updateProduct
        })

    } catch (error) {
        console.log("Error menssage:", error.message)
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }


})

app.post("/api/products", async (req, res) => {
    // res.send("Server is ready");
    const product = req.body; // user will send this data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({
            success:false,
            message: "Please provide all fields"
        })
    }
    const newProduct = new Product(product)
    
    try {
        await newProduct.save();
        res.status(201).json({
            success:true,
            data: newProduct
        })
    } catch (error) {
        console.error("Error in Create product:", error.message)
        res.status(500).json({
            success:false,
            message: "Server Error"
        })
    }

});

// console.log(process.env.MONGO_URI);

app.delete("/api/products/:id", async (req, res) => {
    const {id} = req.params;
    console.log("id:", id);
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Product deleted"
        })
    } catch (error) {
        console.error("Error in deleting product:", error.message)
        res.status(404).json({
            success: false,
            message: "Server Error"
        })
        
    }
} )

app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
});

