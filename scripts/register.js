

// const email = document.querySelector(".email")
// const password = document.querySelector("#password")

// Get the email 
const email = document.getElementById("email")

//Get the password
const password = document.getElementById("password")

// Get form element by id
const registerForm = document.getElementById("register-form")

registerForm.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e);
})