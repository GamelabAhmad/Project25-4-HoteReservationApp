// controllers/roomController.js
const Room = require("../models/Rooms");

// Controller untuk mendapatkan semua kamar
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller untuk mendapatkan detail kamar berdasarkan ID
exports.getRoomById = async (req, res) => {
  const { id } = req.params;
  try {
    const room = await Room.findByPk(id);
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    res.json(room);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// // Controller untuk membuat kamar baru
// exports.createRoom = async (req, res) => {
//   const { image, room_name, price, ukuran, kapasitas, tempat_tidur, layanan } = req.body;
//   try {
//     const room = await Room.create({
//       image,
//       room_name,
//       price,
//       ukuran,
//       kapasitas,
//       tempat_tidur,
//       layanan,
//     });
//     res.status(201).json(room);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // Controller untuk memperbarui kamar berdasarkan ID
// exports.updateRoom = async (req, res) => {
//   const { id } = req.params;
//   const { image, room_name, price, ukuran, kapasitas, tempat_tidur, layanan } = req.body;
//   try {
//     let room = await Room.findByPk(id);
//     if (!room) {
//       return res.status(404).json({ error: "Room not found" });
//     }
//     room = await room.update({
//       image,
//       room_name,
//       price,
//       ukuran,
//       kapasitas,
//       tempat_tidur,
//       layanan,
//     });
//     res.json(room);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // Controller untuk menghapus kamar berdasarkan ID
// exports.deleteRoom = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const room = await Room.findByPk(id);
//     if (!room) {
//       return res.status(404).json({ error: "Room not found" });
//     }
//     await room.destroy();
//     res.json({ message: "Room deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
