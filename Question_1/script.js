document.addEventListener("DOMContentLoaded", function() {
    // Registration Form
  var registrationForm = document.getElementById("registrationForm");
  registrationForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Store the registered user in local storage
    localStorage.setItem("registeredUser", JSON.stringify({ name: name, email: email, password: password }));

    // Redirect to another page after registration
    window.location.href = "signin.html";
  });
  
    
    });

  
  
  