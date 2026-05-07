# Express.js Learning Journey - Routes and Response Methods

A structured project that teaches routes, parameters, and response methods in Express.js through 15 tasks from basic to advanced.

## Table of Contents

* [Overview](#overview)
* [Project Structure](#project-structure)
* [Topics Covered](#topics-covered)
* [Getting Started](#getting-started)
* [Tasks Breakdown](#tasks-breakdown)
* [API Endpoints](#api-endpoints)
* [Testing](#testing)
* [Key Concepts](#key-concepts)
* [Technologies Used](#technologies-used)
* [Learning Path](#learning-path)
* [Available Scripts](#available-scripts)
* [Notes for Learners](#notes-for-learners)
* [What You Will Master](#what-you-will-master)
* [Contributing](#contributing)
* [License](#license)
* [Author](#author)

## Overview

This project helps you learn Express.js step by step.

You will practice:

* Route handling and HTTP methods
* Route parameters and query strings
* Response methods and status codes
* Headers and content types
* Method chaining
* Input validation
* REST API structure

## Project Structure

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

## Topics Covered

### Part 1: Routes, Parameters and HTTP Methods

| Task | Topic                         |
| ---- | ----------------------------- |
| 1    | First Route                   |
| 2    | HTTP Methods                  |
| 3    | Route Parameters              |
| 4    | Multiple Parameters and Query |
| 5    | Blog CRUD                     |
| 6    | E-commerce API                |
| 7    | Social Media API              |

### Part 2: Response Methods

| Task | Topic                 |
| ---- | --------------------- |
| 8    | send vs json          |
| 9    | status codes          |
| 10   | sendStatus            |
| 11   | file handling         |
| 12   | redirects and headers |
| 13   | headers control       |
| 14   | full API              |
| 15   | method chaining       |

## Getting Started

### Prerequisites

* Node.js
* npm

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

## Tasks Breakdown

### Task 1

```js
app.get('/', (req, res) => res.send("Welcome"))
```

### Task 2

```js
app.get('/products')
app.post('/products')
app.delete('/products')
```

### Task 3

```js
app.get('/user/:id', (req, res) => {
  res.send(req.params.id)
})
```

### Task 4

```js
app.get('/products/:category/:id', (req, res) => {
  req.params
  req.query
})
```

### Task 5

CRUD routes for blog posts.

### Task 6

Product, review, and order routes.

### Task 7

Nested routes with pagination.

### Task 8

```js
res.send()
res.json()
```

### Task 9

```js
res.status(200)
res.status(404)
```

### Task 10

```js
res.sendStatus(200)
```

### Task 11

```js
res.download()
res.sendFile()
```

### Task 12

```js
res.redirect()
res.set()
```

### Task 13

```js
res.type()
```

### Task 14

Full API with proper responses.

### Task 15

```js
res.status(200).json({})
```

## API Endpoints

### Blog API

GET /blog
GET /blog/:postId
POST /blog
PUT /blog/:postId
DELETE /blog/:postId

### Store API

GET /store
GET /store/:productId
POST /store
PUT /store/:productId
DELETE /store/:productId

### Social API

GET /user/:userId/posts
POST /user/:userId/posts

## Testing

### Using curl

```bash
curl http://localhost:3000/blog
curl -X POST http://localhost:3000/blog
```

### Browser

http://localhost:3000/
http://localhost:3000/user/5

## Key Concepts

### Route Params

```js
req.params.id
```

### Query Params

```js
req.query.name
```

### HTTP Methods

GET
POST
PUT
DELETE

### Status Codes

200
201
404
500

### Response Methods

```js
res.send()
res.json()
res.status()
res.redirect()
```

## Technologies Used

* Node.js
* Express.js

## Learning Path

* Start with basic routes
* Move to parameters
* Practice APIs
* Learn response handling

## Available Scripts

```bash
node task1.js
node task2.js
```

## Notes for Learners

* Run one task at a time
* Test using Postman or browser
* Validate inputs
* Read responses carefully

## What You Will Master

* Express routing
* API design
* Response handling
* Clean structure

## Contributing

You can add more tasks or improve code.

## License

MIT

## Author

Mian Ammar Salar
Bracket Developer
