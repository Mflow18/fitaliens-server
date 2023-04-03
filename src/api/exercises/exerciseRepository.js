const Exercise = require("../../data/models/exercise");

const getAllExercises = (req, res) => {
  Exercise.find({})
    .populate("categories")
    .lean()
    .exec((err, doc) => {
      res.json({ data: doc });
    });
};

module.exports = {
  getAllExercises,
};
