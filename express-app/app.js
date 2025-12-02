// import http from 'http';
import express from 'express';

const app = express();

// Middleware to log request details
// Logs the URL, method, and headers of each incoming request
// Parameters:
// req - The incoming request object
// res - The outgoing response object
// next - A callback function to pass control to the next middleware
app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  console.log('Request Method:', req.method);
  console.log('Request Headers:', req.headers);

  // Call the next middleware in the stack
  // If we had sent a response here, we wouldn't reach the next middleware
  next();
});

//You call next() to pass control to the next middleware
// Or you can send a response if you want to end the request-response cycle
app.use((req, res, next) => {
  //This funtions sends a simple response to the client"
  res.send("<h1>Hello, World!</h1>");
});

// const server = http.createServer(app);

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });

// Start the Express server on port 3000
// It listens for incoming requests and uses the defined middleware to handle them
// No need to create an HTTP server manually with http.createServer
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});