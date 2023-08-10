const express = require('express');
const router = express.Router()
const Product = require('../models/ProductsModel')
const { createProduct, fetchAllProducts, getOneProduct, updateProduct, deleteProduct } = require('../controller/ProductController')

// create products
router.post("/products/create", createProduct)

// fetch products
router.get("/products", fetchAllProducts)
// Fetch single product
router.get('/products/:id', getOneProduct)
// Product single product
router.put('/products/update/:id', updateProduct)
// Delete single product
router.delete('/products/delete/:id', deleteProduct)

module.exports = router