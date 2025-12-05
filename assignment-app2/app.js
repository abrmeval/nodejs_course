import express from 'express';

const app = express();

// task  2
// app.use((req, res, next) => {
//     console.log('Request URL:', req.url);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Request query:', req.query);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Request params:', req.params);
//      console.log('Request p:', req.params);
//     res.send('<h1>Hello, World!</h1>');
// });


// task 3
// Define a route handler for the '/user/:id' URL with a route parameter 'id'
// The ':id' part of the URL is a placeholder for any value
// When a request matches this route, the value in that position will be available in req.params.id
// For example, a request to '/user/123' will have req.params.id equal to '123'
// The id  parameter is optional
// This means that both '/user' and '/user/123' will match this route
app.get('/user{/:id}', (req, res) => {
console.log(req.params.id); // Access the 'id' parameter
res.send(`User ID: ${req.params.id}`);
});

app.get('/', (req, res) => {
console.log(req.url); // Access the request URL
res.send(`Req hostname: ${req.hostname}`);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});