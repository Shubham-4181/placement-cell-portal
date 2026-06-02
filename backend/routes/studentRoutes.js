const express = require("express");
const router = express.Router();
const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

router.post("/", createStudent);

router.get("/", protect, getStudents);

router.get("/:id", getStudentById);

router.put("/:id", updateStudent);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteStudent
);

module.exports = router;