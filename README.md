# ChatNova — Real-Time Full Stack Chat Application

ChatNova is a modern, real-time chat application built with the MERN stack and powered by Socket.io for instant messaging. It includes custom authentication, live presence tracking, media uploads, rate limiting, and a sleek UI.

Designed to reflect real-world production architecture and best practices.

## 📸 Preview
<img width="1920" height="871" alt="login Page" src="https://github.com/user-attachments/assets/e5d02c05-942b-4bd8-b0cd-bc8b6b0a1007" />

---
<img width="1920" height="870" alt="Home page" src="https://github.com/user-attachments/assets/25f5527f-bb84-44b0-880f-6ccd4c53ecf8" />

---
<img width="1920" height="871" alt="sign up page" src="https://github.com/user-attachments/assets/0ad30929-7f4e-4b78-8b08-f10975802840" />

---
<img width="1920" height="870" alt="Chat page" src="https://github.com/user-attachments/assets/0ae95bde-23cc-4c57-88d5-4466e4724603" />

---


## 🚀 Features
### 🔐 Authentication

- Custom JWT-based authentication

- Secure login & signup system

- Protected API routes

### ⚡ Real-Time Chat

- Instant messaging with Socket.io

- Typing indicators

- Message delivery in real-time

### 🟢 User Presence

- Live Online/Offline indicators

- Tracks connected users via sockets

### 🔔 Smart Notifications

- Message notification sounds

- Typing sounds

- Toggle to enable/disable sounds

### 📨 Emails

- Welcome emails on signup using Resend

### 🗂️ Media Uploads

- Image uploads powered by Cloudinary

### 🧰 Backend

- REST API built with Node.js & Express

- MongoDB for data persistence

- API rate limiting with Arcjet

### 🎨 Frontend

- Built with React

- Styled using Tailwind CSS + DaisyUI

- Global state management via Zustand

## 🏗️ Tech Stack

| Layer     | Technology                            |
| --------- | ------------------------------------- |
| Frontend  | React, Tailwind CSS, DaisyUI, Zustand |
| Backend   | Node.js, Express                      |
| Database  | MongoDB                               |
| Real-Time | Socket.io                             |
| Auth      | JWT                                   |
| Email     | Resend                                |
| Media     | Cloudinary                            |
| Security  | Arcjet Rate Limiting                  |


## 📂 Project Structure
```bash
ChatNova/
│
├── backend/     # Express server & API
└── frontend/    # React client app
```

## 🧪 Environment Variables

Create a .env file inside the backend folder:
```bash
PORT=3000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key

RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=onboarding@resend.dev
FROM_NAME=ChatNova

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

ARCJET_API_KEY=your_arcjet_key
ARCJET_ENV=production

```

⚠️ Important: Never commit real API keys to GitHub. Rotate any exposed keys immediately.

## 🔧 Backend Setup
```bash
cd backend
npm install
npm run dev
```

## 💻 Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## 🔄 How Real-Time Works

- User logs in → JWT issued

- Client connects to Socket.io server

- User presence stored in memory

- Messages emitted via sockets

- Events broadcast instantly to recipients

## 📸 Media Handling

- Images uploaded → Cloudinary → URL stored in MongoDB → Rendered in chat.

## 🚦 API Protection

- Rate limiting via Arcjet

- JWT route protection

- Input validation & error handling

## ✨ Future Improvements

- Group chats

- Message reactions

- Read receipts

- Push notifications

- Dark/light theme toggle

## 🧑‍💻 Dev Workflow

- Git & GitHub workflow (branches, PRs, merges)
