const Exercise = require("../../data/models/exercise");
const express = require("express");
const app = express.Router();

app.get("/exercises", (req, res) => {
  Exercise.find({})
    .lean()
    .exec((err, doc) => {
      res.json({ data: doc });
    });
});

app.post("/exercises", (req, res) => {
  const exercise = new Exercise({
    name: req.body.name,
  })
    .save()
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
});

app.delete("/exercises", (req, res) => {
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
});

module.exports = app;
