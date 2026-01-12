import express from 'express';
import rootDir from '../util/path.js';
import path from 'path';

// Create a router object to define admin-related routes
const router = express.Router();

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'users.html'));
});

export default router;