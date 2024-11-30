const express = require('express');
const app = express();
const port = 3000;

let products = [
  { id: 1, name: 'Product A', description: 'Description of Product A', price: 100 },
  { id: 2, name: 'Product B', description: 'Description of Product B', price: 200 },
];

app.use(express.json());

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !description || !price) {
    return res.status(400).json({ message: 'Name, description, and price are required' });
  }

  const newProduct = {
    id: products.length + 1,  
    name,
    description,
    price,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);  
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
