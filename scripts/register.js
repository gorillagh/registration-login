// Get the email
// const email = document.querySelector("email");

//Get the password
// const password = document.getElementById("password");

// Get form element by id
const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e.target);
  // Collect form data

  const formData = new FormData(registerForm);
  // Send data to backend
  //Display success message to user

  const messageDiv = document.querySelector("#message");
  messageDiv.innerHTML = `
  <h1 class="center-align">Hey <span class="color: green">${formData.get("username")}</span>, you have successfully registered</h1>
  `
});

// ----------Start-------------
const username = document.querySelector("#name");

const texts = [
  { name: "Aby", color: "green" },
  { name: "Mandy", color: "blue" },
  { name: "Andy", color: "red" },
  { name: "Gov", color: "yellow" },
];

let i = 0;
let currentName = texts[i];

function changeName() {
  username.innerHTML = texts[i].name;
  username.className = texts[i].color;
  i += 1;
  if (i === texts.length) i = 0;
}

setInterval(() => {
  changeName();
}, 3000);
// -------------End-----------

// Declare variable age
const age = 71;

// Define a function called squareAge

function squareAge(age) {
  return age ** 2;
}

console.log(squareAge(age));
