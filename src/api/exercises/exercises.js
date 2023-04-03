const express = require("express");

const app = express.Router();

const {
  getAllExercices,
  createExercise,
  deleteExercise,
} = require("./exerciseController.js");

app.get("/", getAllExercices);

app.post("/", createExercise);

app.delete("/", deleteExercise);

module.exports = app;
