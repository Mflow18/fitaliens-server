const express = require("express");
const exercisesRouter = require("./exercises/exercises");
const app = express();

app.use("/exercises", exercisesRouter);

app.get("/workouts", (req, res) => {
  res.json({ message: "Hello from server!" });
});

module.exports = app;
