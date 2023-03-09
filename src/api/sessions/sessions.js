const express = require("express");

const app = express.Router();

const {
  getSessions,
  createSession,
  deleteSession,
} = require("./sessionController.js");

app.get("/", getSessions);

app.post("/", createSession);

app.delete("/", deleteSession);

module.exports = app;
