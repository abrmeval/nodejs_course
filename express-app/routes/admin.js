import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

import rootDir from '../util/path.js';

// // Define __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// // Get the directory name of the current module file
// const __dirname = path.dirname(__filename);

// Create a router object to define admin-related routes
const router = express.Router();

// Define a route handler for the '/add-product' URL
//We use app.get to specifically handle GET requests to this route
// /admin/add-product because in app.js we use app.use('/admin', adminRoutes);
router.get('/add-product', (req, res, next) => {
    // Send a simple HTML response to the client
    //   res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');

    // Send the add-product.html file as the response
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// Define a route handler for the '/product' URL to handle POST requests
//We use app.post to specifically handle POST requests to this route
// /admin/add-product because in app.js we use app.use('/admin', adminRoutes);
router.post('/add-product', (req, res, next) => {
    // Handle the form submission from the '/add-product' route
    console.log(req.body); // Log the submitted form data (requires body-parser middleware to work)
    res.redirect('/'); // Redirect the user back to the root URL after form submission  
});

export default router;
