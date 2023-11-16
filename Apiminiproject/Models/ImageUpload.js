const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  image: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
