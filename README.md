# 🎨 AI Poster Generator

A beautiful web application that generates inspirational quote posters using AI-powered content and stunning visuals.

## ✨ Features

- 🤖 AI-powered quote generation for various topics
- 🎨 Multiple artistic styles (Minimal, Modern, Vintage, Artistic)
- 📱 Responsive design that works on all devices
- 💾 Download generated posters
- 🐦 Share directly to Twitter
- ⚡ Fast and reliable backend API

## 🚀 Quick Start

### Backend Server (Node.js)
```bash
cd backend
npm install
npm start
```
Server runs on: http://localhost:5001

### Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on: http://localhost:5174

## 🎯 How to Use

1. **Open your browser** and go to `http://localhost:5174`
2. **Enter a topic** (e.g., "Success", "Friendship", "Dreams", "Motivation")
3. **Choose a style** from the dropdown menu
4. **Click "Generate"** to create your poster
5. **Download or share** your beautiful poster!

## 📂 Project Structure

```
ai-quote-poster/
├── backend/           # Node.js Express server
│   ├── server.js      # Main server file
│   ├── package.json   # Backend dependencies
│   └── ...
├── frontend/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── api/
│   │   └── styles/
│   └── ...
└── README.md
```

## 🎨 Available Topics

- Success
- Friendship  
- Motivation
- Dreams
- Love
- Life
- And any custom topic you enter!

## 🛠️ Tech Stack

**Frontend:**
- React 19
- Vite
- Axios for API calls
- CSS3 with modern styling

**Backend:**
- Node.js
- Express.js
- CORS enabled
- RESTful API

## 🌟 API Endpoints

- `GET /` - Server status
- `GET /health` - Health check
- `POST /generate` - Generate poster (requires topic and style)

## 🎉 Success!

Your AI Poster Generator is now running and ready to create amazing inspirational posters!

Visit: **http://localhost:5174** to start generating!