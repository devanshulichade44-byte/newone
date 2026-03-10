import express from "express";
import bcrypt from "bcrypt";
import axios from "axios"; // For CAPTCHA verification
import User from "../models/User.js";
import nodemailer from "nodemailer";

const router = express.Router();

/* -------------------------------------------------
 🧩 USER SIGNUP
-------------------------------------------------- */
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User created successfully ✅" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

/* -------------------------------------------------
 🔐 LOGIN (with CAPTCHA)
-------------------------------------------------- */
router.post("/login", async (req, res) => {
  try {
    const { username, password, captchaValue } = req.body;

    // 🧠 Verify CAPTCHA first
    if (!captchaValue)
      return res.status(400).json({ message: "Captcha missing!" });

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaValue}`;

    const captchaResponse = await axios.post(verifyURL);

    if (!captchaResponse.data.success) {
      console.log("❌ CAPTCHA failed:", captchaResponse.data);
      return res.status(400).json({ message: "Captcha verification failed!" });
    }

    // ✅ CAPTCHA passed → check user
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // ✅ Store session
    req.session.userId = user._id;
    res.json({ message: "Login successful ✅", user: { username: user.username } });
  } catch (err) {
    console.error("Login Error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

/* -------------------------------------------------
 🚀 AUTO-LOGIN (Session Restore)
-------------------------------------------------- */
// AUTO-LOGIN (robust)
router.post("/auto-login", async (req, res) => {
  try {
    // Accept either `email` or `username` (frontend might send either)
    const { email, username } = req.body;

    // Build flexible query
    let user = null;
    if (email) {
      user = await User.findOne({ email });
      console.log("[auto-login] searching by email:", email);
    }
    if (!user && username) {
      user = await User.findOne({ username });
      console.log("[auto-login] searching by username:", username);
    }

    // If neither field provided, try a fallback test user (optional)
    if (!user && !email && !username) {
      console.log("[auto-login] no email/username provided — trying fallback test user");
      user = await User.findOne({ username: "testuser" }); // change if you prefer
    }

    if (!user) {
      console.log("[auto-login] user not found");
      return res.status(404).json({ message: "User not found" });
    }

    // set session
    req.session.userId = user._id;

    // return minimal user data
    return res.status(200).json({
      message: "Auto-login success",
      user: { username: user.username, email: user.email },
    });
  } catch (err) {
    console.error("[auto-login] error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});


/* -------------------------------------------------
 🔒 LOGOUT
-------------------------------------------------- */
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ message: "Logout failed" });
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out ✅" });
  });
});

/* -------------------------------------------------
 👤 CURRENT USER SESSION
-------------------------------------------------- */
router.get("/me", async (req, res) => {
  try {
    if (!req.session.userId)
      return res.status(401).json({ message: "Not authenticated" });

    const user = await User.findById(req.session.userId).select("username email");
    res.json({ message: "Authenticated", user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

/* -------------------------------------------------
 ✉️ CONTACT FORM (Nodemailer)
-------------------------------------------------- */
router.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message)
      return res.status(400).json({ success: false, msg: "All fields required" });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"StyleGlanz Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 StyleGlanz Contact — ${subject}`,
      html: `
        <h3>New Message from StyleGlanz</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.json({ success: true, msg: "Message sent successfully ✅" });
  } catch (err) {
    console.error("MAIL ERROR:", err.message);
    res.status(500).json({ success: false, msg: "Email failed ❌" });
  }
});

export default router;
