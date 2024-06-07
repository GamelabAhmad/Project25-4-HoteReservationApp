const express = require("express");
const { sequelize } = require("./config/database");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
// Tambahkan rute lainnya jika ada
// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/rooms', require('./routes/roomRoutes'));
// app.use('/api/bookings', require('./routes/bookingRoutes'));

// Test database connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
