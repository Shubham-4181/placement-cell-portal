const express = require("express");
const router = express.Router();
const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

const {
  createJob,
  getJobs,
} = require("../controllers/jobController");

router.post(
  "/",
  protect,
  authorize("company", "admin"),
  createJob
);

router.get("/", getJobs);

module.exports = router;