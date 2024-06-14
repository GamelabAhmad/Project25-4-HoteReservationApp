const Booking = require("../models/Bookings");

exports.createBooking = async (req, res) => {
  try {
    const {
      name,
      email,
      checkInDate,
      checkOutDate,
      roomType,
      specialRequests,
      // userId,
      // roomId,
    } = req.body;

    const booking = await Booking.create({
      name,
      email,
      check_in_date: checkInDate,
      check_out_date: checkOutDate,
      room_type: roomType,
      noted: specialRequests,
      // user_id: userId,
      // room_id: roomId,
    });

    res.status(201).json(booking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
