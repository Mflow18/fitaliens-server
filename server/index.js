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

app.get("/workouts", (req, res) => {
  res.json({ data: FAKE_WORKOUTS_TEMP });
});

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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
