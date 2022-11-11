const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  name: { type: String },
  // description: { type: String },
  // imageUrl: { type: String },
});

module.exports = ExerciseSchema;
