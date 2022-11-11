const mongodbKey = require("../secret_keys/Constant");
const mongoose = require("mongoose");
const Exercise = require("../src/data/models/exercise");

const path = require("path");
const express = require("express");

const url = mongodbKey.MONGODB_API_CONNECT;
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

console.log(url);
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const FAKE_WORKOUTS_TEMP = [
  {
    name: "HIIT",
  },
  {
    name: "Power",
  },
];

const FAKE_EXERCISES = [
  {
    name: "Chest",
  },
  {
    name: "Back",
  },
  {
    name: "Legs",
  },
  {
    name: "Abs",
  },
];

app.get("/workouts", (req, res) => {
  res.json({ data: FAKE_WORKOUTS_TEMP });
});

app.get("/exercises", (req, res) => {
  res.json({ data: FAKE_EXERCISES });
});

app.post("/exercises", (req, res) => {
  console.log(req.body);
  const exercise = new Exercise({
    name: req.body.name,
  })
    .save()
    .then(() => {
      res.status(201).json({
        message: "Exercise saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
