const loginButton = document.getElementById("login-button");
const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));

loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  loginModal.show();
});
// main.js

function toggleDropdown() {
  var dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}
