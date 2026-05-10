# 🚀 Node.js Request Object Practice

Understand how HTTP requests work using Express.

You work directly with request data and learn how servers read client input.

---

## 📌 Table of Contents

* [🔧 Setup Instructions](#setup-instructions)
* [📁 Project Structure](#project-structure)
* [📚 Tasks Overview](#tasks-overview)
* [🧠 Key Concepts](#key-concepts)
* [🧪 Example Requests](#example-requests)
* [🎯 What You Gain](#what-you-gain)
* [🚀 Next Steps](#next-steps)

---

<a id="setup-instructions"></a>

## 🔧 Setup Instructions

Follow these steps:

* Clone the repository
* Move into the project folder
* Install dependencies

```
npm install
```

Run any task:

```
node "Request Props and Methods/task1.js"
```

---

<a id="project-structure"></a>

## 📁 Project Structure

```
NodeJs/
├── Request Props and Methods/
│   ├── task1.js
│   ├── task2.js
│   ├── task3.js
│   ├── task4.js
│   ├── task5.js
│   ├── task6.js
│   ├── task7.js
│   ├── task8.js
├── package.json
└── README.md
```

---

<a id="tasks-overview"></a>

## 📚 Tasks Overview

### 🟢 Task 1: Request Information

**Route:** `GET /info`

You extract:

* Method
* Protocol
* Hostname
* Original URL

---

### 🟢 Task 2: Client Details

**Route:** `GET /client-details`

You extract:

* Client IP
* Secure connection status

---

### 🟡 Task 3: Route Parameters

**Route:** `GET /users/:userId/posts/:postId`

You extract:

* userId
* postId

You check:

* Are values numeric?

---

### 🟡 Task 4: Query Parameters

**Route:** `GET /search`

You extract:

* search
* page (default: 1)
* limit (default: 10)

---

### 🟠 Task 5: Request Body

**Route:** `POST /create-user`

You extract:

* name
* email
* age

You validate:

* All fields exist?

---

### 🟠 Task 6: Headers

**Route:** `GET /headers`

You extract:

* User-Agent
* Content-Type
* X-API-Key
* Accept-Language

---

### 🔵 Task 7: Content Negotiation

**Route:** `GET /data`

You check:

* JSON support
* HTML support
* Text support

You respond based on client preference.

---

### 🔴 Task 8: Complete Request Analysis

**Route:** `POST /analyze-request/:action`

You combine everything:

* Params
* Query
* Headers
* Body
* IP
* Security
* Content type

You generate a full report.

---

<a id="key-concepts"></a>

## 🧠 Key Concepts

You use:

* `req.method`
* `req.protocol`
* `req.hostname`
* `req.originalUrl`
* `req.ip`
* `req.secure`
* `req.params`
* `req.query`
* `req.body`
* `req.headers`
* `req.get()`
* `req.accepts()`

---

<a id="example-requests"></a>

## 🧪 Example Requests

Use:

* Postman
* curl
* browser

Example:

```
GET /search?search=nodejs&page=2&limit=20
```

```
POST /create-user
Content-Type: application/json
```

---

<a id="what-you-gain"></a>

## 🎯 What You Gain

* Understand request flow
* Work with real HTTP data
* Debug APIs easily
* Build backend confidence

---

<a id="next-steps"></a>

## 🚀 Next Steps

---

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
