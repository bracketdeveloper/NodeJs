# Express.js Learning Journey - Routes & Response Methods

A comprehensive learning project demonstrating **routes, parameters, and response methods** in Express.js through 15 progressive tasks (Easy → Medium → Hard).

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Topics Covered](#topics-covered)
- [Getting Started](#getting-started)
- [Tasks Breakdown](#tasks-breakdown)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Key Concepts](#key-concepts)
- [Technologies Used](#technologies-used)

## 🎯 Overview

This project is a structured learning path for mastering Express.js fundamentals. It progresses from basic routes to complex API design with proper HTTP methods, status codes, headers management, and method chaining.

**What You'll Learn:**
- Route handling and HTTP methods (GET, POST, PUT, DELETE)
- Route parameters and query strings
- Response methods and status codes
- Header management and content-type handling
- Method chaining for cleaner code
- Input validation
- RESTful API design principles

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
## 📚 Topics Covered

### Part 1: Routes, Parameters & HTTP Methods (Tasks 1-7)

| Task | Topic | Difficulty |
|------|-------|-----------|
| 1 | Your First Route | 🟢 Easy |
| 2 | HTTP Methods Explorer | 🟢 Easy |
| 3 | Route Parameters - User Profile | 🟡 Medium |
| 4 | Multiple Parameters & Query Strings | 🟡 Medium |
| 5 | Blog Route System (CRUD) | 🟡 Medium |
| 6 | E-commerce API | 🔴 Hard |
| 7 | Advanced Social Media Routes | 🔴 Hard |

### Part 2: Response Methods (Tasks 8-15)

| Task | Topic | Difficulty |
|------|-------|-----------|
| 8 | res.send() vs res.json() | 🟢 Easy |
| 9 | Status Codes with res.status() | 🟢 Easy |
| 10 | res.sendStatus() Shorthand | 🟢 Easy |
| 11 | File Operations | 🟡 Medium |
| 12 | Redirects and Headers | 🟡 Medium |
| 13 | Response Headers Management | 🟡 Medium |
| 14 | Complete API with Response Methods | 🔴 Hard |
| 15 | Method Chaining & Complex Responses | 🔴 Hard |

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Postman or Thunder Client (for testing)

### Installation

```bash
# Clone the repository
git clone https://github.com/bracketdeveloper/NodeJs.git
cd Response Method

# Install dependencies
npm install

```

### Running Tasks

Each task runs on `http://localhost:3000`

```bash
# Task 1
node task1.js

# Task 2
node task2.js

# And so on...
```

## 📋 Tasks Breakdown

### Part 1: Routes & Parameters

#### Task 1: Your First Route
**Concepts:** Basic routes, request/response
```javascript
app.get('/', (req, res) => res.send("Welcome"))
app.get('/about', (req, res) => res.send("About page"))
```

#### Task 2: HTTP Methods
**Concepts:** GET, POST, DELETE methods
```javascript
app.get('/products', ...)    // Read
app.post('/products', ...)   // Create
app.delete('/products', ...) // Delete
```

#### Task 3: Route Parameters
**Concepts:** Dynamic URL parameters
```javascript
app.get('/user/:id', (req, res) => {
    res.send(`User ID: [${req.params.id}]`)
})
```

#### Task 4: Multiple Parameters & Query Strings
**Concepts:** Multiple params, query parameters
```javascript
app.get('/products/:category/:id', (req, res) => {
    // req.params.category
    // req.params.id
    // req.query.sort, req.query.price
})
```

#### Task 5: Blog CRUD System
**Concepts:** Full CRUD operations, query parameters
```javascript
app.get('/blog')           // List all
app.get('/blog/:postId')   // Get one
app.post('/blog')          // Create
app.put('/blog/:postId')   // Update
app.delete('/blog/:postId') // Delete
```

#### Task 6: E-commerce API
**Concepts:** Complex routing, nested routes, validation
- Product management (GET, POST, PUT, DELETE)
- Reviews (GET, POST)
- Orders (GET, POST)
- Multiple query parameters with validation

#### Task 7: Social Media API
**Concepts:** Advanced nested routes, pagination, validation
- Posts with comments
- Nested comment routes
- Pagination (sort, limit, skip)
- Numeric validation for all parameters

### Part 2: Response Methods

#### Task 8: res.send() vs res.json()
```javascript
app.get('/text', (req, res) => res.send("String"))
app.get('/data', (req, res) => res.json({data: "object"}))
app.get('/html', (req, res) => res.send("<h1>HTML</h1>"))
```

#### Task 9: Status Codes
```javascript
app.get('/products/:id', (req, res) => {
    res.status(200).send("Found")     // Success
    res.status(404).send("Not found") // Not found
    res.status(500).send("Error")     // Server error
})
```

#### Task 10: res.sendStatus()
```javascript
app.get('/health', (req, res) => res.sendStatus(200))
app.post('/create', (req, res) => res.sendStatus(201))
app.get('/notfound', (req, res) => res.sendStatus(404))
```

#### Task 11: File Operations
```javascript
app.get('/download', (req, res) => {
    res.download('./files/file.txt')
})
app.get('/view', (req, res) => {
    res.sendFile('./files/image.jpg')
})
```

#### Task 12: Redirects & Headers
```javascript
app.get('/old', (req, res) => res.redirect(302, '/new'))
app.get('/api', (req, res) => {
    res.set('X-Custom-Header', 'value')
    res.json({data: "test"})
})
```

#### Task 13: Header Management
```javascript
app.get('/json', (req, res) => {
    res.type('application/json').json({message: "JSON"})
})
app.get('/html', (req, res) => {
    res.type('text/html').send("<h1>HTML</h1>")
})
```

#### Task 14: Complete API
Full product API with all response methods:
- Multiple status codes (200, 201, 204, 404)
- JSON responses
- File downloads
- Proper headers and content types

#### Task 15: Method Chaining
```javascript
app.get('/', (req, res) => {
    res.status(200).type('application/json').json(userData)
})
app.post('/api/create', (req, res) => {
    res.status(201).location('/api/item/1').json(newItem)
})
```

## 🔌 API Endpoints

### Task 5 - Blog API
    GET    /blog                   - Get all posts
    GET    /blog/:postId           - Get specific post
    POST   /blog                   - Create post
    PUT    /blog/:postId           - Update post
    DELETE /blog/:postId           - Delete post
    GET    /blog?author=x&year=y   - Filter posts

### Task 6 - E-commerce API
    GET    /store                  - List products
GET    /store/:productId       - Get product
POST   /store                  - Create product
PUT    /store/:productId       - Update product
DELETE /store/:productId       - Delete product
GET    /store/:productId/reviews       - Get reviews
POST   /store/:productId/reviews       - Add review
GET    /orders/:userId         - Get orders
POST   /orders/:userId/checkout - Checkout

### Task 7 - Social Media API
GET    /user/:userId/posts                - User posts
GET    /user/:userId/posts/:postId        - Specific post
POST   /user/:userId/posts                - Create post
PUT    /user/:userId/posts/:postId        - Update post
DELETE /user/:userId/posts/:postId        - Delete post
GET    /user/:userId/posts/:postId/comments           - Comments
POST   /user/:userId/posts/:postId/comments           - Add comment
DELETE /user/:userId/posts/:postId/comments/:commentId - Delete comment
GET    /user/:userId/posts?sort=date&limit=10 - Pagination

### Task 14 - Product API
GET    /api/health            - Health check
GET    /api/products          - List products
GET    /api/products/:id      - Get product
POST   /api/products          - Create product
PUT    /api/products/:id      - Update product
DELETE /api/products/:id      - Delete product
GET    /api/products/export/csv - Download CSV

## 🧪 Testing

### Using Postman

1. **Import requests:**
   - Create a new collection
   - Add requests for each endpoint

2. **Test GET requests:**
GET http://localhost:3000/blog
GET http://localhost:3000/blog/5
GET http://localhost:3000/blog?author=john&year=2024

3. **Test POST requests:**
   - Select POST method
   - Add body (raw JSON)
   - Send request

4. **Check headers:**
   - View "Headers" tab in response
   - Verify custom headers set

### Using cURL

```bash
# GET request
curl http://localhost:3000/blog

# GET with parameters
curl "http://localhost:3000/blog?author=john&year=2024"

# POST request
curl -X POST http://localhost:3000/blog \
  -H "Content-Type: application/json" \
  -d '{"title":"New Post"}'

# DELETE request
curl -X DELETE http://localhost:3000/blog/5

# Check status code
curl -i http://localhost:3000/api/health
```

### Browser Testing
http://localhost:3000/              - GET
http://localhost:3000/about         - GET
http://localhost:3000/user/5        - GET with param
http://localhost:3000/products?sort=price - GET with query

## 🔑 Key Concepts

### Route Parameters
Dynamic parts of URL:
```javascript
app.get('/user/:userId', (req, res) => {
    const id = req.params.userId // Access via req.params
})
```

### Query Parameters
Additional data in URL string:
```javascript
// URL: /products?category=electronics&price=500
app.get('/products', (req, res) => {
    const category = req.query.category  // "electronics"
    const price = req.query.price        // "500"
})
```

### HTTP Methods (CRUD)
- **GET** - Retrieve data
- **POST** - Create new data
- **PUT** - Update existing data
- **DELETE** - Remove data

### Status Codes
- **200** - OK (success)
- **201** - Created
- **204** - No Content
- **400** - Bad Request
- **404** - Not Found
- **500** - Server Error

### Response Methods
```javascript
res.send(data)           // Send text/HTML/JSON
res.json(object)         // Send JSON
res.status(code)         // Set status code
res.sendStatus(code)     // Send only status
res.download(path)       // Download file
res.sendFile(path)       // Display file
res.redirect(path)       // Redirect
res.set(header, value)   // Set header
res.type(mimeType)       // Set content-type
```

### Method Chaining
```javascript
res.status(201)
   .type('application/json')
   .json({id: 1, name: "Item"})
```

## 💡 Learning Path

**Recommended order:**
1. Start with Task 1-3 (understand basic routing)
2. Move to Task 4-5 (parameters and query strings)
3. Complete Task 6-7 (complex APIs and validation)
4. Learn Task 8-10 (response methods basics)
5. Progress to Task 11-13 (advanced response methods)
6. Finish with Task 14-15 (complete APIs and chaining)

**Time estimate:** 2-3 hours for beginners

## 📦 Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **path** - File path utilities (built-in)

## 🛠️ Available Scripts

```bash
# Run specific task
node task1.js
node task2.js
# ... etc

# Test with curl
curl http://localhost:3000/

# Kill server
Ctrl + C
```

## 📝 Notes for Learners

- Each task is independent - can be run separately
- Start with easy tasks before moving to hard
- Use Postman to test all HTTP methods
- Check the console for debug information
- Create sample files in `/files` folder for file operations
- Validate all inputs before processing
- Use appropriate status codes for different scenarios

## 🎓 What You'll Master

After completing all tasks, you'll understand:
- ✅ How Express routing works
- ✅ Route and query parameters
- ✅ All HTTP methods and CRUD operations
- ✅ Response methods and status codes
- ✅ Header management
- ✅ File operations
- ✅ Redirects and location headers
- ✅ Input validation
- ✅ Method chaining
- ✅ RESTful API design


## 🤝 Contributing

Feel free to add more tasks or improve existing ones!

## 📄 License

This project is open source and available under the MIT License.

## ✨ Author
Mian Ammar Salar (Bracket Developer)

Created as a learning journey for Express.js fundamentals.

---

**Happy Learning! 🚀**

If you found this helpful, please star the repository!

