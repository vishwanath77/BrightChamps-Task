// Backend API URL
const API_URL = "http://localhost:3000/api/auth";

// Function to handle tab switching
function showTab(tabId) {
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });
  document.getElementById(tabId).classList.add("active");
}

// Event Listener for Registration
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  try {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    document.getElementById("registerMessage").textContent = data.message || "Registered successfully!";
  } catch (err) {
    document.getElementById("registerMessage").textContent = "Error registering user!";
  }
});

// Event Listener for Login
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
    //   document.getElementById("loginMessage").textContent = `Welcome! Token: ${data.token}`;
      document.getElementById("loginMessage").textContent = "Welcome! Successfully Login " ;
    } else {
      document.getElementById("loginMessage").textContent = data.message || "Error logging in!";
    }
  } catch (err) {
    document.getElementById("loginMessage").textContent = "Error logging in!";
  }
});

// Event Listener for Password Reset
document.getElementById("resetPasswordForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("resetEmail").value;
  const newPassword = document.getElementById("newPassword").value;

  try {
    const res = await fetch(`${API_URL}/reset-password`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, newPassword }),
    });
    const data = await res.json();
    document.getElementById("resetMessage").textContent = data.message || "Password reset successfully!";
  } catch (err) {
    document.getElementById("resetMessage").textContent = "Error resetting password!";
  }
});
