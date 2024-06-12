const Room = require("../models/Rooms");

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }
    const imagePath = req.file.path;
    // Simpan path gambar ke database, pastikan imagePath menyimpan path yang lengkap
    const room = await Room.findByPk(req.body.roomId);
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    room.image = imagePath;
    await room.save();
    res.status(200).json({ imageUrl: imagePath });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

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
