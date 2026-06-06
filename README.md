# 🛒 Ecommerce App

A full‑stack MERN (MongoDB, Express.js, React, Node.js) based e‑commerce application with modern UI and complete shopping flow.

---

## ✨ Features
- 🔐 User authentication (JWT)
- 🛍️ Product listing, categories & filters
- 📦 Cart & checkout flow
- 💳 Razorpay payment integration
- 📸 Cloudinary image hosting
- 📊 Admin dashboard for product & order management
- 📱 Responsive UI with Tailwind CSS

---

## 🛠️ Tech Stack
- **Frontend**: React + Vite + Tailwind CSS  
- **Backend**: Node.js + Express.js  
- **Database**: MongoDB Atlas  
- **Image Hosting**: Cloudinary  
- **Payment Gateway**: Razorpay  


---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Vishal2059/ecommerce_app.git
cd ecommerce_app

2. Install dependencies
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

3. Configure environment variables
Create .env files in both backend and frontend:

#####Backend .env####
MONGODB_URI = "mongodb+srv://vishal:2003@ecommerce.it0oege.mongodb.net"
CLOUDINARY_API_KEY = "847629243812136"
CLOUDINARY_SECRET_KEY = "IKnR2KlarkqhpZQ_3X2YxkEcOww"    
CLOUDINARY_NAME = "dkowqiyda"
JWT_SECRET = "vishal@1"
ADMIN_EMAIL = "vy813744@gmail.com"
ADMIN_PASSWORD = "vishal@123"
STRIPE_SECRET_KEY = "sk_test_51TfBMGLFVpmw1sinrijZqgUkaapB1WjaiXauTjVvfIch8W2NL6HuiFR26zmhgHP2u1tMwbuRgpjCRx2ajGmmHAUG00mfdwHIfu"
RAZORPAY_KEY_SECRET = "v71i4995A20QeS1MzjPRM6Qs"
RAZORPAY_KEY_ID = "rzp_test_SyHzOm1IjwRJEG"

###Frontend .env####
VITE_BACKEND_URL = http://localhost:4000
VITE_RAZORPAY_KEY_ID = "rzp_test_SyHzOm1IjwRJEG"

4. Run the app
# Backend
npm start

# Frontend
npm run dev

###Admin panel ####

# admin
cd ../admin
npm install

#####admin.env####
VITE_BACKEND_URL = "http://localhost:4000"

# admin #
npm run dev

