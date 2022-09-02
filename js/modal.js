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
const closeForm = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// down modal event
closeForm.addEventListener("click", downModal);

// down modal form
function downModal() {
  modalbg.style.display = "none";
  form.reset();
  const messagesReset = document.querySelectorAll(".message");
  messagesReset.forEach(message => {
      message.textContent = '';
  });
};

/* data validation form */
const firstnameEl = document.querySelector('#first');
const lastnameEl = document.querySelector('#last');
const emailEl = document.querySelector('#email');
const birthdateEl = document.querySelector('#birthdate');
const quantityEl = document.querySelector('#quantity');
const locationEl = document.querySelectorAll('.location');
const checkbox1El = document.querySelector('#checkbox1');
const checkbox2El = document.querySelector('#checkbox2');

const form = document.querySelector('#reserve');

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;    

  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const success = formField.querySelector('.message');
  const error = formField.querySelector('.message');
  error.style.color = "red";
  error.style.font = "15px verdana";
  success.textContent = '';
  error.textContent = message;
};

const showSuccess = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('.message');
  const success = formField.querySelector('.message');
  success.style.color = "green";
  success.style.font = "15px verdana";
  error.textContent = '';
  success.textContent = message;
};

const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

// Check an input is string of ASCII alphabets + numerics
const hasNumber = (num) => {
  const re = /^[0-9]$/;
  return re.test(num);
};

// Check an input is date dd/mm/yyyy
const hasDate = (date) => {
  const re = new RegExp("([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})");
  return re.test(date);
};

const checkFirstname = () => {
  let valid = false;
  const min = 2, max = 25;
  const firstname = firstnameEl.value.trim(); 
  
  if (!isRequired(firstname)) {        
      showError(firstnameEl, 'Firstname cannot be blank.');
  } else if (!isBetween(firstname.length, min, max)) {
      showError(firstnameEl, `Firstname must be between ${min} and ${max} characters.`);
  } else if (hasNumber(firstname)) {        
      showError(firstnameEl, 'Firstname cannot be numeric.');
  } else {        
      showSuccess(firstnameEl, 'Firstname is valid.');
      valid = true;
  }
  return valid;
};

const checkLastname = () => {
  let valid = false;
  const min = 3, max = 25;

  const lastname = lastnameEl.value.trim();     

  if (!isRequired(lastname)) {        
      showError(lastnameEl, 'Lastname cannot be blank.');
  } else if (!isBetween(lastname.length, min, max)) {
      showError(lastnameEl, `Lastname must be between ${min} and ${max} characters.`);
  } else if (hasNumber(lastname)) {        
      showError(lastnameEl, 'Lastname cannot be numeric.');
  } else {        
      showSuccess(lastnameEl, 'Lastname is valid.');
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
      showError(emailEl, 'Email is not valid.');
  } else {
      showSuccess(emailEl, 'Email is valid.');
      valid = true;
  }
  return valid;
};

const checkBirthdate = () => {  
  let valid = false; 
  const bDay = birthdateEl.value;
  const dob = new Date(bDay);  
  let age = new Date().getFullYear() - dob.getFullYear();
  
  if (!isRequired(bDay) || !hasDate(bDay) || dob.getFullYear()>new Date().getFullYear() || dob.getFullYear()<1920) {
    showError(birthdateEl, 'Date de naissance invalid ou absent !');
    valid;
  } else if(age<=18) {
    showError(birthdateEl, 'Vous n\'êtes pas majeur !');
    valid;
  }
  else {
    showSuccess(birthdateEl, 'Birthday is valid.');
    valid = true;    
  }
  return valid;
};

const checkQuantity = () => { 
  let valid = false; 
  const q = quantityEl.value;
  
  if (!isRequired(q) || isNaN(q)) {
    showError(quantityEl, 'Nombre absent ou invalide !');
    valid;
  } else {
    showSuccess(quantityEl, 'Quantity is valid.');
    valid = true;    
  }
  return valid;
};

function validate() {
  let valid = false;    
  // validate fields
  let isFirstnameValid = checkFirstname(), 
      isLastnameValid = checkLastname(),
      isEmailValid = checkEmail(),
      isBirthdateValid = checkBirthdate(),
      isQuantityValid = checkQuantity();

  let isFormValid = isFirstnameValid && 
                    isLastnameValid && 
                    isEmailValid && 
                    isBirthdateValid &&
                    isQuantityValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    valid = true;
    return valid;
  }
  return valid;
};

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
      // cancel the previous timer
      if (timeoutId) {
          clearTimeout(timeoutId);
      }
      // setup a new timer
      timeoutId = setTimeout(() => {
          fn.apply(null, args)
      }, delay);
  };
};

form.addEventListener('input', debounce(function (e) {
  switch (e.target.id) {
      case 'first':
          checkFirstname();
          break;
      case 'last':
          checkLastname();
          break;
      case 'email':
          checkEmail();
          break;
      case 'birthdate':
        checkBirthdate();
        break;
  }
}));