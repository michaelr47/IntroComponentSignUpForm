const form = document.forms[0];

let fNameInvalid = document.getElementById('fNameInvalid');
let lNameInvalid = document.getElementById('lNameInvalid');
let emailInvalid = document.getElementById('emailInvalid');
let passwordInvalid = document.getElementById('passwordInvalid');
fNameInvalid.classList.add('textHidden')
lNameInvalid.classList.add('textHidden')
emailInvalid.classList.add('textHidden')
passwordInvalid.classList.add('textHidden')

//need to display svg error symbol to none ********************

const claimBtn = document.getElementById('claimButton');
claimBtn.addEventListener('click', (event) => {
  event.preventDefault();  // prevent the form from being submitted

  // get the input field values
  const fname = document.getElementById('firstNameInput').value;
  const lname = document.getElementById('lastNameInput').value;
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;

  
  const emailInput = document.querySelector('#emailInput');

  // check if the fields are valid
  
  if (!isValidName(fname)) {
    document.querySelector('#firstNameInput').style.border = '2px solid #ff7a7a';
    fNameInvalid.style.display = 'block';
  } else {
    document.querySelector('#firstNameInput').style.border = '';
    fNameInvalid.style.display = 'none';
  }

  if (!isValidName(lname)) {
    document.querySelector('#lastNameInput').style.border = '2px solid #ff7a7a';
    lNameInvalid.style.display = 'block';
  } else {
    document.querySelector('#lastNameInput').style.border = '';
    lNameInvalid.style.display = 'none';
  }

  if (!isValidEmail(email)) {
    document.querySelector('#emailInput').style.border = '2px solid #ff7a7a';
    emailInvalid.style.display = 'block';
    emailInput.placeholder = 'email@example/com';
    emailInput.classList.add('inputErrorPlaceholder');
  } else {
    document.querySelector('#emailInput').style.border = '';
    emailInvalid.style.display = 'none';
  }

  if (!isValidPassword(password)) {
    document.querySelector('#passwordInput').style.border = '2px solid #ff7a7a';
    passwordInvalid.style.display = 'block';
  }  else {
    document.querySelector('#passwordInput').style.border = '';
    passwordInvalid.style.display = 'none';
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



// input1.pseudoClass.add('::placeholder');
// input1.style.background = "url('./images/icon-error.svg') right / contain no-repeat";
// input1.style.marginRight = 1 + 'rem';


// querySelector('input[name="pwd"]')
// function checkForm(){
//   var form = document.forms[0];
//   var selectElement = form.querySelector('input[name="pwd"]');
//   var selectedValue = selectElement.value;
// }