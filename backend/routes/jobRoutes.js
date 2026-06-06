const express = require("express");
const router = express.Router();
const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

const {
  createJob,
  getJobs,
  getMyJobs,
  deleteJob,
} = require("../controllers/jobController");

router.post(
  "/",
  protect,
  authorize("company", "admin"),
  createJob
);

router.get(
  "/my-jobs",
  protect,
  authorize("company"),
  getMyJobs
);

router.get("/", getJobs);

router.delete("/:id", deleteJob);

module.exports = router;