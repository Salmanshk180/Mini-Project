const mongoose = require('mongoose');

// Define mongoose schema for elements (shapes, lines, arrows, etc.)
const elementSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['shape', 'line', 'arrow'], // Add more types as needed
  },
  properties: {
    type: Object,
    required: true,
  },
});

const Element = mongoose.model('Element', elementSchema);

module.exports = Element;
