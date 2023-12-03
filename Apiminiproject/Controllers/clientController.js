var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const { emit } = require('process');
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const Login = require('../Models/Login');
const Signup = require('../Models/Signup');
const multer = require("multer");
const path = require("path");
const fs = require("fs")
require('dotenv').config();
const ImageClient = require("../Models/imageUploadClient");


router.post("/Csignup", async (req, res) => {
    try {
      const { email, password, confirmpassword } = req.body;
      const existingUser = await Signup.findOne({ email });
  
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
          const hashedPassWord = await bcrypt.hash(confirmpassword, 10);
          const newUser = new Admin({
            email,
            password: hashedPassword,
            confirmpassword: hashedPassWord,
            otp,
          });
  
          await newUser.save();
          return res
            .status(201)
            .json({ message: "registered successfully" });
        }
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "registration failed" });
    }
  });
  

  router.post("/Cverify-otp", async (req, res) => {
    const { email, otp } = req.body;
  
    try {
      const user = await Signup.findOne({ email });
  
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

  router.post("/Clogin", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await Signup.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Check if the user's account is active or verified, if applicable
      if (!user.isActive) {
        return res.status(403).json({ message: "Account not verified" });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "5h", // Expiry time for the token
      });
  
      // Return the token and any other necessary data
      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Login failed" });
    }
  });

  router.get("/Cmyaccount", async (req, res) => {
    try {
      const admins = await Signup.find({}, "name email");
      res.status(200).json(admins);
    } catch (error) {
      res.status(500).json({ message: "Error fetching information" });
    }
  });

  router.put("/Cmy-account/:id", async (req, res) => {
    try {
      const { name, email } = req.body;
  
      const updatedUser = await Signup.findOneAndUpdate(
        { _id: req.params.id },
        { name, email},
        { new: true }
      );
  
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to update details" });
    }
  });

  router.delete("/Cmy-account/:id", async (req, res) => {
    try {
      await Signup.findOneAndDelete({ _id: req.params.id });
      res.status(200).json({ message: "account deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to delete account" });
    }
  });

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload/clientImages');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage: storage });
  
  router.post('/images/upload', upload.single('image'), async (req, res) => {
    try {
      const imageName = req.file.filename;
  
      // Assuming you have a Mongoose model named 'Image'
      await ImageClient.create({ image: imageName });
  
      res.json({ status: 'ok' });
    } catch (error) {
      res.json({ status: error.message || 'Unknown error occurred' });
    }
  });
  router.get("/images", async (req, res) => {
    try {
      const data = await ImageClient.find({});
      res.json({ status: 'ok', data });
    } catch (error) {
      res.json({ status: 'error', message: error.message || 'Unknown error occurred' });
    }
  });
  
  router.get("/images/:filename", async (req, res) => {
    try {
      const { filename } = req.params;
  
      const imagePath = path.join(__dirname, '../upload/clientImages', filename);
  
      // Read the image file
      fs.readFile(imagePath, (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ status: 'error', message: 'Error reading image file' });
        }
  
        // Get the file extension
        const extname = path.extname(filename).slice(1);
  
        // Set the appropriate content type
        res.contentType(`image/${extname}`);
  
        // Send the image data
        res.send(data);
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: error.message || 'Unknown error occurred' });
    }
  });

  
module.exports = router;