// Toggle between login and register forms
function showRegister() {
  const loginContainer = document.getElementById('loginContainer');
  const registerContainer = document.getElementById('registerContainer');
  
  loginContainer.style.opacity = 0;
  setTimeout(() => {
    loginContainer.style.display = 'none';
    registerContainer.style.display = 'block';
    setTimeout(() => {
      registerContainer.style.opacity = 1;
    }, 50);
  }, 300);
}

function showLogin() {
  const loginContainer = document.getElementById('loginContainer');
  const registerContainer = document.getElementById('registerContainer');
  
  registerContainer.style.opacity = 0;
  setTimeout(() => {
    registerContainer.style.display = 'none';
    loginContainer.style.display = 'block';
    setTimeout(() => {
      loginContainer.style.opacity = 1;
    }, 50);
  }, 300);
}

// Initialize containers with transition properties
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('loginContainer').style.opacity = 1;
  document.getElementById('loginContainer').style.transition = 'opacity 0.3s ease';
  document.getElementById('registerContainer').style.opacity = 0;
  document.getElementById('registerContainer').style.transition = 'opacity 0.3s ease';
});

// Toggle password visibility
function togglePassword(inputId, icon) {
  const passwordInput = document.getElementById(inputId);
  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  } else {
    passwordInput.type = 'password';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  }
}

// Form validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

// Registration function
function register() {
  const username = document.getElementById('registerUsername').value.trim();
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value.trim();
  const messageElement = document.getElementById('registerMessage');
  
  // Clear previous messages
  messageElement.innerHTML = '';
  
  // Validate input fields
  if (!username) {
    showMessage(messageElement, 'Username is required', 'error');
    return;
  }
  
  if (!email) {
    showMessage(messageElement, 'Email is required', 'error');
    return;
  }
  
  if (!validateEmail(email)) {
    showMessage(messageElement, 'Please enter a valid email address', 'error');
    return;
  }
  
  if (!password) {
    showMessage(messageElement, 'Password is required', 'error');
    return;
  }
  
  if (!validatePassword(password)) {
    showMessage(messageElement, 'Password must be at least 6 characters', 'error');
    return;
  }
  
  // Store user data
  const user = { username, email, password };
  localStorage.setItem('codeNestUser', JSON.stringify(user));
  
  // Show success message
  showMessage(messageElement, 'Registration successful! Redirecting to login...', 'success');
  
  // Redirect to login page after delay
  setTimeout(showLogin, 1500);
}

// Login function
function login() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  const messageElement = document.getElementById('loginMessage');
  
  // Clear previous messages
  messageElement.innerHTML = '';
  
  // Validate input fields
  if (!username) {
    showMessage(messageElement, 'Username is required', 'error');
    return;
  }
  
  if (!password) {
    showMessage(messageElement, 'Password is required', 'error');
    return;
  }
  
  // Check credentials
  const storedUser = JSON.parse(localStorage.getItem('codeNestUser'));
  
  if (storedUser && username === storedUser.username && password === storedUser.password) {
    // Login successful
    showMessage(messageElement, 'Login successful! Redirecting...', 'success');
    
    // Save session
    sessionStorage.setItem('codeNestLoggedIn', 'true');
    sessionStorage.setItem('codeNestUsername', username);
    
    // Redirect after delay
    setTimeout(() => {
      window.location.href = 'welcome.html';
    }, 1000);
  } else {
    // Login failed
    showMessage(messageElement, 'Invalid username or password', 'error');
    
    // Shake effect for error
    const loginForm = document.getElementById('loginForm');
    loginForm.classList.add('shake');
    setTimeout(() => {
      loginForm.classList.remove('shake');
    }, 500);
  }
}

// Sign in with Google function (mock)
function signInWithGoogle() {
  alert('Google Sign-in functionality would be integrated with Google OAuth in a real application.');
  
  // In a real implementation, you would:
  // 1. Use the Google Sign-In API
  // 2. Authenticate with OAuth 2.0
  // 3. Handle the response and store user info
  
  // For demo purposes, let's simulate a successful login
  sessionStorage.setItem('codeNestLoggedIn', 'true');
  sessionStorage.setItem('codeNestUsername', 'Google User');
}

// Helper function to display messages
function showMessage(element, message, type) {
  element.innerHTML = `<div class="${type}">${message}</div>`;
}

// Add form submission on Enter key
document.getElementById('loginPassword').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    login();
  }
});

document.getElementById('registerPassword').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    register();
  }
});

// Add CSS for shake animation
const style = document.createElement('style');
style.innerHTML = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
  }
  .shake {
    animation: shake 0.5s;
  }
`;
document.head.appendChild(style);
