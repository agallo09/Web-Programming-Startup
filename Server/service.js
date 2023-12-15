// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Connect to MongoDB (make sure to have MongoDB running)
mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a user schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

// Create a User model
const User = mongoose.model('User', userSchema);

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Endpoint for user registration
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint for user authentication
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      // Authentication successful
      return res.json({ message: 'Login successful' });
    } else {
      // Authentication failed
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Example endpoint for your backend service
app.get('/api/data', (req, res) => {
  // Implement logic to provide data from your backend
  res.json({ message: 'Data from your backend service' });
});

// Example endpoint calling a third-party service
app.get('/api/third-party', (req, res) => {
  // Implement logic to make requests to third-party services
  // (e.g., using axios, fetch, etc.)
  res.json({ message: 'Response from third-party service' });
});

// Example endpoint with dynamic parameter
app.get('/api/user/:id', (req, res) => {
  // Access dynamic parameter from the URL
  const userId = req.params.id;
  res.json({ userId });
});

// Default route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, this is your HTTP service!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});