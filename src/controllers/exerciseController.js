const Exercise = require("../data/models/exercise");

const getExercises = (req, res) => {
  Exercise.find({})
    .lean()
    .exec((err, doc) => {
      res.json({ data: doc });
    });
};

const createExercise = (req, res) => {
  const categoriesName = req.body.categories;
  const category = Category.findOne({ name: categoriesName }, (err, cat) => {
    return cat;
  });

  const exercise = new Exercise({
    name: req.body.name,
  }).categories
    .push(category)
    .save()
    .then(() => {
      getExercises.exec((err, doc) => {
        res
          .status(201)
          .json({ message: "Exercise created successfully", data: doc });
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
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
            .json({ message: "Exercise created successfully", data: doc });
        });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

module.exports = {
  getExercises,
  createExercise,
  deleteExercise,
};
