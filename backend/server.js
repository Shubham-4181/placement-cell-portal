const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const dashboardRoutes =
require("./routes/dashboardRoutes");
const recommendationRoutes =
require(
"./routes/recommendationRoutes"
);
const aiRoutes =
require("./routes/aiRoutes");

const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const companyRoutes = require("./routes/companyRoutes");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");


const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/uploads",
  express.static("uploads")
);
app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);

app.use(
"/api/recommendations",
recommendationRoutes
);

app.use(
  "/api/dashboard",
  dashboardRoutes
);

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

app.use(
"/api/ai",
aiRoutes
);

app.use(
  express.static(
    path.join(__dirname, "../frontend")
  )
);

app.get("/", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "../frontend/login.html"
    )
  );
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });



app.listen(process.env.PORT, () => {
  console.log(`Server Running On Port ${process.env.PORT}`);
});