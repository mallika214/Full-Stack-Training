


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
