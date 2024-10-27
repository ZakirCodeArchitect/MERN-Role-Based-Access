# MERN Authentication & Role-Based Access Control (RBAC) System

This project is a backend authentication system built with the MERN stack, designed for educational applications. It supports role-based access control (RBAC) with roles such as `admin`, `user`, and `manager`, allowing specific features to be restricted based on the user's role.

## Features

- 🔑 **User Authentication**: Register and log in with JWT for session management.
- 🛡 **Role-Based Access Control**: Restrict access based on roles.
- 🔒 **Protected Routes**: Middleware to control route access by role.
- 🗝 **Password Hashing**: Secure password storage using bcrypt.
- ⚠️ **Error Handling**: Consistent, secure API responses.

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT), bcrypt

## Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Getting Started

Follow these instructions to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mern-auth-rbac.git
cd mern-auth-rbac

## API Endpoints

### Auth Routes

| Method | Endpoint               | Description               |
|--------|-------------------------|---------------------------|
| POST   | `/api/auth/register`    | Register a new user       |
| POST   | `/api/auth/login`       | Login with user credentials |

### User Routes

| Method | Endpoint                | Description                            | Access Level       |
|--------|--------------------------|----------------------------------------|--------------------|
| GET    | `/api/users`             | Retrieve all users                     | Admin only        |
| GET    | `/api/users/:id`         | Retrieve a specific user by ID         | Admin/Manager     |

### Role-Based Access

| Role    | Permissions                                                      |
|---------|------------------------------------------------------------------|
| Admin   | Full access to all routes and resources                          |
| Manager | Access to specific management features                           |
| User    | Limited access to general features                               |

