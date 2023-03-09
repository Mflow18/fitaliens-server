const mongoose = require("mongoose");

const SessionSchema = require("../schemas/session");

const Session = mongoose.model("Session", SessionSchema);

module.exports = Session;
