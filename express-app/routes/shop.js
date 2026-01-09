import express from 'express';

// Create a router object to define shop-related routes
const router = express.Router();

// Define a route handler for the root URL ('/') (Default route)
// This will respond with "Hello, World!" when the root URL is accessed
//Instead of app.use, app.get matches exactly the root URL 
// If we had used app.use here, it would match all routes starting with '/'
router.get('/', (req, res, next) => {  
  // Send a simple HTML response to the client
  res.send('<h1>Hello, World!</h1>');
});

export default router;