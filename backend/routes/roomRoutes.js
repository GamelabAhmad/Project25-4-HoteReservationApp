const express = require("express");
const router = express.Router();
const roomsController = require("../controllers/roomsController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("image"), roomsController.uploadImage);
router.get("/rooms", roomsController.getAllRooms);
router.get("/rooms/:id", roomsController.getRoomById);

module.exports = router;
