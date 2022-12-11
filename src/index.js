const express = require("express");
const mongoose = require("mongoose");

const mongodbKey = require("../secret_keys/Constant");

// Router
const mainRouter = require("./routes/index");

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
app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
