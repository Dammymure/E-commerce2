const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")


const sellerSchema = new mongoose.Schema({
 fullname: {
  type: String,
  required: [true, "Please enter fullname"]
 },
 email: {
  type: String,
  required: [true, "Please enter email"]
 },
 password: {
  type: String,
  required: [true, "Please enter password"]
 },
 phone: {
  type: String,
  required: [true, "Please enter phone number"]
 },
 imageURL: {
  type: String,
  required: [true, "Please enter photo"]
 },
},
 {
  timestamps: true,
 }
)

// Hashing of password
sellerSchema.pre("save", async function (next) {
 const salt = await bcrypt.genSalt(10)
 this.password = await bcrypt.hash(this.password, salt)
 next()
})

// Verify password
sellerSchema.methods.isPasswordMatch = async function (enteredPassword) {
 return await bcrypt.compare(enteredPassword, this.password)
}


const Seller = mongoose.model("Seller", sellerSchema)
module.exports = Seller