const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")




const productSchema = new mongoose.Schema({
 name: {
  type: String,
  required: [true, "Please enter product name"]
 },
 description: {
  type: String,
  required: [true, "Please enter description"]
 },
 price: {
  type: Number,
  required: [true, "Please enter price"]
 },
 quantity: {
  type: Number
 },
 imageURL: {
  type: String,
  required: [true, "Please enter photo"]
 }
},
 {
  timestamps: true,
 }
)


const Product = mongoose.model("Product", productSchema)
module.exports = Product