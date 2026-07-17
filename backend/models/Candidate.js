const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({

  name: String,

  email: String,

  role: String,

  atsScore: Number,

  status: {
    type: String,
    default: "Applied"
  },

  resume: String

});

module.exports = mongoose.model("Candidate", candidateSchema);