const mongoose = require('mongoose');

const task = {
  title: String,
  description: String,
  completed: Boolean,
  dueDate: Date,
};

module.exports = mongoose.model('task', task);
