const express = require("express");

const app = express.Router();

const {
  getAllExercises,
  createExercise,
  deleteExercise,
} = require("./exerciseController.js");

app.get("/", getAllExercises);

app.post("/", createExercise);

app.delete("/", deleteExercise);

module.exports = app;
