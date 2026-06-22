const Student = require("../models/Student");
const Job = require("../models/Job");
const Application = require("../models/Application");
const User = require("../models/User");

const getDashboardSummary = async (req, res) => {
  try {

    const students =
      await Student.countDocuments();

    const jobs =
      await Job.countDocuments();

    const applications =
      await Application.countDocuments();

    const companies =
      await User.countDocuments({
        role: "company"
      });

    const selected =
      await Application.countDocuments({
        status: "Selected"
      });

    const shortlisted =
      await Application.countDocuments({
        status: "Shortlisted"
      });

    const rejected =
      await Application.countDocuments({
        status: "Rejected"
      });

    res.status(200).json({
      success: true,
      students,
      jobs,
      applications,
      companies,
      selected,
      shortlisted,
      rejected
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getDashboardSummary
};