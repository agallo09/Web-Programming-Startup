// JavaScript functions for handling login and account creation
function login() {
  var email = document.getElementById('email').value;
  var name = document.getElementById('name').value;
  var password = document.getElementById('password').value;

  // Simple email validation
  if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  // Simple password validation
  if (!isValidPassword(password)) {
      alert('Please enter a valid password (at least 6 characters).');
      return;
  }

  // Implement your login logic here (send data to the server, etc.)
  console.log('Login:', email, name, password);
}

function createAccount() {
  var email = document.getElementById('email').value;
  var name = document.getElementById('name').value;
  var password = document.getElementById('password').value;

  // Simple email validation
  if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  // Simple password validation
  if (!isValidPassword(password)) {
      alert('Please enter a valid password (at least 6 characters).');
      return;
  }

  // Implement your account creation logic here (send data to the server, etc.)
  console.log('Create Account:', email, name, password);
}

// Simple email validation function
function isValidEmail(email) {
  // Use a regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Simple password validation function
function isValidPassword(password) {
  // Validate password length (you can add more complex rules)
  return password.length >= 6;
}