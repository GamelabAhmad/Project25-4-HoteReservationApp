// routes/bookingRoutes.js
const express = require("express");
const router = express.Router();
const bookingsController = require("../controllers/bookingsController");

router.get("/", bookingsController.getAllBookings);
router.get("/:id", bookingsController.getBookingById);
router.post("/", bookingsController.createBooking);

// router.put("/:id", bookingsController.updateBooking);
// router.delete("/:id", bookingsController.deleteBooking);

module.exports = router;
