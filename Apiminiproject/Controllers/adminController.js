const express = require("express");
const router = express.Router();
const Admin = require("../Models/AdminSignUp");
const Image = require("../Models/ImageUpload");
const AdminText = require("../Models/AdminText");
const Element = require('../Models/Element');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const fs = require("fs")
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
          gender: "not specified",
          profilePicture:
            "https://www.designcap.com/media/users/images/avatar.png",
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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Admin.findOne({ email });

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

router.get("/myaccount/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const admins = await Admin.findById({id});
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: "Error fetching admin information" });
  }
});



router.put("/my-account/:id", async (req, res) => {
  try {
    const { name, email, gender } = req.body;

    const updatedAdmin = await Admin.findOneAndUpdate(
      { _id: req.params.id },
      { name, email, gender },
      { new: true }
    );

    res.status(200).json(updatedAdmin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update admin details" });
  }
});

router.delete("/my-account/:id", async (req, res) => {
  try {
    await Admin.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "Admin account deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete admin account" });
  }
});


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload//images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/images/upload", upload.single("image"), async (req, res) => {
  try {
    const imageName = req.file.filename;
    const title = req.body.title;
    const category = req.body.category;

    await Image.create({ image: imageName, title: title, category: category });

    res.json({ status: 'ok' });
  } catch (error) {
    res.json({ status: error.message || 'Unknown error occurred' });
  }
});

router.get("/images", async (req, res) => {
  try {
    const data = await Image.find({});
    res.send({ status: 'ok', data });
  } catch (error) {
    res.json({ status: error.message || 'Unknown error occurred' });
  }
});
router.get("/images/:filename", async (req, res) => {
  try {
    const { filename } = req.params;

    const imagePath = path.join(__dirname, '../upload/images', filename);

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


router.put("/images/:id", upload.single("image"), async (req, res) => {
  const { id } = req.params;
  const { title, category } = req.body;

  try {
    const updatedImage = await Image.findByIdAndUpdate(
      id,
      { title, category },
      { new: true }
    );

    if (!updatedImage) {
      return res.status(404).json({ status: 'not found', message: 'Image not found' });
    }

    res.json({ status: 'ok', data: updatedImage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Failed to update image details' });
  }
});

router.delete("/images/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedImage = await Image.findByIdAndDelete(id);

    if (!deletedImage) {
      return res.status(404).json({ status: 'not found', message: 'Image not found' });
    }

    res.json({ status: 'ok', message: 'Image deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Failed to delete image' });
  }
});

router.post("/addtext", async (req, res) => {
  try {
    const { name, src, elements,canvasBackgroundColor } = req.body;
    const newCanvas = new AdminText({ name, src, elements,canvasBackgroundColor });
    const savedCanvas = await newCanvas.save();
    res.json(savedCanvas);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getaddtext", async (req, res) => {
  try {
    const canvases = await AdminText.find();
    res.json(canvases);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/updatetext/:id", async (req, res) => {
  try {
    const { name, src, elements,canvasBackgroundColor } = req.body;
    const updatedCanvas = await AdminText.findByIdAndUpdate(
      req.params.id,
      { name, src, elements },
      { new: true }
    );
    res.json(updatedCanvas);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/deletetext/:id", async (req, res) => {
  try {
    const deletedCanvas = await AdminText.findByIdAndRemove(req.params.id);
    res.json(deletedCanvas);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.post('/addshape', async (req, res) => {
  try {
    const { type, properties } = req.body;
    const newShape = new Element({ type, properties });
    await newShape.save();
    res.json(newShape);
  } catch (error) {
    console.error('Error adding shape:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all shapes
router.get('/getshapes', async (req, res) => {
  try {
    const shapes = await Element.find();
    res.json(shapes);
  } catch (error) {
    console.error('Error getting shapes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
