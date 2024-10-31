'use strict'

// form
const form = document.getElementById('form');

form.addEventListener("submit", function(e){
  e.preventDefault();
  let error = {}

  const firstNameValue = document.getElementById('first-name').value;
  if(firstNameValue === ""){
    error.firstname = "please fill out the field above";
  }

  const lastNameValue = document.getElementById('last-name').value;
  if(lastNameValue === ""){
    error.lastname = "please fill out the field above";
  }

  const emailValue = document.getElementById('email').value;
  if(emailValue === ""){
    error.email = "please fill out the field above";
  }

  const passwordValue1 = document.getElementById('password1').value;
  if(passwordValue1 === ""){
    error.password1 = "please fill out this field above";
  }

  const passwordValue2 = document.getElementById('password2').value;
  if(passwordValue1 !== passwordValue2){
    error.password2 = "password doesn't match";
  }

  // clear error text
  document.querySelectorAll(".error").forEach((item) => {
    item.innerText = "";
  });

  // show error text
  for(let key in error){
    let p = document.getElementById('error_' + key);
    if(p){
      p.textContent = error[key];
    }
  }
  
  // submit
  if(Object.keys(error).length == 0){
    form.submit();
  }
});

// email regex
const emailInput = document.getElementById('email');

emailInput.addEventListener('keyup', function(){
  const emailInputValue = emailInput.value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailError = document.getElementById('error-email');

  if(emailInputValue.match(emailRegex)){
    emailError.innerText = "email is valid";
    emailError.style.color = "green";
    emailInput.style.border = "solid 2px green";
  }else{
    emailError.innerText = "email is invalid";
    emailError.style.color = "red";
    emailInput.style.border = "solid 2px red";
  }
  if(emailInputValue === ""){
    emailError.innerHTML = "";
    emailInput.style.border = "solid 1px #ddd";
  }
});

// password regex
const passwordInput1 = document.getElementById('password1');

passwordInput1.addEventListener('keyup', function(){
  const passwordValue1 = passwordInput1.value;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const passwordError = document.getElementById('error-password1')

  if(passwordValue1.match(passwordRegex)){
    passwordError.innerText = "password is valid"
    passwordError.style.color = "green";
    passwordInput1.style.border = "solid 2px green";
  }else{
    passwordError.innerText = "password must contain at least 8 characters, 1 uppercase/lowercase letter, 1 digit and 1 special character(e.g., !@#$%^&*)";
    passwordError.style.color = "red";
    passwordInput1.style.border = "solid 2px red";
  }
  if(passwordValue1 === ""){
    passwordError.innerHTML = "";
    passwordInput1.style.border = "solid 1px #ddd";
  }
})

// show/hide icon
const icon1 = document.getElementById('show-icon1');
const icon2 = document.getElementById('show-icon2');
icon1.addEventListener("click", function(){
    if(passwordValue1.type == "password"){
        passwordValue1.setAttribute("type", "text");
        icon1.classList.remove("fa-eye");
        icon1.classList.add("fa-eye-slash");
    }else{
        passwordValue1.setAttribute("type", "password");
        icon1.classList.add("fa-eye");
        icon1.classList.remove("fa-eye-slash");
    }
});
icon2.addEventListener("click", function(){
    if(passwordValue2.type == "password"){
        passwordValue2.setAttribute("type", "text");
        icon2.classList.remove("fa-eye");
        icon2.classList.add("fa-eye-slash");
    }else{
        passwordValue2.setAttribute("type", "password");
        icon2.classList.add("fa-eye");
        icon2.classList.remove("fa-eye-slash");
    }
});


// cookies
window.onload = function () {
  if (!getCookie("cookieConsent")) {
      document.getElementById("cookie-banner").style.display = "flex";
  }
};

// Function to set cookies
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get cookies
function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length);
      }
  }
  return null;
}

// Accept Cookies
function acceptCookies() {
  setCookie("cookieConsent", "accepted", 30); // Set for 30 days
  document.getElementById("cookie-banner").style.display = "none";
}

// Deny Cookies
function denyCookies() {
  setCookie("cookieConsent", "denied", 30); // Set for 30 days
  document.getElementById("cookie-banner").style.display = "none";
}