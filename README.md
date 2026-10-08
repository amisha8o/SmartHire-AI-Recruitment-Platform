# 🚀 SmartHire – AI-Powered Recruitment Platform

<p align="center">

An intelligent AI-powered recruitment and placement platform that connects candidates and recruiters through automated resume analysis, AI interviews, smart job matching, and hiring management.

</p>

<p align="center">

<a href="https://smart-hire-ai-recruitment-platform.vercel.app/">🌐 Live Demo</a> • <a href="https://github.com/amisha8o/SmartHire-AI-Recruitment-Platform">💻 GitHub Repository</a> • <a href="https://github.com/amisha8o">👩‍💻 GitHub Profile</a>

</p>

---

## 🌐 Live Deployment

### 👩‍🎓 Candidate / Frontend

**Live Website:**
https://smart-hire-ai-recruitment-platform.vercel.app/

### ⚙️ Backend API

**Backend Server:**
https://smarthire-backend-t66c.onrender.com/

### 💻 Source Code

**GitHub Repository:**
https://github.com/amisha8o/SmartHire-AI-Recruitment-Platform

---

# 📌 Overview

SmartHire is a full-stack AI-powered recruitment and placement platform designed to simplify the hiring process for both candidates and recruiters.

The platform uses Artificial Intelligence to analyze resumes, extract skills, calculate ATS scores, generate interview questions, evaluate candidate responses, recommend suitable jobs, and help recruiters manage candidates efficiently.

SmartHire provides an end-to-end recruitment workflow — from candidate registration and resume analysis to job matching, applications, interviews, and recruiter-side candidate management.

---

# ✨ Key Features

## 👨‍🎓 Candidate Portal

### 🔐 Authentication

* Secure candidate registration and login
* JWT-based authentication
* Role-based dashboard access

### 📄 AI Resume Analysis

* Upload resume in PDF format
* Automatic skill extraction
* ATS score calculation
* Resume strength analysis
* Missing skill detection
* AI-powered improvement suggestions
* Resume analysis history

### 🤖 AI Interview Preparation

* AI-generated technical interview questions
* Skill-based interview preparation
* Mock interview simulation
* Candidate answer evaluation
* AI-powered feedback

### 🎤 AI Voice Interview

* Camera access
* Video recording
* Voice-based interview simulation
* AI feedback on answers
* Communication improvement suggestions

### 💼 Smart Job Recommendation

* Skill-based job matching
* AI-assisted job recommendations
* Recommended opportunities
* Save jobs
* Apply for jobs

### 📄 Career Tools

* AI-generated cover letter support
* ATS resume report
* Candidate profile management

---

# 👨‍💼 Recruiter Portal

## 📊 Recruiter Dashboard

* Candidate statistics
* Job management
* Hiring workflow tracking
* Candidate monitoring

## 💼 Job Management

Recruiters can:

* Create new job postings
* View available jobs
* Manage job postings
* Delete jobs

## 👥 Candidate Management

Recruiters can:

* View candidates
* Search candidates
* View candidate details
* Preview uploaded resumes
* Track ATS scores
* Update candidate status

## 🔄 Hiring Pipeline

Candidate status can be managed through:

🟡 **Applied**

🔵 **Shortlisted**

🟣 **Interview**

🟢 **Selected**

🔴 **Rejected**

---

# 🧠 AI Capabilities

SmartHire integrates Google Gemini AI to provide:

* Resume understanding
* Skill extraction
* ATS evaluation
* Resume improvement suggestions
* Interview question generation
* Candidate answer analysis
* Career recommendations
* AI-powered interview feedback

---

# 🛠️ Technology Stack

## Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Vite
* React Toastify
* Framer Motion
* Recharts
* Axios

## Backend

* Node.js
* Express.js
* REST APIs
* JWT Authentication
* Multer
* PDF Processing

## Database

* MongoDB
* MongoDB Atlas
* Mongoose

## AI Integration

* Google Gemini AI API

## Deployment

* Vercel – Frontend
* Render – Backend
* MongoDB Atlas – Database

## Development Tools

* Git
* GitHub
* npm
* Vite

---

# 🏗️ System Architecture

```text
                    👨‍🎓 Candidate
                         |
                         |
                  React Frontend
                   (Vercel)
                         |
                         |
                  REST API Requests
                         |
                         |
                 Node.js + Express
                   (Render)
                  /      |       \
                 /       |        \
                /        |         \
        MongoDB Atlas   Gemini AI   File Upload
             |             |           |
             |             |           |
      Candidate Data   AI Analysis   Resumes
             |
             |
       👨‍💼 Recruiter Portal
```

---

# 📂 Project Structure

```text
SmartHire-AI-Recruitment-Platform
│
├── frontend
│   │
│   ├── src
│   │   ├── components
│   │   │   ├── MockInterview.jsx
│   │   │   ├── VoiceInterview.jsx
│   │   │   └── RecruiterDashboard.jsx
│   │   │
│   │   ├── pages
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── api.js
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── aiRoutes.js
│   │   ├── jobRoutes.js
│   │   └── ...
│   │
│   ├── models
│   ├── uploads
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── .gitattributes
└── README.md
```

