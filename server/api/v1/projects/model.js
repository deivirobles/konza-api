const mongoose = require('mongoose');

const { Schema } = mongoose;

const fields = {
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 128,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 128,
  },
};

const references = {
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
};

const project = new Schema({
  ...fields,
  ...references,
});

module.exports = {
  Model: mongoose.model('project', project),
  fields,
  references,
};
