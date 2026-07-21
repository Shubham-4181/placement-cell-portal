const Application = require("../models/Application");
const Student = require("../models/Student");

const createApplication = async (req, res) => {
  try {

    const existingApplication =
      await Application.findOne({
        studentId: req.body.studentId,
        jobId: req.body.jobId
      });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "Already Applied"
      });
    }

    const application =
      await Application.create(req.body);

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

   const applications = await Application.find()
  .populate(
    "studentId",
    "fullName email resumeUrl"
  )
  .populate({
    path: "jobId",
    select: "title companyId",
    populate: {
      path: "companyId",
      select: "name"
    }
  });

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
      })
      .populate({
        path: "jobId",
        populate: {
          path: "companyId",
          select: "name"
        }
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

const Job = require("../models/Job");

const getCompanyApplicants = async (req, res) => {

  try {

    const jobs = await Job.find({
      companyId: req.user.id
    });

    const jobIds =
      jobs.map(job => job._id);

    const applications =
      await Application.find({
        jobId: { $in: jobIds }
      })
      .populate(
  "studentId",
  "fullName email resumeUrl"
)
      .populate(
        "jobId",
        "title"
      );

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
  getCompanyApplicants
};