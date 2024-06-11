const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const User = require("./User"); // Mengimpor model User
const Room = require("./Rooms"); // Mengimpor model Room

const Booking = sequelize.define(
  "Booking",
  {
    booking_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    check_in_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    check_out_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    room_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    noted: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User, // Referensi ke model User
        key: "user_id", // Kolom user_id di model User
      },
      onDelete: "CASCADE", // Menghapus booking jika user dihapus
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Room, // Referensi ke model Room
        key: "room_id", // Kolom room_id di model Room
      },
      onDelete: "CASCADE", // Menghapus booking jika room dihapus
    },
    booking_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "tbl_bookings",
    timestamps: true,
    createdAt: "booking_date",
    updatedAt: "updated_at",
  }
);

// Definisikan relasi
Booking.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" }); // Relasi ke model User
Booking.belongsTo(Room, { foreignKey: "room_id", onDelete: "CASCADE" }); // Relasi ke model Room

module.exports = Booking; // Ekspor model Booking
