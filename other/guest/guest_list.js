const guestListEl = document.getElementById("guestList");
const addGuestForm = document.getElementById("addGuestForm");
const guestNameInput = document.getElementById("guestName");

addGuestForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = guestNameInput.value.trim();
  if (!name) return;

  const li = document.createElement("li");
  li.textContent = name;
  guestListEl.appendChild(li);

  guestNameInput.value = "";
  guestNameInput.focus();
})