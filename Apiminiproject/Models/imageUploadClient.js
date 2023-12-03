const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  image: { type: String, required: true, unique: true }
});

const ImageClient = mongoose.model("ImageClient", imageSchema);

module.exports = ImageClient;
