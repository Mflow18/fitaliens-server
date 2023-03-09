const mongoose = require("mongoose");

const WorkoutSchema = require("../schemas/workout");

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
