# Placement Cell Portal

A Full Stack Placement Cell Portal built using Node.js, Express.js, MongoDB, JWT Authentication, and Bootstrap.


# Features

## Student Module

* Register and Login
* Upload Resume
* View Available Jobs
* Apply for Jobs
* View Application Status

## Company Module

* Login
* Add New Jobs
* View Posted Jobs
* View Applicants
* View Candidate Resume
* Shortlist Candidates
* Reject Candidates
* Select Candidates

## Admin Module

* View Students
* View Companies
* View Applications
* Add New Company
* Placement Statistics Dashboard
* Placement Percentage

# Tech Stack

## Frontend

* HTML
* CSS
* Bootstrap
* JavaScript

## Backend

* Node.js
* Express.js

## Database

* MongoDB

## Authentication

* JWT

# Project Structure

PlacementCellPortal
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── login.html
│   ├── register.html
│   ├── student-dashboard.html
│   ├── company-dashboard.html
│   ├── admin-dashboard.html
│   ├── jobs.html
│   ├── my-applications.html
│   ├── my-jobs.html
│   └── add-job.html
│
└── README.md

# Step 1: Clone Repository


git clone <repository-url>


cd PlacementCellPortal


# Step 2: Install Backend Dependencies

Go to backend folder:

```bash
cd backend
```

Install packages:

```bash
npm install
```

This will install:

```text
express
mongoose
bcryptjs
jsonwebtoken
cors
dotenv
multer
nodemon
```

---

# Step 3: Create .env File

Create a file named:

```text
backend/.env
```

Add:

```env
PORT=8080

MONGO_URI=mongodb://127.0.0.1:27017/placement_portal

JWT_SECRET=mysecretkey
```

---

# Step 4: Start MongoDB

Open Command Prompt:

```bash
mongod
```

OR start MongoDB service from Windows Services.

Verify MongoDB is running:

```bash
mongosh
```

Then:

```js
show dbs
```

---

# Step 5: Start Backend Server

Inside backend folder:

```bash
npm run dev
```

Expected output:

```text
Server Running On Port 8080
MongoDB Connected
```

Backend URL:

```text
http://localhost:8080
```

---

# Step 6: Run Frontend

Open project in VS Code.

Go to:

```text
frontend
```

Right click:

```text
login.html
```

Click:

```text
Open With Live Server
```

Frontend URL:

```text
http://127.0.0.1:5500/frontend/login.html
```

---

# Step 7: Create Admin User

Open Mongo Shell:

```bash
mongosh
```

Select database:

```js
use placement_portal
```

Insert Admin:

```js
db.users.insertOne({

  name:"Admin",

  email:"admin@gmail.com",

  password:"$2b$10$123456789012345678901uJ9nDqg0P6tJmA6Z6w8Q3P6M9K9W",

  role:"admin"

})
```

Or create admin manually through MongoDB Compass.

---

# Login Credentials

## Admin

```text
Email:
admin@gmail.com

Password:
admin1234
```

## Company

Created from Admin Dashboard.

Example:

```text
Email:
tcs@gmail.com

Password:
tcs1234
```

## Student

Register using Register Page.

---

# Resume Upload

Students must upload resume before applying.

Supported:

```text
PDF
```

Uploaded resumes are stored in:

```text
backend/uploads
```

---

# Application Flow

```text
Student Register
        ↓
Student Login
        ↓
Upload Resume
        ↓
View Jobs
        ↓
Apply Job
        ↓
Company Reviews Application
        ↓
Shortlisted
        ↓
Selected / Rejected
```

---

# Placement Statistics

Admin Dashboard shows:

* Total Students
* Total Companies
* Total Jobs
* Total Applications
* Placed Students
* Placement Percentage

---

## Additional Student Features

* AI Placement Assistant Chatbot
* AI Based Career Guidance
* AI Based Interview Preparation
* AI Based Programming Help
* Skill Based Job Recommendations
* Match Percentage Calculation
* Search Jobs
* Filter Jobs By Skills
* Filter Jobs By Package
* Sort Jobs
* Resume Upload Validation

---

## Additional Company Features

* View All Applications
* Manage Candidate Status
* Update Candidate Status
* Resume Download/View
* Job Management Dashboard

---

## Additional Admin Features

* Dashboard Analytics
* Total Students Count
* Total Companies Count
* Total Jobs Count
* Total Applications Count
* Placed Students Count
* Application Analytics Charts
* Student Management
* Company Management
* Resume Management

---

# AI Integration

The Placement Cell Portal includes an AI Placement Assistant powered by Google Gemini API.

Features:

* Interview Question Generation
* Resume Guidance
* Placement Preparation
* Career Guidance
* Programming Support
* Aptitude Preparation
* Communication Skill Improvement
* Marathi and English Query Support

---

# Job Recommendation System

The system provides AI Based Job Recommendations using student skills and job requirements.

Recommendation Features:

* Skill Matching
* Match Percentage Calculation
* Best Match Identification
* Personalized Job Suggestions

Example:

Student Skills:
Node.js, MongoDB, React

Job Skills:
Node.js, MongoDB, Express, React

Match Score:
75%

---

# Cloud Deployment

## Frontend Deployment

Platform:

```text
Vercel
```

---

## Backend Deployment

Platform:

```text
Render
```

---

## Database Hosting

Platform:

```text
MongoDB Atlas
```

---

# Security Features

* JWT Authentication
* Password Hashing using BcryptJS
* Protected Routes
* Role Based Access Control
* Secure API Access

---

# Future Enhancements

* Email Notifications
* Interview Scheduling
* Real Time Notifications
* Advanced AI Resume Analyzer
* Placement Reports PDF Export
* Company Analytics Dashboard

---
