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
  searchJobs,
  filterJobs,
  sortJobs
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

router.get(
  "/search",
  searchJobs
);

router.get(
  "/filter",
  filterJobs
);

router.get(
"/sort",
sortJobs
);

router.get(
  "/",
  getJobs
);

router.delete(
  "/:id",
  deleteJob
);

module.exports = router;