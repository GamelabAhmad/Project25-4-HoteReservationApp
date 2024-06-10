// controllers/bookingsController.js
const Booking = require("../models/Bookings");
const User = require("../models/User");
const Room = require("../models/Rooms");

// Controller untuk mendapatkan semua booking
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      include: [
        { model: User, attributes: ["full_name", "email"] },
        { model: Room, attributes: ["room_name", "price"] },
      ],
    });
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller untuk mendapatkan detail booking berdasarkan ID
exports.getBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findByPk(id, {
      include: [
        { model: User, attributes: ["full_name", "email"] },
        { model: Room, attributes: ["room_name", "price"] },
      ],
    });
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller untuk membuat booking baru
exports.createBooking = async (req, res) => {
  const {
    user_id,
    room_id,
    name,
    email,
    check_in_date,
    check_out_date,
    room_type,
    noted,
  } = req.body;
  try {
    const booking = await Booking.create({
      user_id,
      room_id,
      name,
      email,
      check_in_date,
      check_out_date,
      room_type,
      noted,
    });
    res.status(201).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// // // Controller untuk memperbarui booking
// // exports.updateBooking = async (req, res) => {
// //   const { id } = req.params;
// //   const {
// //     user_id,
// //     room_id,
// //     name,
// //     email,
// //     check_in_date,
// //     check_out_date,
// //     room_type,
// //     noted,
// //   } = req.body;
// //   try {
// //     const booking = await Booking.findByPk(id);
// //     if (!booking) {
// //       return res.status(404).json({ error: "Booking not found" });
// //     }
// //     booking.user_id = user_id;
// //     booking.room_id = room_id;
// //     booking.name = name;
// //     booking.email = email;
// //     booking.check_in_date = check_in_date;
// //     booking.check_out_date = check_out_date;
// //     booking.room_type = room_type;
// //     booking.noted = noted;
// //     await booking.save();
// //     res.json(booking);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// // };

// // // Controller untuk menghapus booking
// // exports.deleteBooking = async (req, res) => {
// //   const { id } = req.params;
// //   try {
// //     const booking = await Booking.findByPk(id);
// //     if (!booking) {
// //       return res.status(404).json({ error: "Booking not found" });
// //     }
// //     await booking.destroy();
// //     res.json({ message: "Booking deleted successfully" });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// };
