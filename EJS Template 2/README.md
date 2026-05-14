---

# 🚀 Express + EJS Learning Path (Tasks 1–10)

Learn how to handle forms, static files, and reusable templates step by step.

You move from simple POST requests to a complete asset-driven UI.

---

## 📌 Table of Contents

* [🔧 Setup Instructions](#setup-instructions)
* [📁 Project Structure](#project-structure)
* [📚 Tasks Overview](#tasks-overview)
* [🧠 Key Concepts](#key-concepts)
* [🏆 Capstone Project](#capstone-project)
* [🎯 What You Learn](#what-you-learn)
* [🤝 Contributing](#contributing)
* [📄 License](#license)
* [🔗 Useful Links](#useful-links)
* [✨ Author](#author)

---

<a id="setup-instructions"></a>
## 🔧 Setup Instructions

Follow these steps:

* Clone the repository  
* Install dependencies  
* Start the server  

```bash
npm install

Run the project:

node task.js

Open in browser:

http://localhost:3000/route-name

<a id="project-structure"></a>

📁 Project Structure
Express-EJS/
├── public/
│   ├── css/
│   │      ├──  styles.css
│   │      ├──  style2.css
│   ├── js/
│   │      ├── script.js/
│   └── images/
│   │      ├──  img1.jpg
│   │      ├──  img2.jpg
├── views/
│   ├── partials/
│   │      ├──  header.ejs
│   │      ├──  footer.ejs
│   ├── form.ejs
│   ├── login.ejs
│   ├── feedback.ejs
│   ├── profile.ejs
│   ├── register.ejs
│   ├── home.ejs
│   ├── services.ejs
│   ├── styled-form.ejs
│   ├── gallery.ejs
│   └── assets-demo.ejs
├── task1.js
├── task2.js
├── task3.js
├── task4.js
├── task5.js
├── task6.js
├── task7.js
├── task8.js
├── task9.js
├── task10.js
├── package.json
└── package-lock.json

<a id="tasks-overview"></a>

📚 Tasks Overview
🟢 Level 1: Form Basics

Task 1: Basic Form Submission

Handle POST request
Read req.body.username
Display submitted data

Task 2: Multiple Inputs

Handle email and password
Send multiple values to EJS

Task 3: Feedback Form

Use textarea input
Show confirmation message
🟡 Level 2: Structured Data

Task 4: Profile Form

Handle name and city
Display structured data

Task 5: URL Encoded Middleware

Use express.urlencoded
Parse form data correctly
🟠 Level 3: EJS Partials

Task 6: Header Partial

Create reusable header
Include in multiple pages

Task 7: Footer Partial

Create footer component
Display dynamic year
🔵 Level 4: Static Files

Task 8: Serve CSS

Load CSS from public folder
Style your pages

Task 9: Serve Images

Display images dynamically
Use loop in EJS
🔴 Level 5: Full Asset Integration

Task 10: Static Assets Demo

Use CSS, JS, images together
Add button interaction with JS

<a id="key-concepts"></a>

🧠 Key Concepts
POST request handling
req.body usage
express.urlencoded
EJS templating
Partials (header/footer)
Static files handling
express.static
Dynamic rendering

<a id="capstone-project"></a>

🏆 Capstone Project
📋 Mini Dashboard App

You build a small dashboard.

Features:

Add items using form
Store data in array
Display items dynamically
Use header and footer
Apply CSS and JS

<a id="what-you-learn"></a>

🎯 What You Learn
Handle form submissions
Connect backend to frontend
Build reusable layouts
Serve static assets
Debug path issues
Build structured EJS apps

<a id="contributing"></a>

🤝 Contributing
Fork repository
Improve tasks
Submit pull request

<a id="license"></a>

📄 License

MIT

<a id="useful-links"></a>

🔗 Useful Links
EJS Docs: https://ejs.co
Express Docs: https://expressjs.com
Node.js: https://nodejs.org

<a id="author"></a>

✨ Author

Mian Ammar Salar (Bracket Developer)