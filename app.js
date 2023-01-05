const form = document.forms[0];

let fNameInvalid = document.getElementById('fNameInvalid');
let lNameInvalid = document.getElementById('lNameInvalid');
let emailInvalid = document.getElementById('emailInvalid');
let passwordInvalid = document.getElementById('passwordInvalid');
fNameInvalid.style.display = 'none';
lNameInvalid.style.display = 'none';
emailInvalid.style.display = 'none';
passwordInvalid.style.display = 'none';

//need to display svg error symbol to none ********************


form.addEventListener('submit', function(event) {
  event.preventDefault();  // prevent the form from being submitted

  // get the input field values
  const fname = document.getElementById('firstNameInput').value;
  const lname = document.getElementById('lastNameInput').value;
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;

  // check if the fields are valid
  let isValid = true;
  if (!isValidName(fname) || !isValidName(lname)) {
    displayError('Please enter a valid name');
    isValid = false;
  }

  if (!isValidEmail(email)) {
    displayError('Please enter a valid email address');
    isValid = false;
  }
  if (!isValidPassword(password)) {
    displayError('Please enter a valid password');
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

function displayError(message) {
  // display the error message
  
  fNameInvalid.textContent = message;
  lNameInvalid.textContent = message;
  emailInvalid.textContent = message;
  passwordInvalid.textContent = message;
  
    
    const allInvalidText = invalidText[i];
    console.log(allInvalidText);
    
    invalidText.style.display = 'none';

    const allInputs = document.getElementsByTagName('input')[i];
    allInputs.style.border = 2 + 'px ' + 'solid ' + '#ff7a7a';

    // const emailInput = document.querySelector('input:nth:child(3)');
    // console.log(emailInput)


}
