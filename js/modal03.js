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
  modalbg.style.top = "50px";
  modalbg.style.backgroundColor = "transparent";
  content.style.marginBottom = "50px";    
}

// down modal event
const closeForm = document.querySelector(".close");
closeForm.addEventListener("click", downModal);

// add id in form
form.setAttribute("id","reserve");
const formEl = document.querySelector('#reserve');

// down modal form
function downModal() {
  modalbg.style.display = "none";
  formEl.reset();
  const messagesReset = document.querySelectorAll('.message');
  const bordersReset = document.querySelectorAll('input');  
  messagesReset.forEach(message => {
      message.textContent = '';      
  });
  bordersReset.forEach(borders => {
    borders.style.border = '2px solid transparent';      
  });
};

// add message div
for(let i = 0; formData.length > i; i++) {
  var elemDiv = document.createElement('div');
  elemDiv.classList.add('message');
  formData[i].appendChild(elemDiv);
};
const message=document.querySelectorAll(".message");

// success function
const showSuccess = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class and add the success class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message and show the success message
  const error = formField.querySelector('.message');
  const success = formField.querySelector('.message');
  success.style.color = "green";
  input.style.border = "2px solid green";
  success.style.fontSize = "14px";
  success.style.fontWeight = "100";
  error.textContent = '';
  success.textContent = message;
};

// error function
const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the success class and add the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message and show the error message
  const error = formField.querySelector('.message');
  const success = formField.querySelector('.message');
  error.style.color = "red";
  input.style.border = "2px solid red";
  error.style.fontSize = "14px";
  error.style.fontWeight = "100";
  success.textContent = '';
  error.textContent = message;
};

// check if a field isn't empty
const isRequired = value => value === '' ? false : true;

// check numbers characters between min and max
const isBetween = (length, min, max) => length < min || length > max ? false : true;

// check if a string has numbers
const isNumber = (num) => {
  const re = (/[0-9]+/gm);
  return re.test(num);
};

// check if the string has special characters
const isCharSpe = (specialChar) => {
  const re = (/[^a-zA-Z0-9 ]+$/gm);
  return re.test(specialChar);
};

// check if the mail has valid
const isEmailValid = (email) => {
  const re = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/);
  return re.test(email);
};

const checkFirstname = () => {  
  let valid = false;
  const min = 2, max = 25;
  const firstEl = document.querySelector('#first');
  const first = firstEl.value.trim();
  
  if (!isRequired(first)) {        
    showError(firstEl, 'Votre prénom est attendu.');
  } else if (isNumber(first)) {        
    showError(firstEl, 'Votre prénom ne doit pas contenir de nombre.');
  } else if (isCharSpe(first)) {        
    showError(firstEl, 'Votre prénom ne doit pas contenir de caractère spécial.');
  } else if (!isBetween(first.length, min, max)) {
    showError(firstEl, `Votre prénom doit être entre ${min} et ${max} caractères.`);
  } else {        
    showSuccess(firstEl, `Votre prénom est ${first}.`);
    valid = true;
  }
  return valid;
};

const checkLastname = () => {  
  let valid = false;
  const min = 3, max = 25;
  const lastEl = document.querySelector('#last');
  const last = lastEl.value.trim(); 
    
  if (!isRequired(last)) {        
    showError(lastEl, 'Votre nom de famille est absent.');
  } else if (isNumber(last)) {        
    showError(lastEl, 'Votre nom de famille ne doit pas contenir de nombre.');
  } else if (isCharSpe(last)) {        
    showError(lastEl, 'Votre nom de famille ne doit pas contenir de caractère spécial.');
  } else if (!isBetween(last.length, min, max)) {
    showError(lastEl, `Votre nom de famille doit être entre ${min} et ${max} caractères.`);
  } else {        
    showSuccess(lastEl, `Votre nom de famille est ${last}.`);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const emailEl = document.querySelector('#email');
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
      showError(emailEl, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
      showError(emailEl, 'Email is not valid.');
  } else {
      showSuccess(emailEl, `Votre email est ${email}. `);
      valid = true;
  }
  return valid;
};

const checkBirthdate = () => {  
  let valid = false;
  const birthdateEl = document.querySelector('#birthdate');
  const bDay = birthdateEl.value;
  const dob = new Date(bDay);  
  let age = new Date().getFullYear() - dob.getFullYear();
  
  if (!isRequired(dob) || 
      isNaN(dob.getDate()) ||
      dob.getFullYear()>new Date().getFullYear() || 
      dob.getFullYear()<1920) {
    showError(birthdateEl, 'Date de naissance invalid ou absent !');
    valid;
  } else if(age<=18) {
    showError(birthdateEl, 'Vous n\'êtes pas majeur !');
    valid;
  }
  else {
    showSuccess(birthdateEl, `Vous avez ${age} ans. Ok ! `);
    valid = true;    
  }
  return valid;
};

// data validation
function validate(e) {
  let valid = false;  
  
  // prevent the form from submitting
  e.preventDefault();

  // validate fields
  let isFirstnameValid = checkFirstname(), 
      isLastnameValid = checkLastname(),
      isEmailValid = checkEmail(),
      isBirthdateValid = checkBirthdate()/*,
      isQuantityValid = checkQuantity(), 
      isRadioValid = checkRadio()*/;

  let isFormValid = isFirstnameValid && 
                    isLastnameValid && 
                    isEmailValid && 
                    isBirthdateValid /*&&
                    isQuantityValid && 
                    isRadioValid*/;

  // submit to the server if the form is valid
  if (isFormValid) {
    valid = true;
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
      break;/*
    case 'quantity':
      checkQuantity();
      break;
    case 'location1':
      checkRadio();
      break;    */
  }
}));
