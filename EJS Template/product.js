const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/product', (req, res) => {
    const productData = {
    name: "Alpha-X Digital Camera",
    price: 1299,
    lowStock: true,
    specs: ["4K Video", "20MP Sensor", "Waterproof"],
    related: [
        { name: "Tripod", price: 50 },
        { name: "Lens Cap", price: 10 },
        { name: "SD Card", price: 30 }
    ]
};
  res.render('product',{product:productData})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});