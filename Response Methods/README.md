# Express.js Learning Journey - Routes & Response Methods

A comprehensive learning project demonstrating **routes, parameters, and response methods** in Express.js through 15 progressive tasks (Easy → Medium → Hard).

<a id="table-of-contents"></a>

## 📋 Table of Contents

* [Overview](#overview)
* [Project Structure](#project-structure)
* [Topics Covered](#topics-covered)
* [Getting Started](#getting-started)
* [Tasks Breakdown](#tasks-breakdown)
* [API Endpoints](#api-endpoints)
* [Testing](#testing)
* [Key Concepts](#key-concepts)
* [Learning Path](#learning-path)
* [Technologies Used](#technologies-used)
* [Available Scripts](#available-scripts)
* [Notes for Learners](#notes-for-learners)
* [What You'll Master](#what-youll-master)
* [Contributing](#contributing)
* [License](#license)
* [Author](#author)

---

<a id="overview"></a>

## 🎯 Overview

This project is a structured learning path for mastering Express.js fundamentals. It progresses from basic routes to complex API design with proper HTTP methods, status codes, headers management, and method chaining.

**What You'll Learn:**

* Route handling and HTTP methods (GET, POST, PUT, DELETE)
* Route parameters and query strings
* Response methods and status codes
* Header management and content-type handling
* Method chaining for cleaner code
* Input validation
* RESTful API design principles

---

<a id="project-structure"></a>

## 📁 Project Structure

```
NodeJs/
├── Response Methods/
│   ├── task1.js
│   ├── task2.js
│   ├── task3.js
│   ├── task4.js
│   ├── task5.js
│   ├── task6.js
│   ├── task7.js
│   ├── task8.js
│   └── files/
│       ├── file.txt
│       ├── file.csv
│       └── file.pdf
├── package.json
└── README.md
```

---

<a id="topics-covered"></a>

## 📚 Topics Covered

### Part 1: Routes, Parameters & HTTP Methods (Tasks 1-7)

| Task | Topic                               | Difficulty |
| ---- | ----------------------------------- | ---------- |
| 1    | Your First Route                    | 🟢 Easy    |
| 2    | HTTP Methods Explorer               | 🟢 Easy    |
| 3    | Route Parameters - User Profile     | 🟡 Medium  |
| 4    | Multiple Parameters & Query Strings | 🟡 Medium  |
| 5    | Blog Route System (CRUD)            | 🟡 Medium  |
| 6    | E-commerce API                      | 🔴 Hard    |
| 7    | Advanced Social Media Routes        | 🔴 Hard    |

### Part 2: Response Methods (Tasks 8-15)

| Task | Topic                               | Difficulty |
| ---- | ----------------------------------- | ---------- |
| 8    | res.send() vs res.json()            | 🟢 Easy    |
| 9    | Status Codes with res.status()      | 🟢 Easy    |
| 10   | res.sendStatus() Shorthand          | 🟢 Easy    |
| 11   | File Operations                     | 🟡 Medium  |
| 12   | Redirects and Headers               | 🟡 Medium  |
| 13   | Response Headers Management         | 🟡 Medium  |
| 14   | Complete API with Response Methods  | 🔴 Hard    |
| 15   | Method Chaining & Complex Responses | 🔴 Hard    |

---

<a id="getting-started"></a>

## 🚀 Getting Started

### Prerequisites

* Node.js (v14 or higher)
* npm or yarn
* Postman or Thunder Client

### Installation

```bash
git clone https://github.com/bracketdeveloper/NodeJs.git
cd "Response Methods"
npm install
```

### Running Tasks

```bash
node task1.js
node task2.js
```

---

<a id="tasks-breakdown"></a>

## 📋 Tasks Breakdown

### Part 1: Routes & Parameters

#### Task 1: Your First Route

```javascript
app.get('/', (req, res) => res.send("Welcome"))
app.get('/about', (req, res) => res.send("About page"))
```

#### Task 2: HTTP Methods

```javascript
app.get('/products', ...)
app.post('/products', ...)
app.delete('/products', ...)
```

#### Task 3: Route Parameters

```javascript
app.get('/user/:id', (req, res) => {
    res.send(`User ID: [${req.params.id}]`)
})
```

#### Task 4: Multiple Parameters & Query Strings

```javascript
app.get('/products/:category/:id', (req, res) => {
    // req.params.category
    // req.params.id
    // req.query.sort, req.query.price
})
```

#### Task 5: Blog CRUD System

#### Task 6: E-commerce API

#### Task 7: Social Media API

---

### Part 2: Response Methods

#### Task 8: res.send() vs res.json()

```javascript
res.send()
res.json()
```

#### Task 9: Status Codes

```javascript
res.status(200)
res.status(404)
```

#### Task 10: res.sendStatus()

```javascript
res.sendStatus(200)
```

#### Task 11: File Operations

```javascript
res.download()
res.sendFile()
```

#### Task 12: Redirects & Headers

```javascript
res.redirect()
res.set()
```

#### Task 13: Header Management

```javascript
res.type()
```

#### Task 14: Complete API

#### Task 15: Method Chaining

```javascript
res.status(200).json({})
```

---

<a id="api-endpoints"></a>

## 🔌 API Endpoints

### Task 5 - Blog API

GET /blog
GET /blog/:postId
POST /blog
PUT /blog/:postId
DELETE /blog/:postId

### Task 6 - E-commerce API

GET /store
GET /store/:productId
POST /store
PUT /store/:productId
DELETE /store/:productId

### Task 7 - Social Media API

GET /user/:userId/posts
POST /user/:userId/posts

---

<a id="testing"></a>

## 🧪 Testing

### Using curl

```bash
curl http://localhost:3000/blog
curl -X POST http://localhost:3000/blog
```

### Browser

http://localhost:3000/
http://localhost:3000/user/5

---

<a id="key-concepts"></a>

## 🔑 Key Concepts

### Route Parameters

```javascript
req.params.id
```

### Query Parameters

```javascript
req.query.name
```

---

<a id="learning-path"></a>

## 💡 Learning Path

* Start with basic routes
* Move to parameters
* Practice APIs
* Learn responses

---

<a id="technologies-used"></a>

## 📦 Technologies Used

* Node.js
* Express.js

---

<a id="available-scripts"></a>

## 🛠️ Available Scripts

```bash
node task1.js
node task2.js
```

---

<a id="notes-for-learners"></a>

## 📝 Notes for Learners

* Run one task at a time
* Test using Postman
* Validate inputs

---

<a id="what-youll-master"></a>

## 🎓 What You'll Master

* Express routing
* API design
* Response handling

---

<a id="contributing"></a>

## 🤝 Contributing

Feel free to improve the project.

---

<a id="license"></a>

## 📄 License

MIT

---

<a id="author"></a>

## ✨ Author

Mian Ammar Salar (Bracket Developer)

---
