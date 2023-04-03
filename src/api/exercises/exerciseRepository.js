const Exercise = require("../../data/models/exercise");

const getAllExercises = () => {
  return new Promise((resolve, reject) => {
    Exercise.find({})
      .populate("categories")
      .lean()
      .exec((err, doc) => {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      });
  });
};

module.exports = { getAllExercises };
