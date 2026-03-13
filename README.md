# Ecoyaan Checkout Flow

A minimal, production-style checkout flow built using **Next.js** and **Tailwind CSS**.
This project demonstrates a clean frontend architecture for an e-commerce checkout process including cart review, checkout form, payment simulation, and order success confirmation.

---

## Features

* Cart page displaying selected products
* Order summary with subtotal, shipping, and total price
* Checkout form with shipping address
* Simulated payment step
* Order success confirmation page
* Responsive UI using Tailwind CSS

---

## Tech Stack

* **Next.js** – React framework for building modern web applications
* **React** – Component-based UI architecture
* **Tailwind CSS** – Utility-first CSS framework for styling
* **Context API** – Global state management for checkout data

---

## Architecture Overview

The project uses a **component-based architecture** to keep the UI modular and maintainable.

### Key Design Choices

**1. Component Separation**

Reusable UI components are placed inside the `components` folder to maintain separation between layout and logic.

Examples:

* `OrderSummary`
* `CartItem`
* `CheckoutForm`

This allows components to be reused across pages.

---

**2. Context API for Global State**

The checkout flow uses a **CheckoutContext** to store and share data like:

* Shipping address
* Order information

This prevents excessive prop drilling between components.

---

**3. Next.js App Router**

The project uses Next.js routing to manage different stages of the checkout process:

* `/cart` – Displays selected products
* `/checkout` – Collects shipping information
* `/payment` – Simulated payment page
* `/success` – Order confirmation page

---

**4. Tailwind CSS for Styling**

Tailwind CSS was used to build a clean UI quickly while maintaining consistency in spacing, typography, and layout.

Benefits:

* Faster UI development
* Responsive design
* Minimal custom CSS

---

## Project Structure

```
ecoyaan-checkout
│
├── app
│   ├── checkout
│   ├── payment
│   ├── success
│
├── components
│   ├── OrderSummary.tsx
│
├── context
│   ├── CheckoutContext.tsx
│
├── public
│   └── products
│
├── package.json
└── README.md
```

---

## Running the Project Locally

### 1. Clone the repository

```
git clone https://github.com/srijita22/Ecoyaan.git
```

### 2. Install dependencies

```
npm install
```

### 3. Run the development server

```
npm run dev
```

### 4. Open the app

Visit:

```
http://localhost:3000
```

---

## Future Improvements

Possible enhancements for a production-ready system:

* Backend API integration for orders
* Payment gateway integration
* Authentication and user accounts
* Persistent cart storage
* Product database integration

---

## Author

Srijita Dutta

