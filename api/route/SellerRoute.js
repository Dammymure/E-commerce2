const express = require('express');
const router = express.Router()
const Seller = require('../models/SellerModel')
const { createNewSeller, getOneSeller, updateSeller, loginSeller } = require('../controller/SellerController')

router.post("/seller/create", createNewSeller)
router.get("/seller/:id", getOneSeller)
router.put("/seller/update/:id", updateSeller)
router.post("/seller/login", loginSeller)

module.exports = router