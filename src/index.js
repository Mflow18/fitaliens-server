const mongodbKey = require("../secret_keys/Constant");
const mongoose = require("mongoose");

const express = require("express");

const exercisesRouter = require("./routes/exercises/exercises");

// MongoDb Connection
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

app.use("/", exercisesRouter);
app.use("/exercises", exercisesRouter);

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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
