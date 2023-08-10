const express = require('express')
const User = require("../models/UserModel")

const createNewUser = async (req, res) => {
 try {
  const { fullname, email, password, phone, imageURL } = req.body
  // To check if the input already exists using unique email
  const existingUser = await User.findOne({ email: email })
  // if it exists give error
  if (existingUser) {
   return res.json({ msg: "User already exists", existingUser })
  }

  // If it doesnt exist create user 
  const createUser = await User.create({ fullname, email, password, phone, imageURL })
  res.status(201).json({ msg: "You have been registered", createUser })
 }
 catch (err) {
  res.send(err)
 }
}

// Fetch single User
const getOneUser = async (req, res) => {
 try {
  const { id } = req.params
  const getSingleUser = await User.findOne({ _id: id })
  res.status(200).json(getSingleUser)
 } catch (err) {
  res.send(err)
 }
}


// Update User
const updateUser = async (req, res) => {
 try {
  const { id } = req.params
  const editUser = await User.findOneAndUpdate({ _id: id }, req.body, {
   new: true,
   runValidators: true,
  }
  )
  res.status(200).json({ msg: "record successfully updated", editUser })
 }
 catch (err) {
  res.send(err)
 }
}

// Login Admin
const loginUser = async (req, res) => {
 try {
  const { fullname, email, password, phone, imageURL } = req.body
  const existingUser = await User.findOne({ email: email })
  if (existingUser && (await existingUser.isPasswordMatch(password))) {
   return res.json({
    _id: existingUser._id,
    fullname: existingUser.fullname,
    email: existingUser.email,
    phone: existingUser.phone,
    imageURL: existingUser.imageURL,
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

// Deleting User
const deleteUser = async (req, res) => {
 try {
  const { id } = req.params
  const deleteSingleUser = await User.findOneAndDelete({ _id: id })
  res.status(200).json({ msg: "User Record deleted successfully", deleteSingleUser })
 } catch (err) {
  res.send(err)
 }
}

module.exports = { createNewUser, getOneUser, updateUser, loginUser, deleteUser }