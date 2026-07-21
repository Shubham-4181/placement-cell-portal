const express = require("express");
const router = express.Router();

const {
  protect,
  authorize
} = require("../middleware/authMiddleware");

const {
  createApplication,
  getApplications,
  getApplicationsByUser,
  updateApplicationStatus,
  getCompanyApplicants
} = require(
  "../controllers/applicationController"
);

router.post("/", createApplication);

router.get("/", getApplications);

router.get(
  "/user/:userId",
  getApplicationsByUser
);

router.put("/:id", updateApplicationStatus);

router.get(
  "/company-applicants",
  protect,
  authorize("company"),
  getCompanyApplicants
);

module.exports = router;