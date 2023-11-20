const mongoose = require("mongoose");

const AdminTextSchema = new mongoose.Schema({
  name: String,
  src: String, // Add this line for the image URL
  elements: [
    {
      text: String,
      fontSize: Number,
      fontColor: String,
      textBackgroundColor: String,
      textStyle: {
        bold: Boolean,
        italic: Boolean,
        underline: Boolean,
      },
      fontFamily: String,
      x: Number,
      y: Number,
      draggable: Boolean,
      fontWeight: String,
      textAlignment: String,
    },
  ],
});

const AdminText = mongoose.model("AdminText", AdminTextSchema);

module.exports = AdminText;
