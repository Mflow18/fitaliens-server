const Muscle = require("../../data/models/muscle");

const getMuscles = (req, res) => {
  Muscle.find({})
    .lean()
    .exec((err, doc) => {
      res.json({ data: doc });
    });
};

const createMuscle = async (req, res) => {
  Muscle.create({
    name: req.body.name,
  })
    .then(() => {
      Muscle.find({})
        .lean()
        .exec((err, doc) => {
          res
            .status(201)
            .json({ message: "Muscle created successfully", data: doc });
        });
    })
    .catch((error) => {
      res.status(400).json({
        error,
      });
    });
};

const deleteMuscle = (req, res) => {
  Muscle.find({ name: req.body.name })
    .remove()
    .then(() => {
      Muscle.find({})
        .lean()
        .exec((err, doc) => {
          res
            .status(201)
            .json({ message: "Muscle deleted successfully", data: doc });
        });
    })
    .catch((error) => {
      res.status(400).json({
        error,
      });
    });
};

module.exports = {
  getMuscles,
  createMuscle,
  deleteMuscle,
};
