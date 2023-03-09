const express = require("express");

const app = express.Router();

const {
  getWorkouts,
  createWorkout,
  deleteWorkout,
} = require("./workoutController.js");

app.get("/", getWorkouts);

app.post("/", createWorkout);

app.delete("/", deleteWorkout);

module.exports = app;
