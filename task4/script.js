function register() {
    const username = document.getElementById("regUser").value;
    const password = document.getElementById("regPass").value;
  
    if (username && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Registration Successful!");
      window.location.href = "index.html";
    } else {
      alert("Please fill in all fields.");
    }
  }
  
  function login() {
    const loginUser = document.getElementById("loginUser").value;
    const loginPass = document.getElementById("loginPass").value;
  
    const storedUser = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");
  
    if (loginUser === storedUser && loginPass === storedPass) {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials!");
    }
  }
  