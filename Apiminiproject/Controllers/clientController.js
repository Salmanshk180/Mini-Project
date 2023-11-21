var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const { emit } = require('process');
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const Login = require('../Models/Login');
const Signup = require('../Models/Signup');
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const fs = require("fs")
require('dotenv').config();

//Login
/*
router.post('/addlogin', async (req, res) => {
    // var objLogin = new login();
    // objLogin.email = req.body.email,
    // objLogin.password = req.body.password,
    // objLogin.addedOn = new Date(),
    // objLogin.isActive = true;
    // console.log();

    // const inserted = await objLogin.save();

    // if (inserted != null) {
    //     res.json({ result: "success", msg: "User Verified", data: 1 });
    // } else {
    //     res.json({ result: "failure", msg: "User Not Verified", data: 0 });
    // }
    try {
        const { email, password } = req.body;
    
        // Find the user by their email
        const user = await Signup.findOne({ email });
    
        if (!user) {
          return res.status(401).json({ message: 'Invalid email or password' });
        }
    
        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
    
        if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid email or password' });
        }
    
        // Generate a JSON Web Token (JWT) for authentication
        const token = jwt.sign(
          {
            userId: user._id,
            email: user.email,
          },
          process.env.SECRET_KEY, // Replace with your secret key
          {
            expiresIn: '1h', // Token expiration time (e.g., 1 hour)
          }
        );
    
        res.status(200).json({ message: 'Login successful', token, userId: user._id });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Login failed' });
      }
});
router.post('/updateLogin',async (req, res) => {
    console.log(req.body.id)
        const objLogin = await login.updateOne({
            _id: req.body.id
        }, {
            email: req.body.email,
            password: req.body.password
        });
        
        if (objLogin != null) {
            res.json({ result: "success", msg: "User update", data: 1 });
        } else {
            res.json({ result: "failure", msg: "User Not update", data: 0 });
        }
});
router.delete('/deleteLogin/:id', async (req, res) => {
    console.log(req.params.id);
    const objDeleteLogin = await login.updateOne({
        _id: req.params.id
    },{
        isActive : false
    });
    if (objDeleteLogin != null) {
        res.json({ result: "success", msg: "User deleted", data: 1 });
    } else {
        res.json({ result: "failure", msg: "User Not deleted", data: 0 });
    }
});
router.get('/fetchLogin/:id', async (req, res) => {
    const fetchLoginObj = await login.findOne({
        _id: req.params.id
    });

    if (fetchLoginObj != null) {
        res.json({ result: "success", msg: "User Fetch", data: fetchLoginObj });
    } else {
        res.json({ result: "failure", msg: "User Not Fetch", data: fetchLoginObj});
    }
});
router.get('/fetchLogin', async (req, res) => {
    const fetchLoginObj = await login.find({
        isActive:true,
    });

    if (fetchLoginObj != null) {
        res.json({ result: "success", msg: "User List Load", data: fetchLoginObj });
    } else {
        res.json({ result: "failure", msg: "unsuccessfull", data: fetchLoginObj});
    }
});
*/
//Signup
/*
router.post('/addsignup', async (req, res) => {
    try {
        const { email, password, confirmpassword } = req.body;

        // Check if the email is already registered
        const existingUser = await Signup.findOne({ email });

        if (existingUser) {
          return res.status(400).json({ message: 'Email is already registered' });
        }
        if (password !== confirmpassword) {
            return res.status(400).json({ message: 'Password and Confirm Password do not match' });
        }

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user and save it to the database
        const newUser = new Signup({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'User registration failed' });
      }

});
router.post('/updateSignup',async (req, res) => {
    console.log(req.body.id)
        const objSignup = await signup.updateOne({
            _id: req.body.id
        }, {
            email: req.body.email,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword,
        });
        
        if (objSignup != null) {
            res.json({ result: "success", msg: "User update", data: 1 });
        } else {
            res.json({ result: "failure", msg: "User Not update", data: 0 });
        }
});
router.delete('/deleteSignup/:id', async (req, res) => {
    console.log(req.params.id);
    const objDeleteSignup = await signup.updateOne({
        _id: req.params.id
    },{
        isActive : false
    });
    if (objDeleteSignup != null) {
        res.json({ result: "success", msg: "User deleted", data: 1 });
    } else {
        res.json({ result: "failure", msg: "User Not deleted", data: 0 });
    }
});
router.get('/fetchSignup/:id', async (req, res) => {
    const fetchSignupObj = await signup.findOne({
        _id: req.params.id
    });

    if (fetchSignupObj != null) {
        res.json({ result: "success", msg: "User Fetch", data: fetchSignupObj });
    } else {
        res.json({ result: "failure", msg: "User Not Fetch", data: fetchSignupObj});
    }
});
router.get('/fetchSignup', async (req, res) => {
    const fetchSignupObj = await signup.find({
        isActive:true,
    });

    if (fetchSignupObj != null) {
        res.json({ result: "success", msg: "User List Load", data: fetchSignupObj });
    } else {
        res.json({ result: "failure", msg: "unsuccessfull", data: fetchSignupObj});
    }
});
*/

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
      const admins = await Admin.find({}, "name email");
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
module.exports = router;