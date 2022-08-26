function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

const closeForm = document.querySelector(".close");

// down modal event
closeForm.addEventListener("click", downModal);

// down modal form
function downModal() {
    modalbg.style.display = "none";  
}

/*
// data validation
const firstnameEl = document.querySelector('#first');
const lastnameEl = document.querySelector('#last');
const emailEl = document.querySelector('#email');
const birthdateEl = document.querySelector('#birthdate');
const quantityEl = document.querySelector('#quantity');
const locationEl = document.querySelectorAll('.location');
const checkbox1El = document.querySelectorAll('#checkbox1');
const checkbox2El = document.querySelectorAll('#checkbox2');

const form = document.querySelector('#signup');

const checkFirstname = () => {

    let valid = false;

    const min = 2,
        max = 25;

    const firstname = firstnameEl.value.trim();

    if (!isRequired(firstname)) {
        showError(firstnameEl, 'Firstname cannot be blank.');
    } else if (!isBetween(firstname.length, min, max)) {
        showError(firstnameEl, `Firstname must be between ${min} and ${max} characters.  `)
    } else {
        showSuccess(firstnameEl);
        valid = true;
    }
    return valid;
};

const checkLastname = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const lastname = lastnameEl.value.trim();

    if (!isRequired(lastname)) {
        showError(lastnameEl, 'Lastname cannot be blank.');
    } else if (!isBetween(lastname.length, min, max)) {
        showError(lastnameEl, `Lastname must be between ${min} and ${max} characters. `)
    } else {
        showSuccess(lastnameEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelectorAll('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelectorAll('small');
    error.textContent = '';
}


function validate(e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isFirstnameValid = checkFirstname(),
        isLastnameValid = checkLastname(),
        isEmailValid = checkEmail();

    let isFormValid = isFirstnameValid && isLastnameValid && isEmailValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        return downModal;
    } else {
        return launchModal;
    }
};
*/