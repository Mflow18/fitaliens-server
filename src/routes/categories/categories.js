const Category = require("../../data/models/category");
const express = require("express");
const app = express.Router();

app.get("/", (req, res) => {
  Category.find({})
    .lean()
    .exec((err, doc) => {
      res.json({ data: doc });
    });
});

app.post("/", (req, res) => {
  Category.create({
    name: req.body.name,
  })
    .then(() => {
      Category.find({})
        .lean()
        .exec((err, doc) => {
          res
            .status(201)
            .json({ message: "Category created successfully", data: doc });
        });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

app.delete("/", (req, res) => {
  Category.find({ name: req.body.name })
    .remove()
    .then(() => {
      Category.find({})
        .lean()
        .exec((err, doc) => {
          res
            .status(201)
            .json({ message: "Category created successfully", data: doc });
        });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

module.exports = app;
