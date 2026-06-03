const Application = require("../models/Application");
const Student = require("../models/Student");

const createApplication = async (req, res) => {
  try {
    const application = await Application.create(req.body);

    res.status(201).json({
      success: true,
      application,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getApplications = async (req, res) => {
  try {
    const applications = await Application.find();

    res.status(200).json({
      success: true,
      applications,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateApplicationStatus = async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      application,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getApplicationsByUser = async (req, res) => {
  try {

    const student =
      await Student.findOne({
        userId: req.params.userId
      });

    const applications =
      await Application.find({
        studentId: student._id
      });

    res.status(200).json({
      success: true,
      applications
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createApplication,
  getApplications,
  updateApplicationStatus,
  getApplicationsByUser,
};