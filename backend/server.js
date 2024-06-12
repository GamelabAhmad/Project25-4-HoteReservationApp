const express = require("express");
const cors = require("cors");
const { sequelize } = require("./config/database");
const dotenv = require("dotenv");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const bookingRoutes = require("./routes/bookingRoutes");
const roomRoutes = require("./routes/roomRoutes"); // Menambahkan import untuk roomRoutes

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/auth", require("./routes/googleAuthRoutes"));
app.use("/api", roomRoutes); // Menggunakan roomRoutes di endpoint '/api'
app.use("/api", bookingRoutes);

app.post("/api/google-login", async (req, res) => {
  const { tokenId } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userId = payload["sub"];

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
