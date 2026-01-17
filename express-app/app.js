// import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import {router as adminRoutes, products} from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import { fileURLToPath } from 'url';

const app = express();

//app.set() to save settings in express to modify its behavior
// Also you can use to save any custom setting you want to share
// A templating engine allows us to generate HTML dynamically 
// by embedding JavaScript code within our HTML files
// We can then render these templates and send the resulting HTML to the client
app.set('view engine', 'pug'); // Set Pug as the templating engine
app.set('views', 'views'); // Set the directory for Pug templates (It's 'views' by default)


const path = await import('path');
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware to parse URL-encoded bodies (from HTML forms)
//With this middleware, we can access form data in req.body
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware to log request details
// Logs the URL, method, and headers of each incoming request
// Parameters:
// req - The incoming request object
// res - The outgoing response object
// next - A callback function to pass control to the next middleware
// app.use((req, res, next) => {
//   console.log('Request URL:', req.url);
//   console.log('Request Method:', req.method);
//   console.log('Request Headers:', req.headers);

//   // Call the next middleware in the stack
//   // If we had sent a response here, we wouldn't reach the next middleware
//   next();
// });

//You call next() to pass control to the next middleware
// Or you can send a response if you want to end the request-response cycle
// app.use((req, res, next) => {
//   //This funtions sends a simple response to the client"
//   res.send("<h1>Hello, World!</h1>");
// });


// Define a route handler for the '/add-product' URL
// We define it before the default route to ensure it gets matched first
// app.use('/add-product', (req, res, next) => {  
//   // Send a simple HTML response to the client
//   res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
// });

// Define a route handler for the '/add-product' URL
//We use app.get to specifically handle GET requests to this route
// app.get('/add-product', (req, res, next) => {  
//   // Send a simple HTML response to the client
//   res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
// });


// app.use('/product', (req, res, next) => {
//   // Handle the form submission from the '/add-product' route
//   console.log(req.body); // Log the submitted form data (requires body-parser middleware to work)
//   res.redirect('/'); // Redirect the user back to the root URL after form submission  
// });

// // Define a route handler for the '/product' URL to handle POST requests
// //We use app.post to specifically handle POST requests to this route
// app.post('/product', (req, res, next) => {
//   // Handle the form submission from the '/add-product' route
//   console.log(req.body); // Log the submitted form data (requires body-parser middleware to work)
//   res.redirect('/'); // Redirect the user back to the root URL after form submission  
// });



// // Define a route handler for the root URL ('/') (Default route)
// app.use('/', (req, res, next) => {  
//   // Send a simple HTML response to the client
//   res.send('<h1>Hello, World!</h1>');
// });

// const server = http.createServer(app);

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });

// Middleware to serve static files from the 'public' directory
// This allows us to serve CSS, images, and client-side JavaScript files
// The files in the 'public' folder can be accessed directly via their URL
app.use(express.static(path.join(__dirname, 'public')));


// Use the admin routes defined in routes/admin.js
// We prefix all admin routes with '/admin' 
// This means that the routes defined in admin.js will be accessible under the '/admin' path
app.use('/admin', adminRoutes);

// Use the shop routes defined in routes/shop.js
app.use(shopRoutes);

// Middleware to handle 404 errors (Page Not Found)
app.use((req, res, next) => {
  // res.status(404).send('<h1>Page Not Found</h1>');
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

  // Render the 404.pug template for unmatched routes
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

// Start the Express server on port 3000
// It listens for incoming requests and uses the defined middleware to handle them
// No need to create an HTTP server manually with http.createServer
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});