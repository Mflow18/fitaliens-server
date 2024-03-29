const Workout = require("../../data/models/workout");

const getWorkouts = (req, res) => {
  Workout.find({})
    .lean()
    .exec((err, doc) => {
      res.json({ data: doc });
    });
};

const createWorkout = async (req, res) => {
  Workout.create({
    name: req.body.name,
  })
    .then(() => {
      Workout.find({})
        .lean()
        .exec((err, doc) => {
          res
            .status(201)
            .json({ message: "Workout created successfully", data: doc });
        });
    })
    .catch((error) => {
      res.status(400).json({
        error,
      });
    });
};

const deleteWorkout = (req, res) => {
  Workout.find({ name: req.body.name })
    .remove()
    .then(() => {
      Workout.find({})
        .lean()
        .exec((err, doc) => {
          res
            .status(201)
            .json({ message: "Workout deleted successfully", data: doc });
        });
    })
    .catch((error) => {
      res.status(400).json({
        error,
      });
    });
};

module.exports = {
  getWorkouts,
  createWorkout,
  deleteWorkout,
};
