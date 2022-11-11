const mongoose = require("mongoose");

const ExerciseSchema = require("../schemas/exercise");

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
