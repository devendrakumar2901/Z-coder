const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  // Additional fields
});

module.exports = mongoose.model('Event', eventSchema);