Placement Cell Portal

A Full Stack Placement Cell Portal developed using HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js, MongoDB Atlas, JWT Authentication, and Gemini AI Integration.

The system helps students find placement opportunities, companies manage recruitment, and administrators monitor placement activities through a centralized platform.

Project Overview

The Placement Cell Portal is designed to automate and simplify campus placement activities. The platform provides role-based access for Students, Companies, and Administrators.

Students can register, upload resumes, apply for jobs, and track application status.

Companies can post jobs, manage applications, and shortlist candidates.

Administrators can monitor the entire placement process, manage users, and analyze placement statistics.

Key Features
Student Module
Student Registration and Login
JWT Based Authentication
Profile Management
Resume Upload (PDF)
View Available Jobs
Apply for Jobs
Track Application Status
View Placement Updates
AI-Based Job Recommendations
Placement Assistant Chatbot
Company Module
Company Login
Post New Job Opportunities
Edit/Delete Job Listings
View Posted Jobs
View Applicants
Download Candidate Resumes
Shortlist Candidates
Reject Candidates
Select Candidates
Manage Recruitment Process
Admin Module
Secure Admin Login
Manage Students
Manage Companies
Manage Jobs
Manage Applications
Add New Companies
Placement Statistics Dashboard
Placement Percentage Calculation
Monitor Overall Portal Activity
AI Features
Gemini AI Placement Assistant

The portal integrates Gemini AI to provide:

Placement Guidance
Interview Preparation Assistance
Resume Improvement Suggestions
Career Related Queries
Job Search Assistance
AI Job Recommendation System

The system recommends jobs based on:

Student Skills
Required Job Skills
Eligibility Criteria
Profile Matching

Matching Score Formula:

Match Percentage = (Matched Skills / Required Skills) × 100

Placement Analytics Dashboard

Admin Dashboard provides:

Total Students
Total Companies
Total Jobs
Total Applications
Selected Students
Rejected Applications
Shortlisted Candidates
Placement Percentage

Future enhancements include:

Bar Charts
Pie Charts
Monthly Placement Trends
Skill Analytics Dashboard
Technology Stack
Frontend
HTML5
CSS3
Bootstrap 5
JavaScript
Backend
Node.js
Express.js
Database
MongoDB Atlas
Mongoose ODM
Authentication & Security
JWT Authentication
Password Hashing using BcryptJS
Role-Based Access Control
Protected API Routes
Secure Environment Variables
Project Architecture
Frontend (HTML/CSS/Bootstrap/JS)
            │
            ▼
REST APIs (Express.js)
            │
            ▼
Authentication Layer (JWT)
            │
            ▼
MongoDB Atlas Database
            │
            ▼
AI Services (Gemini API)
Project Structure
PlacementCellPortal
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── config
│   ├── services
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── pages
│   ├── css
│   ├── js
│   ├── images
│   └── assets
│
└── README.md
Database Collections
users

Stores:

Admin
Student
Company
students

Stores:

Name
Email
Skills
Resume
Course Information
companies

Stores:

Company Details
Contact Information
Posted Jobs
jobs

Stores:

Job Title
Description
Skills Required
Package
Location
Deadline
applications

Stores:

Student Information
Job Information
Application Status
Installation Guide
Step 1: Clone Repository
git clone <repository-url>
cd PlacementCellPortal
Step 2: Install Backend Dependencies
cd backend
npm install

Dependencies:

express
mongoose
bcryptjs
jsonwebtoken
cors
dotenv
multer
nodemon
Step 3: Configure Environment Variables

Create:

backend/.env

Add:

PORT=8080

MONGO_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_api_key
Step 4: Start Backend Server
npm run dev

Expected Output:

Server Running On Port 8080
MongoDB Connected Successfully

Backend URL:

http://localhost:8080
Step 5: Run Frontend

Open frontend using Live Server.

frontend/login.html

Frontend URL:

http://127.0.0.1:5500/frontend/login.html
Deployment
Frontend Deployment

Platform:

Vercel

Features:

Fast Hosting
Automatic Deployment
HTTPS Support
Backend Deployment

Platform:

Render

Features:

API Hosting
Environment Variable Support
Continuous Deployment
Database Hosting

Platform:

MongoDB Atlas

Features:

Cloud Database
Secure Access
Automatic Backups
Application Flow
Student Registration
         ↓
Student Login
         ↓
Resume Upload
         ↓
Browse Jobs
         ↓
Apply for Job
         ↓
Company Reviews Application
         ↓
Shortlisted
         ↓
Selected / Rejected
         ↓
Placement Statistics Updated
Testing Performed
Authentication Testing
Authorization Testing
CRUD Operation Testing
API Testing
Resume Upload Testing
Database Connectivity Testing
Frontend-Backend Integration Testing
Deployment Testing
Challenges Faced
MongoDB Atlas Configuration
Connection String Issues
IP Whitelisting Problems
Deployment Issues
Render Deployment Errors
Environment Variable Configuration
Security
JWT Token Verification
Protected Routes Implementation
API Integration
Gemini AI Integration
Error Handling
Learning Outcomes

Through this project, the following skills were developed:

Full Stack Development
REST API Development
JWT Authentication
MongoDB Atlas
Cloud Deployment
Git & GitHub Workflow
AI Integration
Database Design
Role-Based Access Control
Problem Solving & Debugging
Future Enhancements
Real-Time Notifications
Email Alerts
Advanced Analytics Dashboard
AI Resume Analyzer
Interview Scheduling System
Skill Gap Analysis
Mobile Application
Chat System Between Student and Company
