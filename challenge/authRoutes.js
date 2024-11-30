

const express = require('express');
const router = express.Router();

// Mock users with roles
const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
];

// In-memory database for products
let products = [];

// Login route
router.post('/login', (req, res) => {
    const { username, password, role } = req.body;

    // Find matching user by username, password, and role
    const user = users.find(u => u.username === username && u.password === password && u.role === role);

    if (user) {
        if (user.role === 'admin') {
            res.redirect('/admin');
        } else {
            res.redirect('/user');
        }
    } else {
        res.send('Invalid credentials or role');
    }
});

// Admin dashboard to register products and view products
router.get('/admin', (req, res) => {
    res.send(`
        <h1>Admin Dashboard</h1>
        <form action="/admin/register" method="POST">
            <h3>Register Product</h3>
            <label>Product Name:</label><br>
            <input type="text" name="productName" required><br><br>

            <label>Product ID:</label><br>
            <input type="text" name="productID" required><br><br>

            <label>Price:</label><br>
            <input type="number" name="price" required><br><br>

            <label>Category:</label><br>
            <input type="text" name="category" required><br><br>

            <label>Manufacturing Date:</label><br>
            <input type="date" name="manufacturingDate" required><br><br>

            <label>Expiration Date:</label><br>
            <input type="date" name="expirationDate" required><br><br>

            <button type="submit">Register Product</button>
        </form>

        <h3>Product List</h3>
        <ul>
            ${products.map(product => `
                <li>${product.productName} - ${product.category} - $${product.price}</li>
            `).join('')}
        </ul>
    `);
});

// Route to handle product registration
router.post('/admin/register', (req, res) => {
    const { productName, productID, price, category, manufacturingDate, expirationDate } = req.body;

    const newProduct = {
        productName,
        productID,
        price,
        category,
        manufacturingDate,
        expirationDate
    };

    products.push(newProduct);
    res.redirect('/admin');
});

// User dashboard to search and view products
router.get('/user', (req, res) => {
    res.send(`
        <h1>User Dashboard</h1>
        <h3>Search Products</h3>
        <form action="/user/search" method="GET">
            <label>Search by Name:</label><br>
            <input type="text" name="name"><br><br>

            <label>Search by Category:</label><br>
            <input type="text" name="category"><br><br>

            <button type="submit">Search</button>
        </form>

        <h3>Product List</h3>
        <ul>
            ${products.map(product => `
                <li>${product.productName} - ${product.category} - $${product.price}</li>
            `).join('')}
        </ul>
    `);
});

// Route to handle product search
router.get('/user/search', (req, res) => {
    const { name, category } = req.query;

    const filteredProducts = products.filter(product => 
        (name && product.productName.toLowerCase().includes(name.toLowerCase())) || 
        (category && product.category.toLowerCase().includes(category.toLowerCase()))
    );

    res.send(`
        <h1>Search Results</h1>
        <ul>
            ${filteredProducts.map(product => `
                <li>${product.productName} - ${product.category} - $${product.price}</li>
            `).join('')}
        </ul>
    `);
});

module.exports = router;

