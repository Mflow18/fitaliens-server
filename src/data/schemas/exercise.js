const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: { type: String },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

module.exports = ExerciseSchema;
