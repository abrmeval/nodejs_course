// Some Core Modules
// http module -> handles HTTP requests and responses
// https module -> handles HTTPS requests and responses
// fs module -> provides file system-related functionality
// path module -> provides utilities for working with file and directory paths
// os module -> provides operating system-related utility methods

import http from 'http';

// Create an HTTP server that responds with "Hello, World!"
// This is a basic example of using the http module to create a server.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Server listens on port 3000
// You can access it by navigating to http://localhost:3000/ in your web browser.
// Keep the server running and listening for requests.
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});