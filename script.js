function login() {
    var password = document.getElementById("password").value;
  
    // Check if the password is correct
    if (password === "ZenTradesTest@123") {
      // Redirect to the dashboard page
      window.location.href = "dashboard.html";
    } else {
      // Display error message
    document.getElementById("error-message").innerHTML = "Incorrect password. Please try again.";
    // alert("Incorrect password. Please try again.");
    }
  }
  