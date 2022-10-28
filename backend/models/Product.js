const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'please product name'],
    },
    price: {
      type: String,
      required: [true, 'please product price'],
    },
    details: {
      type: String,
      required: [true, 'please product datails'],
    },
    description: {
      type: String,
      required: [true, 'please product description'],
    },
    description1: {
      type: String,
      required: [true, 'please product description'],
    },
    description2: {
      type: String,
      required: [true, 'please product description'],
    },
    colors: {
      type: Array,
      required: [true, 'please product name'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', JobSchema);
