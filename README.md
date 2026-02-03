# ⭐ Alumni Connect: Web & Mobile Portal

Complete Repository (Web • Mobile • API)

A modern platform designed for the University Alumni Community to stay connected, engage with events, access job postings, and participate in mentorship activities.
This repository contains:

-> Web Frontend (React + Vite + Tailwind)

-> Mobile App (React Native using Expo)

-> Backend API (Laravel + MongoDB + JWT)

# 📁 Repository Structure

alumni-connect/
│
├── web/          # React + Vite web app (Admin Panel + Website)
├── mobile/       # React Native mobile app (Expo)
├── api/          # Laravel API backend (with MongoDB & JWT)
├── docs/         # Project documentation (visions, SRS, proposal)
│
├── .gitignore
├── LICENSE
└── README.md     # You are reading this

# 🚀 Project Overview

Alumni Connect is a unified platform where:

Admin manages users, events, jobs, and mentorship channels

Alumni can connect, interact, explore events, and view jobs

Students can access mentorship, network, and attend events

Mobile app provides easy on-the-go access

API provides secured endpoints using JWT authentication

Team Members:
| Name   | Role                                      |
| ------ | ----------------------------------------- |
| Ayesha | Backend Developer (Laravel API + MongoDB) |
| Faiza  | Frontend Developer (Web + Mobile)         |

# 🧰 Tech Stack

# 🎨 Frontend Web (React + Vite)
-> React 18

-> Vite

-> Tailwind CSS

-> React Router

-> Axios

# 📱 Mobile App (React Native)

-> Expo

-> React Native

-> Redux Toolkit

-> React Navigation

# 🔧 Backend API (Laravel)

-> Laravel 12

-> MongoDB (via mongodb/laravel-mongodb)

-> JWT Authentication (tymon/jwt-auth)

-> RESTful API architecture

# 🗂️ Setup Instructions

Below are complete instructions for setting up all three parts.

# 🌐 1. Setup Web (React + Vite)
# 📌 Create Project

cd web
npm create vite@latest . -- --template react
npm install

# 📌 Install Tailwind CSS

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Configure tailwind.config.js and add Tailwind directives in src/index.css.

Z# ▶️ Run Web App

npm run dev

# 📱 2. Setup Mobile (React Native + Expo)
# 📌 Create Project

cd mobile
npx create-expo-app .
npm install

# ▶️ Run Mobile App

npx expo start

Scan the QR code using Expo Go on your phone.

# 🔌 3. Setup Backend API (Laravel + MongoDB + JWT)
# 📌 Create Laravel Project

cd api
composer create-project laravel/laravel .

# 📌 Install MongoDB driver
composer require mongodb/laravel-mongodb

Configure config/database.php and update .env:
DB_CONNECTION=mongodb
DB_HOST=<your-host>
DB_PORT=27017
DB_DATABASE=<dbname>
DB_USERNAME=<user>
DB_PASSWORD=<password>

# 📌 Install JWT Auth

composer require tymon/jwt-auth
php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
php artisan jwt:secret

# ▶️ Run API Server

php artisan serve

# 🌿 Git Workflow (Simple for Team)

We use a clean, beginner-friendly workflow:

Branches

-> main → production-ready

-> develop → testing/integration

-> feature/... → new features

Creating a feature branch

git checkout -b feature/api-auth

Pushing changes

git add .
git commit -m "feat: added login endpoint"
git push origin feature/api-auth

Create a Pull Request on GitHub → teammate reviews → merge into develop.

# 📘 Contribution Rules (Beginner-Friendly)

ALWAYS create a feature branch

NEVER push directly to main

Use clear commit messages

Keep PRs small

Add/update documentation in docs/

Do not commit .env, node_modules/, /vendor

# 🔍 API Structure (High-Level)

api/
├── app/
│   ├── Http/Controllers/
│   ├── Models/
│   ├── Middleware/
│
├── routes/
│   └── api.php

Sample route:

Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:api')->get('/profile', [UserController::class, 'profile']);

# 🧪 Testing Tools

-> Postman

-> Expo Go

-> Vite Dev Server

-> Laravel API testing via php artisan test

# 🗺️ Roadmap 

-> Admin panel dashboard

-> Event management module

-> Jobs posting module

-> Mentorship channels

-> Alumni directory

-> Notifications

-> Mobile integration with API

-> Deployment (Web + Mobile + API)

# 📄 License

Open-source under MIT

# ❤️ Acknowledgements

University of Education

Project Supervisor

Development Team (Ayesha & Faiza)


