const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  addedOn: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  otp: {
    type: String,
  }
});

module.exports = mongoose.model('Admin', adminSchema);
