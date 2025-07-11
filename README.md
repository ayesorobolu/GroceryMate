# 🛒 GroceryMate

**GroceryMate** is a full-stack e-commerce platform designed specifically for grocery shopping. Customers can explore and buy groceries, manage carts, make secure payments via Stripe, and track their orders. Sellers can manage their products and view incoming orders. The project is built with **React**, **Express**, **MongoDB**, **Cloudinary**, and **Stripe**, and features secure authentication with JWT, image uploads, and separate interfaces for buyers and sellers.

> 🔗 Live Website: [https://grocery-mate-rho.vercel.app/]


---

## ✨ Features

### 🛒 User Functionality
- Register and login
- Browse grocery products
- Add items to cart
- Place orders (COD or Stripe)
- View order history

### 🧑‍💼 Seller Functionality
- Register/login as a seller
- Add, update, and delete products
- View and manage orders from buyers
- Access seller-specific dashboard and routes

### ⚙️ Core System Features
- JWT authentication for users and sellers
- Image upload and storage using Cloudinary
- Product management with image previews
- Responsive design with mobile-first UI
- Real-time cart & checkout logic

---

## 🧰 Tech Stack

| Layer         Tech                     |
|-------------|--------------------------|
| Frontend    | React.js, Tailwind CSS   |
| Backend     | Node.js, Express.js      |
| Database    | MongoDB with Mongoose    |
| Auth        | JWT, bcrypt              |
| File Upload | Multer, Cloudinary       |
| Payments    | Stripe                   |
| Deployment  | Vercel                   |

---

## 📸 Screenshots

> _(Add screenshots showing the homepage, product listing, cart page, checkout page, and seller dashboard if available)_

---

## 🗂️ Project Structure
GroceryMate/
├── Client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # UI components (Navbar, Footer, etc.)
│   │   ├── pages/          # Route views (Home, Cart, etc.)
│   │   ├── context/        # React Context for state management
│   │   └── main.jsx
│   └── public/
├── Server/                 # Node.js/Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
└── README.md

---

## 🚀 Getting Started (Full Setup)

###  Prerequisites

Ensure you have the following installed:

- Node.js (v18+ recommended)
- npm or yarn
- Git
- MongoDB (local or MongoDB Atlas)
- Stripe account (for test keys)
- Cloudinary account (for image hosting)

---

### Clone the Repository
```bash
git clone https://github.com/ayesorobolu/GroceryMate.git
cd GroceryMate
```

### Setup Backend

```bash
cd Server
```

### Install Dependencies
```bash
npm install
```

### Create .env file
``` bash
PORT=
#MongoDB Connection
MONGODB_URI=""

JWT_SECRET=""
NODE_ENV=""

#Admin Credentials
SELLER_EMAIL=""
SELLER_PASSWORD=""

#Cloudinary
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""


#Stripe
STRIPE_PUBLISHABLE_KEY= ""
STRIPE_SECRET_KEY = ""
STRIPE_WEBHOOK_SECRET = ""
```

### Start Backend
``` bash
npm run start
```
Server will start on your designated PORT

### Setup Frontend
``` bash
cd Client
```

### Install Dependencies
```bash
npm install
```

### Start Frontend
``` bash
npm run dev
```

## 🧪 API Overview

All routes are prefixed with `/api/{resource}`. Protected routes require authentication via JWT.

---

### 👤 User Routes `/api/user`

| Method | Endpoint      | Description                | Auth |
|--------|---------------|----------------------------|------|
| POST   | `/register`   | Register a new user        | ❌   |
| POST   | `/login`      | User login                 | ❌   |
| GET    | `/is-auth`    | Check user auth status     | ✅   |
| GET    | `/logout`     | Logout user                | ✅   |

---

### 🧑‍💼 Seller Routes `/api/seller`

| Method | Endpoint      | Description                  | Auth |
|--------|---------------|------------------------------|------|
| POST   | `/login`      | Seller login                 | ❌   |
| GET    | `/is-auth`    | Check seller auth status     | ✅   |
| GET    | `/logout`     | Logout seller                | ❌   |

---

### 🛍 Product Routes `/api/product`

| Method | Endpoint     | Description                         | Auth |
|--------|--------------|-------------------------------------|------|
| POST   | `/add`       | Add product (with images)           | ✅ Seller |
| GET    | `/list`      | Get all products                    | ❌   |
| GET    | `/id`        | Get product by ID                   | ❌   |
| POST   | `/stock`     | Update stock of a product           | ✅ Seller |

---

### 🛒 Cart Route `/api/cart`

| Method | Endpoint     | Description             | Auth |
|--------|--------------|-------------------------|------|
| POST   | `/update`    | Add or update cart item | ✅ User |

---

### 📦 Order Routes `/api/order`

| Method | Endpoint     | Description                      | Auth |
|--------|--------------|----------------------------------|------|
| POST   | `/cod`       | Place order (Cash on Delivery)   | ✅ User |
| POST   | `/stripe`    | Place order (Stripe Payment)     | ✅ User |
| GET    | `/user`      | Get current user's orders        | ✅ User |
| GET    | `/seller`    | Get seller’s received orders     | ✅ Seller |

---

### 🏠 Address Routes `/api/address`

| Method | Endpoint     | Description               | Auth |
|--------|--------------|---------------------------|------|
| POST   | `/add`       | Add new delivery address   | ✅ User |
| GET    | `/get`       | Get saved addresses        | ✅ User |


