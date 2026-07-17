# 🚀 SmartHire - AI Powered Recruitment Platform

<p align="center">

An intelligent AI-powered recruitment and placement platform that connects candidates and recruiters through automated resume analysis, AI interviews, smart job matching, and hiring management.

</p>

---

## 📌 Overview

SmartHire is a full-stack AI recruitment platform designed to simplify the hiring process for both candidates and recruiters.

The platform uses Artificial Intelligence to analyze resumes, generate interview questions, evaluate candidate responses, recommend suitable jobs, and help recruiters manage candidates efficiently.

Built with modern web technologies, SmartHire provides an end-to-end hiring workflow from resume upload to candidate selection.

---

# ✨ Key Features

## 👨‍🎓 Candidate Portal

### 🔐 Authentication
- Secure candidate registration and login
- Role-based dashboard access

### 📄 AI Resume Analysis

- Upload resume in PDF format
- Automatic skill extraction
- ATS score calculation
- Resume strength analysis
- Missing skill detection
- AI improvement suggestions

### 🤖 AI Interview Preparation

- AI-generated technical interview questions
- Skill-based interview preparation
- Mock interview simulation
- Candidate answer evaluation

### 🎤 AI Voice Interview

- Camera access
- Video recording
- Voice-based interview simulation
- AI feedback on answers
- Communication improvement suggestions

### 💼 Smart Job Recommendation

- Skill-based job matching
- Recommended opportunities
- Save jobs
- Apply for jobs

### 📄 Career Tools

- AI generated cover letter
- ATS resume report
- Profile management


---

# 👨‍💼 Recruiter Portal

### 📊 Recruiter Dashboard

- Candidate statistics
- Job management
- Hiring workflow tracking


### 💼 Job Management

Recruiters can:

- Create new job postings
- Manage available jobs
- Delete jobs


### 👥 Candidate Management

Features:

- View candidates
- Search candidates
- View candidate details
- Preview resumes
- ATS score tracking
- Candidate status management


### Hiring Pipeline

Candidate status:

🟡 Applied

🔵 Shortlisted

🟣 Interview

🟢 Selected

🔴 Rejected


---

# 🧠 AI Capabilities

SmartHire integrates AI to provide:

- Resume understanding
- Skill extraction
- ATS evaluation
- Interview generation
- Answer analysis
- Career recommendations


---

# 🛠️ Tech Stack

## Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- React Toastify


## Backend

- Node.js
- Express.js
- REST APIs
- JWT Authentication


## Database

- MongoDB
- MongoDB Atlas


## AI Integration

- Google Gemini AI API


## Other Tools

- Git & GitHub
- Vite
- Multer
- PDF Processing


---

# 🏗️ System Architecture
             Candidate
                |
                |
         React Frontend
                |
                |
          Node.js API
                |
    -----------------------
    |                     |

MongoDB              Gemini AI
    |                     |
  Candidate Data AI Analysis
          |
   Recruiter Portal



---

# 📂 Project Structure
SmartHire-AI-Recruitment-Platform

│
├── frontend
│
│ ├── src
│ │
│ ├── components
│ │ ├── Dashboard.jsx
│ │ ├── ResumeAnalysis.jsx
│ │ ├── MockInterview.jsx
│ │ ├── VoiceInterview.jsx
│ │ ├── RecruiterDashboard.jsx
│ │
│ └── package.json
│
│
├── backend
│
│ ├── routes
│ │ ├── authRoutes.js
│ │ ├── aiRoutes.js
│ │ ├── jobRoutes.js
│ │
│ ├── models
│ │
│ ├── uploads
│ │
│ ├── server.js
│ └── package.json
│
│
└── README.md



---
###
🔌 Main Modules

| Module              | Description                   |
| ------------------- | ----------------------------- |
| Authentication      | Candidate and recruiter login |
| Resume Analyzer     | AI powered ATS analysis       |
| Interview System    | AI questions and evaluation   |
| Voice Interview     | Video based interview         |
| Job Recommendation  | Smart job matching            |
| Recruiter Dashboard | Hiring management             |

###
🚀 Future Enhancements

Planned improvements:

Cloud deployment
Email notifications
Advanced analytics dashboard
AI video interview analysis
Docker deployment
Admin panel
Real-time recruiter chat
📸 Screenshots
<img width="1397" height="907" alt="image" src="https://github.com/user-attachments/assets/0feaa987-1a41-400e-ab16-263b4611e02a" />
<img width="911" height="906" alt="image" src="https://github.com/user-attachments/assets/04fea0c0-e2e6-4cac-b603-2e56888b6fd8" />
<img width="1417" height="918" alt="image" src="https://github.com/user-attachments/assets/2c0405c5-9bda-4517-b557-7aa986d25335" />
<img width="1411" height="900" alt="image" src="https://github.com/user-attachments/assets/e5730108-1c9f-440e-8304-ae7101b0122a" />
<img width="1007" height="923" alt="image" src="https://github.com/user-attachments/assets/9ada33d2-9355-4de2-9412-72cdb5f6f622" />
<img width="1103" height="832" alt="image" src="https://github.com/user-attachments/assets/239d066d-1981-45ad-9c74-7ad0af28ce08" />

## 🎯 Project Highlights

⭐ Full Stack MERN Application

⭐ AI Integrated Recruitment Workflow

⭐ Real-world Hiring Automation

⭐ Resume Intelligence System

⭐ Candidate & Recruiter Management

### 👩‍💻 Author

Amisha Kumari

Software Developer | Full Stack Developer

Skills:

Java
MERN Stack
Data Structures & Algorithms
AI Integration

GitHub:

https://github.com/amisha8o

LinkedIn:

https://linkedin.com/in/amisha-kumari-3b80aa2b1

## ⭐ If you like this project

Give this repository a ⭐ and feel free to explore.

# ⚙️ Installation & Setup
## Backend Setup
cd backend

npm install
## Create .env file:
MONGO_URI=your_mongodb_connection

GEMINI_API_KEY=your_gemini_api_key

JWT_SECRET=your_secret_key
## Run backend:
npm start
## Frontend Setup
cd frontend

npm install

npm run dev

## Clone Repository

```bash
git clone https://github.com/amisha8o/SmartHire-AI-Recruitment-Platform.git

