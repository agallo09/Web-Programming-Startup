// server/database.js
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://alejandrogbedon:Alej@4302@cluster0.xjeojzd.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Define user schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

// Create user model
const User = mongoose.model('User', userSchema);

module.exports = { mongoose, User };