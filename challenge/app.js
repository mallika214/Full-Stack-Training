/*const express = require('express');
const bodyParser = require('body-parser');
const app = express();
 
const productRoutes = require('./routes/productRoutes');
//const authRoutes = require('./routes/authRoutes');
const path = require('path');
const authRoutes = require(path.resolve(__dirname, 'routes', 'authRoutes'));

 
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
 
// View Engine
app.set('view engine', 'ejs');
 
// Routes
app.use('/products', productRoutes);
app.use('/auth', authRoutes);
 
// Root route
app.get('/', (req, res) => {
res.sendFile(__dirname + '/public/index.html');
});
 
// Start server
app.listen(3000, () => {
console.log('Server running on http://localhost:3000');
});*/

const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like HTML and CSS)
app.use(express.static('public'));

// Use routes for login and product registration
app.use('/', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
