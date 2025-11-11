import fs from 'fs';

export function requestHandler(req, res) {
    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    // Handle POST request to /message
    if (req.url === '/message' && req.method === 'POST') {
        const body = [];
        // Data is sent in chunks
        // Listen for data event on the request object
        // Collect data chunks from the request
        req.on('data', (chunk) => {
            body.push(chunk);
            console.log('Chunk received:', chunk);
        });

        // Listen for end event on the request object
        // This event is triggered when all data has been received
        //We add a return statement here to ensure that the response is only sent after processing the POST data
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log('Parsed Body:', parsedBody);
            // Extract message from the parsed body
            const message = parsedBody.split('=')[1];
            console.log('Message:', message);

            // Write the extracted message to message.txt synchronously
            // It will block the event loop until the file is written
            // In a real-world application, consider using the asynchronous version fs.writeFile() for better performance
            // fs.writeFileSync('message.txt', message);

            // Write the extracted message to message.txt asynchronously
            fs.writeFile('message.txt', message, (err) => {
                //The callback function is called once the file writing is complete
                res.writeHead(302, { 'Location': '/' });
                return res.end();
            });
        });
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
}

//CommonJS export syntax
// Export the requestHandler function by assigning it to module.exports
// module.exports = requestHandler;

// Exporting multiple items using module.exports
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// Alternative export syntax using exports object
// exports.handler = requestHandler;
// exports.someText = 'Some hard coded text';