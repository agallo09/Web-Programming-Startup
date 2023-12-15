// Include socket.io-client library in your HTML file
const socket = io();

// Handle WebSocket connection
socket.on('connect', () => {
  console.log('Connected to WebSocket');
});

// Handle incoming messages from the server
socket.on('message', (data) => {
  console.log('Received message from server:', data);

  // Update your application interface with the received data
  updateInterface(data);
});

// Handle disconnection
socket.on('disconnect', () => {
  console.log('Disconnected from WebSocket');
});

// Function to send data over WebSocket
function sendMessage(message) {
  socket.emit('message', message);
}

// Example usage:
function login() {
  var email = document.getElementById('email').value;
  var name = document.getElementById('name').value;
  var password = document.getElementById('password').value;

  // Implement your login logic here
  console.log('Login:', email, name, password);

  // Send login data over WebSocket
  sendMessage({ type: 'login', email, name, password });
}

function createAccount() {
  var email = document.getElementById('email').value;
  var name = document.getElementById('name').value;
  var password = document.getElementById('password').value;

  // Implement your account creation logic here
  console.log('Create Account:', email, name, password);

  // Send account creation data over WebSocket
  sendMessage({ type: 'createAccount', email, name, password });
}

// Function to update the UI with WebSocket data
function updateInterface(data) {
  // Update your UI elements with the received data
  console.log('Updating UI with data:', data);
}