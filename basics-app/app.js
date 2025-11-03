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
  console.log(req);
  console.log('Request URL:', req.url);
  console.log('Request Method:', req.method);
  console.log('Request Headers:', req.headers);

  if (req.url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  // Set response status and headers 
  // Write HTML content to the response
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Hello, World!</title></head>');
  res.write('<body>');
  res.write('<h1>Hello, World!</h1>');
  res.write('</body>');
  res.write('</html>');

  // End the response
  res.end();
});

// Server listens on port 3000
// You can access it by navigating to http://localhost:3000/ in your web browser.
// Keep the server running and listening for requests.
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

// <_______