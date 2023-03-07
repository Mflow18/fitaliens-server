const mongoose = require("mongoose");

const MuscleSchema = require("../schemas/muscle");

const Muscle = mongoose.model("Muscle", MuscleSchema);

module.exports = Muscle;
