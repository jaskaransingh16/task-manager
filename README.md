# Task Manager (Full Stack Application)

A simple **Task Manager application** built using **Angular (Frontend)** and **Django + Django REST Framework (Backend)**.

The application allows users to **create, update, delete, and track tasks**, including marking tasks as completed.

---

# Features

- Add new tasks
- View all tasks
- Delete tasks
- Mark tasks as completed
- RESTful API backend
- Angular frontend integrated with Django API

---

# Tech Stack

## Backend
- Python
- Django
- Django REST Framework

## Frontend
- Angular
- TypeScript
- Angular HTTP Client

---

# Backend Setup (Django + DRF)

## 1. Clone the repository

```bash
git clone https://github.com/jaskaransingh16/task-manager.git
cd task-manager/backend
```

---

## 2. Install dependencies

```bash
pip install django djangorestframework
```

---

## 3. Run migrations

```bash
python manage.py migrate
```

---

## 4. Run the backend server

```bash
python manage.py runserver
```

---

## Backend server will run at

```
http://127.0.0.1:8000
```

---

# Frontend Setup (Angular)

Open a new terminal and navigate to the frontend directory.

## 1. Go to frontend folder

```bash
cd frontend
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Run the Angular application

```bash
ng serve
```

---

## Frontend will run at

```
http://localhost:4200
```

---

# API Endpoints

| Method | Endpoint | Description |
|------|------|------|
| GET | `/tasks/` | Retrieve all tasks |
| POST | `/tasks/` | Create a new task |
| PUT | `/tasks/{id}/` | Update a task |
| DELETE | `/tasks/{id}/` | Delete a task |

---

# Future Improvements

- User authentication
- Task categories
- Task deadlines
- Improved UI/UX
- Deployment using Docker or cloud platforms
