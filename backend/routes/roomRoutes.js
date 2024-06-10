// routes/roomRoutes.js
const express = require("express");
const router = express.Router();
const roomsController = require("../controllers/roomsController");

// Endpoint untuk mendapatkan semua kamar
router.get("/rooms", roomsController.getAllRooms);

// Endpoint untuk mendapatkan detail kamar berdasarkan ID
router.get("/rooms/:id", roomsController.getRoomById);

module.exports = router;
