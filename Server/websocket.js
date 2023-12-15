// websocket.js

// Create a WebSocket connection
const socket = new WebSocket('ws://example.com/socket');

// Handle incoming messages from the WebSocket
socket.addEventListener('message', function (event) {
  console.log('Message from server:', event.data);
});

// Usage example in HTML:
// Connect to the WebSocket when the page loads
// <script src="websocket.js"></script>