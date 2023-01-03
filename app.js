const fNameInput = document.getElementById('firstNameInput');
const lNameInput = document.getElementById('lastNameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const submit = document.getElementById('claimButton');

// function checkIfValid() {

    let spanInvalid = document.querySelectorAll('.invalidText');
    spanInvalid.style.display = 'none';
    const inputFeilds = document.getElementsByTagName("input");
    const validInputs = Array.from(inputFeilds).filter( input => input.value !== "");
    // if (validInputs) {
    //     // return;
    // } else {
        
    // }
// }