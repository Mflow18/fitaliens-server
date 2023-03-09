const Category = require("../../data/models/category");

const getCategories = (req, res) => {
  Category.find({})
    .lean()
    .exec((err, doc) => {
      res.json({ data: doc });
    });
};

const createCategory = async (req, res) => {
  const category = await Category.findOne({ name: req.body.categories });

  Category.create({
    name: req.body.name,
    categories: category,
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
        error,
      });
    });
};

const deleteCategory = (req, res) => {
  Category.find({ name: req.body.name })
    .remove()
    .then(() => {
      Category.find({})
        .lean()
        .exec((err, doc) => {
          res
            .status(201)
            .json({ message: "Category deleted successfully", data: doc });
        });
    })
    .catch((error) => {
      res.status(400).json({
        error,
      });
    });
};

module.exports = {
  getCategories,
  createCategory,
  deleteCategory,
};
