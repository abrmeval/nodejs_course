import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import rootDir from '../util/path.js';
import { products } from './admin.js';

// Define __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// // Get the directory name of the current module file
// const __dirname = path.dirname(__filename);

// Create a router object to define shop-related routes
const router = express.Router();

// Define a route handler for the root URL ('/') (Default route)
// This will respond with "Hello, World!" when the root URL is accessed
//Instead of app.use, app.get matches exactly the root URL 
// If we had used app.use here, it would match all routes starting with '/'
router.get('/', (req, res, next) => {
    // Send a simple HTML response to the client
    // res.send('<h1>Hello, World!</h1>');

    console.log(products);

    // Send the shop.html file as the response
    // We set params to go up two levels to reach the views folder
    // Then we specify the shop.html file
    // This works in any operating system because we use path.join to construct the path
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    const productsList = products;

    // Render the shop.pug template
    // We simply call res.render and provide the name of the template file without the extension
    res.render('shop', { products: productsList, pageTitle: 'Shop', path: '/' });
});

export default router;