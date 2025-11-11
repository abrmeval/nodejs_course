import http from 'http';

const server = http.createServer((req, res) => {
    console.log('Request URL:', req.url);

    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>Hello</title></head>');
        res.write(`<body><h1>Hello, World!</h1>
            <form action="/create-user" method="POST">
                <input type="text" name="username">
                <button type="submit">Create User</button>
            </form>
        </body>`);
        res.write('</html>');
        return res.end();
    }

    if (req.url.includes('/users')) {
       const username = req.url.split('=')[1] || 'Guest';

        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write(`<body><ul><li>${username}</li></ul></body>`);
        res.write('</html>');
        return res.end();
    }
    if (req.url ===  '/create-user' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log('Username:', username);
            res.statusCode = 302;
            res.setHeader('Location', `/users?username=${username}`);
            return res.end();
        });
    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Not Found</title></head>');
    res.write('<body><h1>Page Not Found</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(3000);