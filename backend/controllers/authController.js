const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const {
  name,
  email,
  password,
  role,
  skills,
  branch,
  cgpa,
  passingYear
} = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const Student = require("../models/Student");

if (role === "student") {
  await Student.create({
  userId: user._id,
  fullName: name,
  email: email,
  skills,
  branch,
  cgpa,
  passingYear
});
}

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

   res.status(200).json({
  success: true,
  token,
  role: user.role,
  userId: user._id,
  name: user.name
});
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getCompanies = async (req, res) => {
  try {

    const companies =
      await User.find({
        role: "company"
      }).select(
        "name email"
      );

    res.status(200).json({
      success: true,
      companies
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = { register, login, getCompanies};