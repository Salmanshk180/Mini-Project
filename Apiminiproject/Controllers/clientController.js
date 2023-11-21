const express = require("express");
const router = express.Router();
const Contact = require("../Models/Contact")
const Signup = require("../Models/Signup")
const Image = require("../Models/ImageUpload");
const Upload = require("../Models/Upload")
const AdminText = require("../Models/AdminText");
const Element = require('../Models/Element');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
dotenv.config();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
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
        const newUser = new Signup({
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
          .json({ message: "User registered successfully" });
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "User registration failed" });
  }
});

router.post("/verify-otp", async (req, res) => {
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

router.post("/login", async (req, res) => {
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

router.get("/myaccount", async (req, res) => {
  try {
    const client = await Signup.find({}, "name email password");
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: "Error fetching information" });
  }
});
router.put("/my-account/:id", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const updatedClient = await Signup.findOneAndUpdate(
      { _id: req.params.id },
      { name, email, password },
      { new: true }
    );

    res.status(200).json(updatedClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update details" });
  }
});

router.delete("/my-account/:id", async (req, res) => {
  try {
    await Signup.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "account deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete account" });
  }
});

//Contact
//// API endpoint to create a new contact
router.post('/contacts', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// API endpoint to get all contacts
router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete a contact by ID
router.delete('/contacts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedContact = await Contact.findByIdAndDelete(id);
    res.json(deletedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { buffer, originalname, mimetype, size } = req.file;

    const newUpload = new Upload({
      filename: originalname,
      originalname,
      mimetype,
      size,
    });

    await newUpload.save();

    res.json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/uploads', async (req, res) => {
  try {
    const uploads = await Upload.find();
    res.json(uploads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Read one
router.get('/uploads/:id', async (req, res) => {
  try {
    const upload = await Upload.findById(req.params.id);
    if (!upload) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.json(upload);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update
router.put('/uploads/:id', async (req, res) => {
  try {
    const updatedUpload = await Upload.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUpload) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.json(updatedUpload);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete
router.delete('/uploads/:id', async (req, res) => {
  try {
    const deletedUpload = await Upload.findByIdAndDelete(req.params.id);
    if (!deletedUpload) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//Image
/*// Get all images
app.get('/images', async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific image by ID
app.get('/images/:id', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.json(image);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new image
app.post('/images', async (req, res) => {
  try {
    const newImage = await Image.create(req.body);
    res.status(201).json(newImage);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
});

// Update an existing image by ID
app.put('/images/:id', async (req, res) => {
  try {
    const updatedImage = await Image.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedImage) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.json(updatedImage);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
});

// Delete an image by ID
app.delete('/images/:id', async (req, res) => {
  try {
    const deletedImage = await Image.findByIdAndDelete(req.params.id);
    if (!deletedImage) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Element

// Element routes

app.get('/elements', async (req, res) => {
  try {
    const elements = await Element.find();
    res.json(elements);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/elements/:id', async (req, res) => {
  try {
    const element = await Element.findById(req.params.id);
    if (!element) {
      return res.status(404).json({ error: 'Element not found' });
    }
    res.json(element);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/elements', async (req, res) => {
  try {
    const newElement = await Element.create(req.body);
    res.status(201).json(newElement);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
});

app.put('/elements/:id', async (req, res) => {
  try {
    const updatedElement = await Element.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedElement) {
      return res.status(404).json({ error: 'Element not found' });
    }
    res.json(updatedElement);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
});

app.delete('/elements/:id', async (req, res) => {
  try {
    const deletedElement = await Element.findByIdAndDelete(req.params.id);
    if (!deletedElement) {
      return res.status(404).json({ error: 'Element not found' });
    }
    res.json({ message: 'Element deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
*/
module.exports = router;
