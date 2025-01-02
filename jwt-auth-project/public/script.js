const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const protectedButton = document.getElementById('protected-button');
const message = document.getElementById('message');

let token = null;

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;

  const response = await fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  message.textContent = data.message;
});

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  token = data.token;
  message.textContent = token ? 'Login successful!' : data.message;
});

protectedButton.addEventListener('click', async () => {
  const response = await fetch('http://localhost:3000/protected', {
    method: 'GET',
    headers: { Authorization: token },
  });

  const data = await response.json();
  message.textContent = data.message;
});
