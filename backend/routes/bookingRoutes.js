const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingsController");

router.post("/bookings", bookingController.createBooking);

module.exports = router;
