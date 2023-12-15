const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = 3000;

// Middleware to serve static files from a folder (e.g., public)
app.use(express.static('public'));

// Sample endpoint
app.get('/api/sample', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// WebSocket connection handling
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle incoming messages from the client
  socket.on('message', (data) => {
    console.log('Received message:', data);

    // Broadcast the message to all connected clients
    io.emit('message', data);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
