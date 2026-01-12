import express from 'express';
import bodyParser from 'body-parser';
import  userRoutes  from './routes/users.js';
import rootDir from './util/path.js';
import path from 'path';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(rootDir, 'public')));

app.use(userRoutes);

app.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});