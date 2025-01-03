const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const protectedButton = document.getElementById('protected-button');
const message = document.getElementById('message');

let token = null;

// Register form submission
registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('Register form submitted.');

  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;
  console.log('Register form data:', { username, password });

  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    console.log('Register response status:', response.status);

    const data = await response.json();
    console.log('Register response data:', data);

    message.textContent = data.message;
  } catch (error) {
    console.error('Error during registration:', error);
    message.textContent = 'Registration failed!';
  }
});

// Login form submission
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('Login form submitted.');

  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  console.log('Login form data:', { username, password });

  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    console.log('Login response status:', response.status);

    const data = await response.json();
    console.log('Login response data:', data);

    token = data.token;
    console.log('Token received:', token);

    message.textContent = token ? 'Login successful!' : data.message;
  } catch (error) {
    console.error('Error during login:', error);
    message.textContent = 'Login failed!';
  }
});

// Protected button click
protectedButton.addEventListener('click', async () => {
  console.log('Protected button clicked.');

  if (!token) {
    console.warn('No token available. Please log in first.');
    message.textContent = 'Please log in first!';
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/protected', {
      method: 'GET',
      headers: { Authorization: token },
    });

    console.log('Protected response status:', response.status);

    const data = await response.json();
    console.log('Protected response data:', data);

    message.textContent = data.message;
  } catch (error) {
    console.error('Error accessing protected route:', error);
    message.textContent = 'Failed to access protected route!';
  }
});
