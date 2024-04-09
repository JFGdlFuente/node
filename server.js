// Importamos la librería http de node.js
const { createServer } = require('node:http');

// Defonimos el host y el puerto del servidor
const hostname = '127.0.0.1';
const port = 3000;

// Creamos el servidor
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// Iniciamos el servidor
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
