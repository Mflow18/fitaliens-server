const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  reps: Number,
  rhythm: String,
  exercise: {
    type: Schema.Types.ObjectId,
    ref: "Exercise",
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

module.exports = SessionSchema;
