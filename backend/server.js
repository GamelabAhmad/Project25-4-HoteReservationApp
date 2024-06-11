const express = require("express");
const cors = require("cors");
const { sequelize } = require("./config/database");
const dotenv = require("dotenv");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const roomRoutes = require("./routes/roomRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Menggunakan express.json() untuk parse request body

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Rute endpoint
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/auth", require("./routes/googleAuthRoutes"));
app.use("/api", roomRoutes);
app.use("/api", bookingRoutes);

// Rute untuk login dengan Google
app.post("/api/google-login", async (req, res) => {
  const { tokenId } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userId = payload["sub"];

    // Buat dan kirim token JWT untuk aplikasi Anda
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Uji koneksi ke database
sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

// Middleware untuk menangani kesalahan yang tidak tertangkap
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Tentukan port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
