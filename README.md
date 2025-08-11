# 🛒 Next.js E-commerce Platform

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?style=flat-square&logo=postgresql)
![Prisma](https://img.shields.io/badge/Prisma-ORM-green?style=flat-square&logo=prisma)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat-square&logo=tailwindcss)

A **modern, full-featured e-commerce application** built with the latest technologies for performance, scalability, and an excellent user experience.

---

## ✨ Features

- 🔐 **Secure authentication** with [NextAuth](https://next-auth.js.org/)
- 📊 **Admin dashboard** with charts & statistics via [Recharts](https://recharts.org/)
- 📦 **Full order, product, and user management**
- 💳 Multiple payment methods:
  - Stripe
  - PayPal
  - Cash on Delivery
- 🛍 **Interactive checkout process** and **customer account area**
- ⭐ Product reviews, featured banners, and multi-image product support via [UploadThing](https://uploadthing.com/)
- 🔎 Advanced product **search, filtering, sorting, and pagination** (both admin & customer views)
- 🌗 Dark mode / Light mode support

---

## 🛠 Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
- [Stripe](https://stripe.com/)
- [UploadThing](https://uploadthing.com/)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/username/repository-name.git
cd repository-name

2. Install dependencies
bash
Copy
Edit
npm install
3. Configure environment variables
Create a .env file in the root folder and set up your values:

env
Copy
Edit
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/DATABASE_NAME
NEXTAUTH_SECRET=your-secret
STRIPE_SECRET_KEY=your-stripe-secret
PAYPAL_CLIENT_ID=your-paypal-client-id
UPLOADTHING_SECRET=your-uploadthing-secret
4. Run database migrations
bash
Copy
Edit
npx prisma migrate dev
5. Seed the database
bash
Copy
Edit
npm run seed
6. Start the development server
bash
Copy
Edit
npm run dev
The app will be available at: http://localhost:3000

👥 Demo Accounts
Admin:

makefile
Copy
Edit
Email: mita@yahoo.com
Password: password
User:

pgsql
Copy
Edit
Email: user@example.com
Password: password
📸 Screenshots
