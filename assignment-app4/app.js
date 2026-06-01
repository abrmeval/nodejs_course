import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path from 'path'

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const users = [];

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs'); // Set EJS as the templating engine
app.set('views', 'views'); // Set the directory for EJS templates (It's 'views' by default)

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
    res.render('index', { pageTitle: 'Users', path: '/', nav: { index: true } });
});

app.post("/", (req, res, next) => {
    if (req.body != null && req.body.name != null)
        users.push(req.body.name);

    res.redirect('/users');
});

app.get("/users", (req, res, next) => {
    res.render('users', { pageTitle: 'Users', path: '/users', nav: { users: true }, users: users });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});