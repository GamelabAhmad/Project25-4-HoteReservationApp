// backend/controllers/googleAuthController.js
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");

dotenv.config();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.googleLogin = async (req, res) => {
  const { tokenId } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { email, name, sub: googleId } = ticket.getPayload();

    let user = await User.findOne({ where: { email } });
    if (!user) {
      user = await User.create({
        full_name: name,
        email,
        password: googleId, // Google ID digunakan sebagai password sementara
      });
    }

    const payload = { user: { user_id: user.user_id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: "Google login failed" });
  }
};
