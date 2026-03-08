# 🛍️ Local Marketplace Platform

A **scalable microservices-based web platform** where **small businesses and local vendors can list their products or services**, and **customers can browse, order, and pay online**.

The system is designed using **modern backend architecture patterns** including **API Gateway, service isolation, event-driven communication, and containerized deployment**.

This project demonstrates **production-level backend engineering practices** suitable for large-scale systems.

---

# 🌍 Problem Statement

Small businesses often struggle to sell online due to lack of technical infrastructure.

This platform provides:

- Vendor product listing
- Customer browsing and ordering
- Secure online payments
- Scalable backend architecture

---

# 🏗 Architecture Overview

The system follows **microservices architecture**, where each service is independently deployable and scalable.

```
Client (Web / Mobile)
        │
        ▼
    API Gateway
        │
        ├── Auth Service
        ├── User Auth Service
        ├── Vendor Service
        ├── Product Service
        ├── Order Service
        ├── Payment Service
        └── Notification Service
                │
                ▼
          Message Queue
```

---

# 🧩 Microservices

| Service              | Description                         |
| -------------------- | ----------------------------------- |
| API Gateway          | Entry point for all client requests |
| Auth Service         | Handles authentication and JWT      |
| User Auth Service    | Manages customer accounts           |
| Vendor Service       | Manages vendor profiles             |
| Product Service      | Handles product/service listings    |
| Order Service        | Manages order lifecycle             |
| Payment Service      | Handles online payments             |
| Notification Service | Sends order notifications           |

---

# ⚙️ Tech Stack

### Backend

- Node.js
- Express
- PostgreSQL
- Prisma ORM

### Infrastructure

- Docker
- Redis (Caching)
- Message Queue
- Nginx (API Gateway)

### DevOps

- CI/CD Pipeline
- Containerized deployment
- Centralized logging

---

# 📂 Project Structure

```
local-marketplace-platform
│
├── services
│   ├── api-gateway
│   ├── auth-service
│   ├── user-auth-service
│   ├── vendor-service
│   ├── product-service
│   ├── order-service
│   ├── payment-service
│   └── notification-service
│
├── shared
│   ├── middleware
│   ├── utils
│   └── logger
│
├── infrastructure
│   ├── docker
│   └── kubernetes
│
├── docs
│   ├── architecture
│   └── api
│
├── tests
│
└── README.md
```

---

# 🗄 Database Schema (Simplified)

## Users

```
id
name
email
password
role
createdAt
```

## Vendors

```
id
businessName
ownerId
address
createdAt
```

## Products

```
id
title
description
price
vendorId
createdAt
```

## Orders

```
id
userId
status
totalAmount
createdAt
```

## Order Items

```
id
orderId
productId
quantity
price
```

---

# 🔑 API Endpoints

## Authentication

```
POST /auth/register
POST /auth/login
POST /auth/logout
```

---

## Vendors

```
POST /vendors
GET /vendors
GET /vendors/:id
```

---

## Products

```
POST /products
GET /products
GET /products/:id
PUT /products/:id
DELETE /products/:id
```

---

## Orders

```
POST /orders
GET /orders
GET /orders/:id
```

---

## Payments

```
POST /payments/create
POST /payments/webhook
```

---

# 💳 Payment Integration

The system supports integration with payment gateways such as:

- Stripe
- Razorpay
- PayPal

---

# 🚀 Running the Project Locally

### 1️⃣ Clone Repository

```
git clone https://github.com/yourusername/local-marketplace-platform.git
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Start Services

```
docker-compose up
```

---

# 🧪 Testing

Run automated tests:

```
npm run test
```

---

# 📈 Scalability Features

This project includes:

- API Gateway pattern
- Service isolation
- Event-driven architecture
- Database per service
- Horizontal scalability
- Containerized deployment

---

# 🔐 Security Features

- JWT authentication
- Role-based access control
- API rate limiting
- Input validation
- Secure password hashing

---

# 📊 Future Improvements

- Real-time order tracking
- Vendor analytics dashboard
- Recommendation system
- AI-powered product search
- Mobile app integration

---

# 👨‍💻 Author

Satish
MERN Stack Developer

---

# 📜 License

MIT License
