const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

module.exports = function (req, res, next) {
  // Dapatkan token dari header HTTP
  const token = req.header("x-auth-token");

  // Jika tidak ada token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    // Verifikasi token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Tambahkan informasi user dari payload token ke objek request
    req.user = decoded.user;
    next(); // Lanjutkan ke middleware atau controller berikutnya
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
