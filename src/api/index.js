const express = require("express");
const exercisesRouter = require("./exercises/exercises");
const categoriesRouter = require("./categories/categories");
const musclesRouter = require("./muscles/muscles");
const workoutsRouter = require("./workouts/workouts");

const app = express();

app.use("/exercises", exercisesRouter);
app.use("/categories", categoriesRouter);
app.use("/muscles", musclesRouter);
app.use("/workouts", workoutsRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

module.exports = app;
