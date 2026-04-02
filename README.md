# 💰 Finance Backend API

## 📌 Overview

This is a backend system for managing financial data with role-based access control.

It allows users to manage financial records, view summaries, and enforce permissions based on roles.

---

## 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* express-validator

---

## 📂 Features

### 👤 User Management

* Create users
* Assign roles (Admin, Analyst, Viewer)
* Manage user access

### 💸 Financial Records

* Create, Read, Update, Delete records
* Fields: amount, type, category, date, notes
* Filtering (type, category, date)

### 📊 Dashboard APIs

* Total income
* Total expenses
* Net balance
* Category-wise totals
* Monthly trends
* Recent transactions

### 🔐 Access Control

* Viewer → Read only
* Analyst → Read + Dashboard
* Admin → Full access

### ✅ Validation & Error Handling

* Input validation using express-validator
* Proper error responses

### ⚡ Pagination

* Implemented for financial records API

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Finance_backend.git
cd Finance_backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Run Server

```bash
npm run dev
```

---

## 📡 API Endpoints

### Users

* POST `/api/users`
* GET `/api/users`

### Records

* POST `/api/records`
* GET `/api/records`
* PUT `/api/records/:id`
* DELETE `/api/records/:id`

### Dashboard

* GET `/api/dashboard`

---

## 🧪 Testing

* Tested using Thunder Client (VS Code)

---

## 📌 Assumptions

* Authentication (JWT) is not implemented
* Role is passed via headers for simplicity

---

## 🔮 Future Improvements

* Add JWT Authentication
* Deploy API to cloud
* Add Swagger documentation
* Advanced analytics

---

## 👨‍💻 Author

Sai Kiran
