# Frontend Engineering CMS Assignment

A production-ready Content Management System (CMS) built with **Next.js**, **Redux Toolkit**, **Express.js**, and **MongoDB**. The project includes an Admin Panel for managing website content and a Public Website that dynamically fetches content from the backend APIs.

---
#BACKEND DEPLOY(RENDER)
https://cms-assignment-y8x0.onrender.com

#ADMIN DEPLOY(VERCEL)
cms-assignment-rho.vercel.app

#FRONTEND DEPLOY(VERCEL)
cms-assignment-six.vercel.app

# Tech Stack

## Frontend (Admin)

- Next.js
- Redux Toolkit
- Axios
- Tailwind CSS
- React Toastify

## Frontend (Public Website)

- Next.js
- Axios
- Tailwind CSS

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs

## Infrastructure

- Docker
- Docker Compose

---

# Features

## Authentication

- Admin Login
- Admin Logout
- JWT Authentication
- Protected Routes

## CMS

- Dashboard
- Create Page
- Edit Page
- Delete Page
- Search Pages
- Loading State
- Empty State
- Toast Notifications

## Public Website

- Dynamic Home Page
- Dynamic About Page
- Dynamic Services Page
- Dynamic Contact Page
- Dynamic Routes
- Custom 404 Page
- Content fetched from backend APIs

---

# Folder Structure

```
cms-assignment/
│
├── backend/
│
├── admin/
│
├── frontend/
│
├── docker-compose.yml
│
└── README.md
```

---

# Environment Variables

## Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=mysecretkey123

NODE_ENV=development
```

## Admin (.env)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Frontend (.env)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/sai-supraja48/cms-assignment.git

cd cms-assignment
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

Runs on:

```
http://localhost:5000
```

---

## Admin

```bash
cd admin

npm install

npm run dev
```

Runs on:

```
http://localhost:3000
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Runs on:

```
http://localhost:3001
```

---

# Docker

Run all services using Docker:

```bash
docker compose up --build
```

---

# API Endpoints

## Authentication

### Register

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

---

## Pages

### Get All Pages

```
GET /api/pages
```

### Get Page

```
GET /api/pages/:id
```

### Create Page

```
POST /api/pages
```

### Update Page

```
PUT /api/pages/:id
```

### Delete Page

```
DELETE /api/pages/:id
```

---

# Admin Credentials

```
Email

admin@gmail.com

Password

admin123
```

---

# Architecture

```
                 Admin (Next.js)

                      │

                Redux Toolkit

                      │

                  Axios APIs

                      │

             Express.js Backend

                      │

             JWT Authentication

                      │

               MongoDB Atlas

                      │

         Public Website (Next.js)
```

---

# Technologies Used

- Next.js
- Redux Toolkit
- Express.js
- MongoDB
- Mongoose
- JWT
- Axios
- Tailwind CSS
- React Toastify
- Docker

---

# Future Improvements

- Rich Text Editor
- Image Upload
- Pagination
- Role Based Access Control
- SEO Optimization
- File Management
- Dashboard Analytics

---

GitHub:
https://github.com/sai-supraja48

# Author

**Sai Supraja Annam**

