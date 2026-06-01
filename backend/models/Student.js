const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    skills: {
      type: [String],
      default: [],
    },

    cgpa: {
      type: Number,
    },

    branch: {
      type: String,
    },

    passingYear: {
      type: Number,
    },

    resumeUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);