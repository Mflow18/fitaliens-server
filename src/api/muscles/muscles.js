const express = require("express");
const app = express.Router();

const {
  getMuscles,
  createMuscle,
  deleteMuscle,
} = require("./muscleController.js");

app.get("/", getMuscles);

app.post("/", createMuscle);

app.delete("/", deleteMuscle);

module.exports = app;
