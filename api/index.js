const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()

const userRouter = require("./route/UserRoute")
const sellerRouter = require('./route/SellerRoute')
const productRouter = require("./route/ProductRoute")


app.use(cors())
// const userRouter = require("./route/UserRoute")
// const sellerRouter = require('./route/SellerRoute')
// const productRouter = require("./route/ProductRoute")
const bodyParser = require('body-parser');

// Connect server to database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database is connected successfully");
  })
  .catch((err) => {
    console.log(err);
  })


app.use(express.json())

// middlewae for user router
app.use("/api", userRouter)
// middlewae for user router
app.use("/api", sellerRouter)
// middlewae for user router
app.use("/api", productRouter)


if (process.env.API_PORT) {
  app.listen(process.env.API_PORT, () => {
    console.log(`Server running on port ${process.env.API_PORT}`);
  })
}

module.exports = app