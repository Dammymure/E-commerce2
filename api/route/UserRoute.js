const express = require('express')
const router = express.Router()
const User = require("../models/UserModel")
const { createNewUser, updateUser, getOneUser, loginUser, deleteUser } = require('../controller/UserControl')



// Routes for post operations
router.post("/users/create", createNewUser)

// Routes for get one operations
router.get("/users/:id", getOneUser)

// Router for get user operation
router.put('/users/update/:id', updateUser)

// User Login
router.post('/users/login', loginUser)

// Router for deleting user
router.delete('/users/delete/:id', deleteUser)

module.exports = router