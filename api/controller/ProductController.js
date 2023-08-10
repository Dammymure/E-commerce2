const express = require('express')
const Product = require("../models/ProductsModel")

// Create products
const createProduct = async (req, res) => {
 try {

  const { name, description, price, quantity, imageURL } = req.body
  // If it doesnt exist create user 
  const createproduct = await Product.create({ name, description, price, quantity, imageURL })
  res.status(201).json({ msg: "You have registered your product", createproduct })
 }
 catch (err) { res.send(err) }

}

// Fetch all products
const fetchAllProducts = async (req, res) => {
 try {
  const getAllProducts = await Product.find()
  res.status(200).json(getAllProducts)
 }
 catch (err) {
  res.send(err)
 }
}

// Fetch single product
const getOneProduct = async (req, res) => {
 try {
  const { id } = req.params
  const getSingleProduct = await Product.findOne({ _id: id })
  res.status(200).json(getSingleProduct)
 } catch (err) {
  res.send(err)
 }
}

// Update Product
const updateProduct = async (req, res) => {
 try {
  const { id } = req.params
  const editProduct = await Product.findOneAndUpdate({ _id: id }, req.body, {
   new: true,
   runValidators: true,
  }
  )
  res.status(200).json({ msg: "Product successfully updated", editProduct })
 }
 catch (err) {
  res.send(err)
 }
}

// Deleting Product
const deleteProduct = async (req, res) => {
 try {
  const { id } = req.params
  const deleteSingleProduct = await Product.findOneAndDelete({ _id: id })
  res.status(200).json({ msg: "Product Record deleted successfully", deleteSingleProduct })
 } catch (err) {
  res.send(err)
 }
}



module.exports = { createProduct, fetchAllProducts, getOneProduct, updateProduct, deleteProduct }