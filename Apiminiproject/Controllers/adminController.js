const express = require("express");
const router = express.Router();
const Admin = require("../Models/AdminSignUp");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await Admin.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Verification Code",
      text: `Your OTP for verification: ${otp}`,
    };

    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Failed to send OTP" });
      } else {
        console.log("Email sent: " + info.response);

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Admin({
          name,
          email,
          password: hashedPassword,
          otp,
        });

        await newUser.save();
        return res
          .status(201)
          .json({ message: "Admin registered successfully" });
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Admin registration failed" });
  }
});

router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await Admin.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.otp === otp) {
      user.isActive = true; // Optionally set a 'verified' flag in the schema
      user.otp = null; // Remove the OTP after successful verification
      await user.save();
      res.status(200).json({ message: "OTP verified. Account activated" });
    } else {
      res.status(400).json({ message: "Invalid OTP" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to verify OTP" });
  }
});

module.exports = router;
