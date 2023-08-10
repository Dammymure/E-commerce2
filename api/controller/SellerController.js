const express = require('express')
const Seller = require('../models/SellerModel')

// Create a New Seller
const createNewSeller = async (req, res) => {
 try {
  // Destructure the data
  const { fullname, email, password, phone, imageURL } = req.body
  // Check if the inputed data exists using the unique email
  const existingSeller = await Seller.findOne({ email: email })
  // if it exists give error
  if (existingSeller) {
   return res.json({ msg: "Seller already exists", existingSeller })
  }
  // If it doesn't exist create user
  const createSeller = await Seller.create({ fullname, email, password, phone, imageURL })
  res.status(201).json({ msg: "You have been registered", createSeller })
 }
 catch (err) {
  res.send(err)
 }
}

// Fetch single Seller
const getOneSeller = async (req, res) => {
 try {
  const { id } = req.params
  const getSingleSeller = await Seller.findOne({ _id: id })
  res.status(200).json(getSingleSeller)
 } catch (err) {
  res.send(err)
 }
}

// Update Seller
const updateSeller = async (req, res) => {
 try {
  const { id } = req.params
  const editSeller = await Seller.findOneAndUpdate({ _id: id }, req.body, {
   new: true,
   runValidators: true,
  }
  )
  res.status(200).json({ msg: "record successfully updated", editSeller })
 }
 catch (err) {
  res.send(err)
 }
}



// Login Admin
const loginSeller = async (req, res) => {
 try {
  const { fullname, email, password, phone, imageURL } = req.body
  const existingSeller = await Seller.findOne({ email: email })
  if (existingSeller && (await existingSeller.isPasswordMatch(password))) {
   return res.json({
    _id: existingSeller._id,
    fullname: existingSeller.fullname,
    email: existingSeller.email,
    phone: existingSeller.phone,
    // password: existingAdmin.password,
    imageURL: existingSeller.imageURL,
    msg: "You have successfully logged IN"
   })
  }
  else {
   res.json({ msg: 'Invalid credentials' })
  }
 }
 catch (err) {

 }

}

module.exports = { createNewSeller, getOneSeller, updateSeller, loginSeller }