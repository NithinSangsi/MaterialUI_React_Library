<p align="center">
  <img src="https://github.com/NithinSangsi/MaterialUI_React_Library/blob/932f00adab8d27ece263e480e4bd90f47c8efb66/MUI_logo.png" alt="MUI Logo" width="250" height="250"/>
</p>

<h1 align="center">
   What is MaterialUI
</h1>


Material UI (MUI) is a popular React component library that implements Google’s Material Design. It provides pre-built UI components like buttons, cards, navigation bars, grids, and forms to help developers build modern, responsive, and consistent interfaces quickly.


# 🍲 Recipe Finder App (React + Material UI)

## 📌 Project Overview

This project is a **Recipe Finder Web Application** built using **ReactJS and Material UI (MUI)**.
The application fetches recipe data from a **public recipe API** and displays recipes in a clean **Material Design UI**.

Users can view recipes in card format and explore details such as:

* Recipe name
* Ingredients
* Cooking instructions

Material UI components are used to create a **responsive and visually appealing interface**.

---

# 🚀 Technologies Used

* **React.js** – Frontend framework
* **Material UI (MUI)** – UI component library
* **Vite** – Fast development build tool
* **JavaScript (ES6)**
* **CSS**
* **Recipe API** – Used to fetch recipe data

---

# 📂 Project Folder Structure

```
MUI/
│
├── node_modules/
│
├── public/
│   ├── Thumbs_up.png
│   └── vite.svg
│
├── src/
│   │
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── RecipeCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Registeration.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

# 🧩 Application Features

✔ Displays recipes using **Material UI Cards**
✔ Shows **Recipe Name**
✔ Displays **Ingredients list**
✔ Displays **Cooking Instructions**
✔ Clean and responsive **Material Design layout**
✔ Modular component-based architecture

---

# 🍽 Recipe Display

Each recipe is displayed using a **Material UI Card component**.

The card contains:

* **Recipe Name**
* **Ingredients**
* **Cooking Instructions**

Recipe data is fetched from an **external Recipe API** available on the internet.

---

# ⚙️ Installation & Setup

Follow the steps below to run the project locally.

# ⚙️ Installation Setup

Before installing **Material UI**, make sure your project already has **React** installed because Material UI depends on **React and ReactDOM**.

---

## 1️⃣ Install React and ReactDOM

If you are creating a new React project, run:

```bash
npx create-vite@latest my-app
```

Then move into the project folder:

```bash
cd my-app
```

Install the required dependencies:

```bash
npm install
```

React and ReactDOM will be installed automatically.

---

## 2️⃣ Install Material UI Dependencies

Material UI requires additional styling dependencies such as **Emotion**.

Run the following command:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

---

## 3️⃣ (Optional) Install Material UI Icons

If you want to use Material UI icons:

```bash
npm install @mui/icons-material
```

---

After installing these dependencies, you can start using **Material UI components** like:

* Buttons
* Cards
* AppBar
* Grid
* Typography
* Icons


### 1️⃣ Clone the Repository

```bash
git clone https://github.com/NithinSangsi/MaterialUI_React_Library.git
```

---

### 2️⃣ Navigate to Project Folder

```bash
cd MUI
```

---

### 3️⃣ Install Dependencies

```bash
npm install
```

---

### 4️⃣ Run the Development Server

```bash
npm run dev
```

---

### 5️⃣ Open in Browser

```
http://localhost:5173
```

---

# 📦 Key Components

### Navbar.jsx

Handles the **navigation bar** using Material UI components.

### RecipeCard.jsx

Displays individual recipes in **Material UI Card layout**.

### Home.jsx

Fetches recipes from the API and renders **RecipeCard components**.

### Login.jsx

Handles user login UI.

### Registeration.jsx

Handles user registration UI.

---

# 🎨 UI Framework

This project uses **Material UI (MUI)** to implement Google's **Material Design system**, providing:

* Consistent UI components
* Responsive layouts
* Pre-styled elements
* Faster development

Official Documentation:
https://mui.com/

---

# 📌 Future Improvements

* Add **recipe search functionality**
* Add **recipe filtering**
* Add **favorite recipes**
* Improve authentication
* Add recipe images

---


# ⭐ As of NOW

Recipe data is fetched from an **online recipe API** used for demonstration and Learning purposes.

---
