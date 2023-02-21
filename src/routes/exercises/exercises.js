const express = require("express");

const app = express.Router();

const {
  getExercises,
  createExercise,
  deleteExercise,
} = require("../../controllers/exerciseController.js");

app.get("/", getExercises);

app.post("/", createExercise);

app.delete("/", deleteExercise);

module.exports = app;
