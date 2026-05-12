/* Task 7: Nested Data Structures
Create a GET route at /menu that passes a "Category" object which 
contains an array of items (e.g., a "Pizza" category containing an 
array of specific pizza names and prices).
Server Logic: Create a complex object where one property is an array of objects.
Template Logic: Access the main object properties first, then run a 
loop on the nested array property to display the sub-items.
Goal: Practice navigating "deep" data where you have to move through 
multiple levels of object properties and arrays simultaneously. */
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/menu", (req, res) => {
  const store = {
    storeName: "Tech Haven",
    location: "Downtown",
    categories: [
      {
        name: "Laptops",
        items: [
          { model: "MacBook Air", price: 999, stock: 5 },
          { model: "Dell XPS", price: 1200, stock: 2 },
          { model: "Lenovo ThinkPad", price: 850, stock: 10 },
        ],
      },
      {
        name: "Accessories",
        items: [
          { model: "Magic Mouse", price: 79, stock: 20 },
          { model: "Mechanical Keyboard", price: 150, stock: 0 },
          { model: "USB-C Hub", price: 45, stock: 15 },
        ],
      },
    ],
  };
  res.render('store', {store})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
