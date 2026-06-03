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
  getStudentByUserId,
  updateStudent,
  deleteStudent,
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

module.exports = router;