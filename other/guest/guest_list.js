const addBtn = document.getElementById('addGuestBtn');
const input = document.getElementById('guestInput');
const list = document.getElementById('guestList');

addBtn.addEventListener('click', () => {
  const name = input.value.trim();
  if (name === '') return;

  const li = document.createElement('li');
  li.textContent = name;

  const confirmBtn = document.createElement('button');
  confirmBtn.textContent = 'Confirm';
  confirmBtn.addEventListener('click', () => {
    li.classList.toggle('confirmed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(confirmBtn);
  li.appendChild(removeBtn);
  list.appendChild(li);

  input.value = '';
  input.focus();
});