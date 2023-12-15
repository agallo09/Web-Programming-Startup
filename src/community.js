// Array to store comments
var comments = [];
const socket = new WebSocket('ws://your-server-url');

// Function to add a new comment
function addMessage() {
  var field = prompt('Enter the field you are working on:');
  var resumePart = prompt('Enter the part of the resume your feedback is for:');
  var commentText = prompt('Enter your comment:');

  // Create a comment object
  var newComment = {
    field: field,
    resumePart: resumePart,
    comment: commentText
  };

  // Add the new comment to the comments array
  comments.push(newComment);

  // Update the displayed comments
  displayComments();

  // Clear the message input
  document.getElementById('user-message').value = '';
} 

// Function to display comments
function displayComments() {
  var commentsContainer = document.getElementById('comments-container');
  commentsContainer.innerHTML = ''; // Clear the existing content

  // Loop through each comment and display it
  for (var i = 0; i < comments.length; i++) {
    var commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.innerHTML = '<strong>Field:</strong> ' + comments[i].field + '<br>' +
                            '<strong>Resume Part:</strong> ' + comments[i].resumePart + '<br>' +
                            '<strong>Comment:</strong> ' + comments[i].comment;

    commentsContainer.appendChild(commentDiv);
  }
}

socket.addEventListener('message', (event) => {
  // Parse the received JSON message and add it to the comments array
  var newComment = JSON.parse(event.data);
  comments.push(newComment);

  // Update the displayed comments
  displayComments();
});

// Handle WebSocket errors
socket.addEventListener('error', (event) => {
  console.error('WebSocket error:', event);
});

// Handle WebSocket closure
socket.addEventListener('close', (event) => {
  console.log('WebSocket connection closed:', event);
});