---

# 🔌 Main Modules

| Module               | Description                                  |
| -------------------- | -------------------------------------------- |
| Authentication       | Candidate and recruiter authentication       |
| Resume Analyzer      | AI-powered ATS and resume analysis           |
| Skill Extraction     | Automatic identification of candidate skills |
| Interview System     | AI-generated questions and evaluation        |
| Voice Interview      | Voice/video-based interview simulation       |
| Job Recommendation   | Skill-based job matching                     |
| Saved Jobs           | Save relevant job opportunities              |
| Applications         | Candidate job application management         |
| Recruiter Dashboard  | Hiring and candidate management              |
| Candidate Management | ATS score and hiring-status tracking         |

---

# 🚀 Deployment

SmartHire is deployed using a separate frontend and backend architecture.

### Frontend

Hosted on **Vercel**:

https://smart-hire-ai-recruitment-platform.vercel.app/

### Backend

Hosted on **Render**:

https://smarthire-backend-t66c.onrender.com/

### Database

Hosted using **MongoDB Atlas**.

The frontend communicates with the production backend through the environment variable:

```env
VITE_API_URL=https://smarthire-backend-t66c.onrender.com
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/amisha8o/SmartHire-AI-Recruitment-Platform.git

cd SmartHire-AI-Recruitment-Platform
```

---

## 2️⃣ Backend Setup

```bash
cd backend

npm install
```

### Create `.env`

```env
MONGO_URI=your_mongodb_connection_string

GEMINI_API_KEY=your_gemini_api_key

JWT_SECRET=your_secret_key
```

### Start Backend

```bash
npm start
```

Backend will run locally on:

```text
http://localhost:5000
```

---

## 3️⃣ Frontend Setup

Open another terminal:

```bash
cd frontend

npm install
```

### Create `.env`

```env
VITE_API_URL=http://localhost:5000
```

### Start Frontend

```bash
npm run dev
```

Frontend will run locally on:

```text
http://localhost:5173
```

---

# 🔐 Environment Variables

Never commit your actual API keys, database credentials, or JWT secrets to GitHub.

Required backend variables:

```text
MONGO_URI
GEMINI_API_KEY
JWT_SECRET
```

Required frontend variable:

```text
VITE_API_URL
```

---

# 📸 Screenshots

### Candidate Dashboard

<img width="1397" height="907" alt="SmartHire Candidate Dashboard" src="https://github.com/user-attachments/assets/0feaa987-1a41-400e-ab16-263b4611e02a" />

### Resume Analysis

<img width="911" height="906" alt="SmartHire Resume Analysis" src="https://github.com/user-attachments/assets/04fea0c0-e2e6-4cac-b603-2e56888b6fd8" />

### Job Recommendations

<img width="1417" height="918" alt="SmartHire Job Recommendations" src="https://github.com/user-attachments/assets/2c0405c5-9bda-4517-829b-7aa986d25335" />

### Recruiter Dashboard

<img width="1411" height="900" alt="SmartHire Recruiter Dashboard" src="https://github.com/user-attachments/assets/e5730108-1c9f-440e-8304-ae7101b0122a" />

### Candidate Management

<img width="1007" height="923" alt="SmartHire Candidate Management" src="https://github.com/user-attachments/assets/9ada33d2-9355-4de2-9412-72cdb5f6f622" />

### Interview / AI Features

<img width="1103" height="832" alt="SmartHire AI Interview" src="https://github.com/user-attachments/assets/239d066d-1981-45ad-9c74-7ad0af28ce08" />

---

# 🎯 Project Highlights

⭐ Full-Stack MERN Application

⭐ AI-Integrated Recruitment Workflow

⭐ Real-World Hiring Automation

⭐ Resume Intelligence System

⭐ ATS Scoring System

⭐ AI Interview System

⭐ Voice Interview Support

⭐ Smart Job Recommendation

⭐ Candidate & Recruiter Management

⭐ Production Deployment

---

# 🔮 Future Enhancements

Planned improvements include:

* Advanced recruitment analytics
* AI-powered video interview analysis
* Email notifications
* Real-time recruiter-candidate communication
* Docker-based deployment
* Advanced admin analytics
* Enhanced candidate ranking
* Real-time hiring notifications

---

# 👩‍💻 Author

## Amisha Kumari

**Software Developer | Full Stack Developer**

### Skills

* Java
* Data Structures & Algorithms
* MERN Stack
* React.js
* Node.js
* Express.js
* MongoDB
* Python
* AI Integration

### GitHub

https://github.com/amisha8o

### LinkedIn

https://linkedin.com/in/amisha-kumari-3b80aa2b1/

---

# ⭐ Support

If you like this project, consider giving the repository a ⭐ and exploring the project.

**Live Demo:**
https://smart-hire-ai-recruitment-platform.vercel.app/

**GitHub:**
https://github.com/amisha8o/SmartHire-AI-Recruitment-Platform

---

## 📌 Project Status

**SmartHire is currently deployed with a React/Vite frontend on Vercel and a Node.js/Express backend on Render, using MongoDB Atlas for persistent data storage and Google Gemini AI for intelligent recruitment features.**


