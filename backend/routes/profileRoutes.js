// routes/profileRoutes.js
const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
const authMiddleware = require("../middleware/authMiddleware");

// Route untuk mendapatkan profil pengguna
router.get("/profile", authMiddleware, profileController.getProfile);

module.exports = router;
