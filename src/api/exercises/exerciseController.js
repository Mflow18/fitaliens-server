const Exercise = require("../../data/models/exercise");
const Category = require("../../data/models/category");

async function getAllExercices(req, res, next) {
  try {
    const exercices = await exerciceRepository.getAllExercices();
    res.status(200).json(exercices);
  } catch (err) {
    next(err);
  }
}

const createExercise = async (req, res) => {
  const category = await Category.findOne({ name: req.body.categories });

  Exercise.create({
    name: req.body.name,
    categories: category,
  })
    .then(() => {
      Exercise.find({})
        .lean()
        .exec((err, doc) => {
          res
            .status(201)
            .json({ message: "Exercise created successfully", data: doc });
        });
    })
    .catch((error) => {
      res.status(400).json({
        error,
      });
    });
};

const deleteExercise = (req, res) => {
  Exercise.find({ name: req.body.name })
    .remove()
    .then(() => {
      Exercise.find({})
        .lean()
        .exec((err, doc) => {
          res
            .status(201)
            .json({ message: "Exercise deleted successfully", data: doc });
        });
    })
    .catch((error) => {
      res.status(400).json({
        error,
      });
    });
};

module.exports = {
  getAllExercices,
  createExercise,
  deleteExercise,
};
