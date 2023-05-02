const http = require('http');
const fs = require('fs/promises');

const port = 3000;

const server = http.createServer(async (req, res) => {
  try {
    let filePath = './public';
    let contentType = 'text/html';

    if (req.url === '/about') {
      filePath += '/about.js';
      contentType = 'text/javascript';
    } else if (req.url === '/team') {
      filePath += '/team.js';
      contentType = 'text/javascript';
    } else if (req.url === '/product') {
      filePath += '/product.js';
      contentType = 'text/javascript';
    } else if (req.url === '/cart') {
      filePath += '/cart.js';
      contentType = 'text/javascript';
    } else if (req.url === '/') {
      filePath += '/index.html';
    } else {
      filePath += '/404.html';
    }

    const fileContents = await fs.readFile(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(fileContents);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal server error');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});