const Category = require("../../data/models/category");
const express = require("express");
const app = express.Router();

const {
  getCategories,
  createCategory,
  deleteCategory,
} = require("./categoryController.js");

app.get("/", getCategories);

app.post("/", createCategory);

app.delete("/", deleteCategory);

module.exports = app;
