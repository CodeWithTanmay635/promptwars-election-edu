# 🗳️ Election Process Education
**An interactive AI-powered platform designed to demystify the Indian electoral process and empower citizens with civic knowledge.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)]([FRONTEND_URL])
[![PromptWars 2026](https://img.shields.io/badge/Hackathon-PromptWars_2026-blueviolet?style=for-the-badge)](https://promptwars.example.com)

---

## 🚩 Problem Statement
Many Indian citizens, especially first-time voters, lack easy access to clear, non-partisan, and interactive information about the election process. Static websites and dense legal documents often act as a barrier to civic engagement.

## 💡 The Solution
Our platform provides a **one-stop digital learning hub**. By combining **Generative AI** with structured educational content, we turn complex procedures into an engaging journey. Users can chat with an intelligent assistant, track the election lifecycle on a timeline, and test their knowledge via interactive quizzes.

## 🛠️ Tech Stack
| Layer | Technologies |
| :--- | :--- |
| **Frontend** | ![React](https://img.shields.io/badge/react-%2320232d.svg?style=flat&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white) |
| **Backend** | ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB) |
| **AI Engine** | ![Claude AI](https://img.shields.io/badge/Claude_AI-Anthropic-%23D97757?style=flat) ![Google Gemini](https://img.shields.io/badge/Google_Gemini-AI-%238E75B2?style=flat) |
| **Security** | Helmet.js, CORS, Rate Limiting |

---

## ✨ Key Features
- **🤖 VoteBot AI Assistant**: A multi-lingual, non-partisan AI companion powered by Claude/Gemini to answer complex voting queries instantly.
- **⏳ Election Lifecycle Timeline**: A step-by-step interactive stepper showing the journey from Voter Registration to Result Counting.
- **📝 Civic Literacy Quiz**: Gamified MCQ assessment to test your democratic knowledge and earn digital badges.
- **📚 Educational Topic Cards**: Deep dives into Voter IDs, EVMs, VVPATs, and the Model Code of Conduct.

---


## 🚀 Setup & Installation

### Prerequisites
- Node.js (v18+)
- NPM

### 1. Clone the repository
```bash
git clone https://github.com/your-username/PromptWars-2026.git
cd PromptWars-2026
```

### 2. Backend Setup
```bash
cd backend
npm install
# Create a .env file with:
# PORT=3000
# GEMINI_API_URL=your_key
# FRONTEND_URL=http://localhost:5173
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
# Create a .env.local file with:
# VITE_API_URL=http://localhost:3000
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/topics` | Fetch all educational topics |
| `GET` | `/api/topics/:id/summary` | Get AI-generated summary for a topic |
| `GET` | `/api/timeline` | Fetch election lifecycle steps |
| `GET` | `/api/quiz/questions` | Get MCQ questions |
| `POST` | `/api/chat` | Interact with the AI Civic Assistant |
| `GET` | `/health` | Server health check |

---

## 👥 The Team
**Built with ❤️ at PromptWars 2026**
- **Team Name**: Civic Innovators
- **Focus**: AI for Social Good & Civic Education

---
*Disclaimer: This project is for educational purposes only and is not affiliated with the Election Commission of India.*
