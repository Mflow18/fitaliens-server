const Session = require("../../data/models/session");

const getSessions = (req, res) => {
  Session.find({})
    .lean()
    .exec((err, doc) => {
      res.json({ data: doc });
    });
};

const createSession = async (req, res) => {
  Session.create({
    name: req.body.name,
  })
    .then(() => {
      Session.find({})
        .lean()
        .exec((err, doc) => {
          res
            .status(201)
            .json({ message: "Session created successfully", data: doc });
        });
    })
    .catch((error) => {
      res.status(400).json({
        error,
      });
    });
};

const deleteSession = (req, res) => {
  Session.find({ name: req.body.name })
    .remove()
    .then(() => {
      Session.find({})
        .lean()
        .exec((err, doc) => {
          res
            .status(201)
            .json({ message: "Session deleted successfully", data: doc });
        });
    })
    .catch((error) => {
      res.status(400).json({
        error,
      });
    });
};

module.exports = {
  getSessions,
  createSession,
  deleteSession,
};
