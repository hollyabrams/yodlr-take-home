document.getElementById('registration-form').addEventListener('submit', function(e) {
  // Prevent the form from submitting normally
  e.preventDefault();

  // Get the form fields
  var firstName = e.target.elements['firstName'].value;
  var lastName = e.target.elements['lastName'].value;
  var email = e.target.elements['email'].value;
  var password = e.target.elements['password'].value;

  // Prepare the user data to send to the server
  var userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password // Depending on backend requirements, you might want to hash this
  };

  // Send a POST request to the server
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('User created successfully', data);
    // Redirect the user, clear the form, or give some other indication of success
  })
  .catch(error => {
    console.error('Error:', error);
    // Show the user an error message
  });
});
