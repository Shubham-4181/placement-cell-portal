const express = require("express");
const router = express.Router();

const {
  createApplication,
  getApplications,
  getApplicationsByUser,
  updateApplicationStatus,
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

module.exports = router;