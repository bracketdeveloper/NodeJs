/* Task 9: Complex Filtering & Styling
Create a GET route at /store that passes an array of products, 
where each product has a price and an isOnSale boolean.
Server Logic: Send a list of at least six products with varying prices 
and sale statuses.
Template Logic: Use a loop to display the items, but add logic so that 
only items under a certain price are shown. Additionally, apply an inline 
style or a CSS class (like color: red) only to items where isOnSale is true.
Goal: Master the combination of iteration, conditional filtering, and dynamic 
CSS class assignment in a single template. */
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/store", (req, res) => {
  const productList = [
    {
      id: 101,
      name: "Wireless Mouse",
      price: 25,
      inStock: true,
      isOnSale: false,
    },
    {
      id: 102,
      name: "Mechanical Keyboard",
      price: 150,
      inStock: true,
      isOnSale: true,
    },
    { id: 103, name: "HDMI Cable", price: 15, inStock: false, isOnSale: false },
    {
      id: 104,
      name: "Gaming Monitor",
      price: 300,
      inStock: true,
      isOnSale: true,
    },
    { id: 105, name: "USB-C Hub", price: 45, inStock: true, isOnSale: false },
    {
      id: 106,
      name: "Laptop Stand",
      price: 60,
      inStock: false,
      isOnSale: true,
    },
  ];
  res.render('store1',{products:productList})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
