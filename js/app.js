const form = document.querySelector('#form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// Usernames can only contain letters a-z in lowercase
const isValidUsername = () => /^[a-z]+$/.test(usernameInput.value);

// Password must contain a lowercase, uppercase letter and a number
const isValidPassword = () => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(passwordInput.value);

// Email must contain an @ symbol and a domain name
const isValidEmail = () => /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput.value);




form.addEventListener("submit", (e) => {
  e.preventDefault();

  if(isValidUsername()) {
    usernameInput.closest('label').classList.add('valid');
    usernameInput.nextElementSibling.style.display = 'none';
  } else {
    usernameInput.closest('label').classList.add('error');
    usernameInput.nextElementSibling.style.display = 'block';
  }

  if(isValidEmail()) {
    emailInput.closest('label').classList.add('valid');
    emailInput.nextElementSibling.style.display = 'none';
  } else {
    emailInput.closest('label').classList.add('error');
    emailInput.nextElementSibling.style.display = 'block';
  }

  if(isValidPassword()) {
    passwordInput.closest('label').classList.add('valid');
    passwordInput.nextElementSibling.style.display = 'none';
  } else {
    passwordInput.closest('label').classList.add('error');
    passwordInput.nextElementSibling.style.display = 'block';
  }

});





  // Add an event listener to the form, listening for the submit event
  // validate the username input by calling the isValidUsername function
  // if the username is valid, 
    // set the class "valid" to the parent label of the input
  // else 
    // prevent the form from being submitted
    // set the class of the label to be "error"
    // change the display value of the span to show the hint to the user


  // validate the email by calling the isValidEmail function
    // apply the error or valid class based on the returned value


  // validate the password by calling the isValidPassword function
    // apply the error or valid class based on the returned value
