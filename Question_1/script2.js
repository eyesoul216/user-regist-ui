document.addEventListener("DOMContentLoaded", function() {
    // Sign In Form
  var signInForm = document.getElementById("signInForm");
  signInForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var signInEmail = document.getElementById("signInEmail").value;
    var signInPassword = document.getElementById("signInPassword").value;

    // Retrieve the registered user from local storage
    var registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    // Check if the sign-in credentials match the registered user
    if (registeredUser && signInEmail === registeredUser.email && signInPassword === registeredUser.password) {
      // Redirect to another page after successful sign-in
      window.location.href = "profile.html";
    } else {
      // Display an error message for unsuccessful sign-in
      alert("Invalid email or password. Please try again.");
    }
  });
  });
  