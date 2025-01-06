document.getElementById('login-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('/', {
      method: 'GET',
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        Accept: 'application/json',
      },
    });

    if (response.status === 200) {
      const data = await response.text();
      alert(data); // "Hello World!"
    } else if (response.status === 401) {
      alert('Unauthorized! Invalid credentials.');
    } else {
      alert('Something went wrong.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error connecting to server.');
  }
});
