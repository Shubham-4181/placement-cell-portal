const express = require("express");
const router = express.Router();
const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

const {
  createStudent,
  getStudents,
  getStudentById,
  getStudentByUserId,
  updateStudent,
  deleteStudent,
  uploadResume,
} = require("../controllers/studentController");

router.post("/", createStudent);

router.get("/", protect, getStudents);

router.get("/user/:userId", getStudentByUserId);

router.get("/:id", getStudentById);

router.put("/:id", updateStudent);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteStudent
);

router.post(
  "/upload-resume",
  protect,
  upload.single("resume"),
  uploadResume
);

module.exports = router;