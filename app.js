const form = document.forms[0];
const arrOfClasses = document.getElementsByClassName('invalidText');

for (let i = 0; i < arrOfClasses.length; i++) {

const invalidText = form.getElementsByClassName('invalidText')[i];
invalidText.style.display = 'none';

//need to display svg error symbol to none ********************
}

form.addEventListener('submit', function(event) {
  event.preventDefault();  // prevent the form from being submitted

  // get the input field values
  const fname = document.getElementById('firstNameInput');
  const lname = document.getElementById('lastNameInput');
  const email = document.getElementById('emailInput')
  const password = document.getElementById('passwordInput');

  // check if the fields are valid
  let isValid = true;
  if (!isValidName(fname) || isValidName(lname)) {
    displayError('nameError', 'Please enter a valid name');
    isValid = false;
  }

  if (!isValidEmail(email)) {
    displayError('emailError', 'Please enter a valid email address');
    isValid = false;
  }
  if (!isValidPassword(password)) {
    displayError('passwordError', 'Please enter a valid password');
    isValid = false;
  }

});

function isValidName(name) {
  // check if the name is not empty and only contains letters
  return /^[a-zA-Z]+$/.test(name);
}

function isValidEmail(email) {
  // check if the email is not empty and in a valid format
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function isValidPassword(password) {
  // check if the password is not empty and at least 6 characters long
  return password.length >= 6;
}

function displayError(id, message) {
  // display the error message
  const invalidText = document.querySelectorAll('.invalidText');
  errorElement.textContent = message;

  
    for (let i = 0; i < arrOfClasses.length; i++) {
    const allInvalidText = invalidText[i];
    // console.log(allInvalidText);
    
    invalidText.style.display = 'none';

    const allInputs = document.getElementsByTagName('input')[i];
    allInputs.style.border = 2 + 'px ' + 'solid ' + '#ff7a7a';

    // const emailInput = document.querySelector('input:nth:child(3)');
    // console.log(emailInput)
}

}
