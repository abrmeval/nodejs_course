// import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import { router as adminRoutes } from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import { fileURLToPath } from 'url';
import { notFound } from './controllers/error.js';

const app = express();

app.set('view engine', 'ejs'); // Set EJS as the templating engine
app.set('views', 'views'); // Set the directory for {template_engine} templates (It's 'views' by default)

const path = await import('path');
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware to serve static files from the 'public' directory
// This allows us to serve CSS, images, and client-side JavaScript files
// The files in the 'public' folder can be accessed directly via their URL
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

// Use the admin routes defined in routes/admin.js
// We prefix all admin routes with '/admin' 
// This means that the routes defined in admin.js will be accessible under the '/admin' path
app.use('/admin', adminRoutes);

// Use the shop routes defined in routes/shop.js
app.use(shopRoutes);

// Middleware to handle 404 errors (Page Not Found)
app.use(notFound);

// Start the Express server on port 3000
// It listens for incoming requests and uses the defined middleware to handle them
// No need to create an HTTP server manually with http.createServer
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});