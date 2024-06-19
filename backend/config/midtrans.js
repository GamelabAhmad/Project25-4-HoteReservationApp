// config/midtrans.js

const midtransClient = require("midtrans-client");

const snap = new midtransClient.Snap({
  isProduction: false, // ganti menjadi true jika sudah di production
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

module.exports = snap;
