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


form.addEventListener('submit', function(event) {
  event.preventDefault();  // prevent the form from being submitted

  // get the input field values
  const fname = document.getElementById('firstNameInput').value;
  const lname = document.getElementById('lastNameInput').value;
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;

  
  const emailInput = document.querySelector('#emailInput');
  // check if the fields are valid
  
  if (fname.length === '') { 
    fNameInvalid.setAttribute('id', 'fNameInvalid');
    fNameInvalid.classList.remove('textHidden');
  }

  if (!isValidName(lname))  {
    lNameInvalid.style.display = 'inline';
  }

  if (!isValidEmail(email)) {
   emailInvalid.style.display = 'inline';;
   emailInput.placeholder = 'email@example/com';
   emailInput.style.color = '#ff7a7a';

  }

  if (!isValidPassword(password)) {
    passwordInvalid.style.display = 'inline';
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


const allInputs = document.getElementsByTagName('input')[0];
allInputs.style.border = 2 + 'px ' + 'solid ' + '#ff7a7a';


 



const fname = document.getElementById('firstNameInput');
console.log(fname);