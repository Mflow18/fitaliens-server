const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MuscleSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = MuscleSchema;
