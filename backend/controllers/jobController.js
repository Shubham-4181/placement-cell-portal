const Job = require("../models/Job");

const createJob = async (req, res) => {
  try {

    const job = await Job.create({
      title: req.body.title,
      description: req.body.description,
      package: req.body.package,
      companyId: req.user.id
    });

    res.status(201).json({
      success: true,
      job
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


const getJobs = async (req, res) => {
  try {

    const jobs = await Job.find()
      .populate("companyId", "name email");

    res.status(200).json({
      success: true,
      jobs
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const getMyJobs = async (req, res) => {
  try {

    const jobs = await Job.find({
      companyId: req.user.id
    });

    res.status(200).json({
      success: true,
      jobs
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const deleteJob = async (req, res) => {
  try {

    await Job.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Job Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  createJob,
  getJobs,
  getMyJobs,
  deleteJob
};