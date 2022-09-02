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
const formData = document.querySelectorAll(".formData");//?
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
    const small = document.querySelectorAll(".message");
    small.forEach(message => {
        message.textContent = '';
    });
};

/* data validation */
const firstnameEl = document.querySelector('#first');
const lastnameEl = document.querySelector('#last');
const emailEl = document.querySelector('#email');
const birthdateEl = document.querySelector('#birthdate');
const locationEl = document.querySelectorAll('.location');

const form = document.querySelector('#reserve');

const checkFirstname = () => {

    let valid = false;

    const min = 2,
        max = 25;

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
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl, 'Email is valid.');
        valid = true;
    }
    return valid;
};

const checkBirthday = () => {
    let valid = false;
    const birthday = birthdayEl.value;

    if(birthday.match(hasDate)) {
        birthdayEl.focus();

        // Extract the string into month, date and year
        let splitDate = birthday.split('/');
        let dd = parseInt(splitDate[0]);
        let mm  = parseInt(splitDate[1]);
        let yy = parseInt(splitDate[2]);

        const d = new Date();
        let year = d.getFullYear();

        if(year-yy<18){

        }

        // Leap Year or not leap year
        if(yy % 100 == 0) {
            if(yy % 400 == 0) {
                // Create list of days of a month [leap year]
                var ListofDays = [31,29,31,30,31,30,31,31,30,31,30,31];
            } else {
                // Create list of days of a month [no leap year]
                var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
            }
        } else {
            if(yy % 4 == 0) {
                // List of days of a month [leap year]
                var ListofDays = [31,29,31,30,31,30,31,31,30,31,30,31];
            } else {
                // List of days of a month [no leap year]
                var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
            }
        }
        
        if (mm==1 || mm>2) {
            if (dd>ListofDays[mm-1]) {
                alert('Invalid date format!');
                return false;
            }
        }
        if (mm==2) {
            var lyear = false; 
            if ( (!(yy % 4) && yy % 100) || !(yy % 400)) {
                lyear = true;
            }
            if ((lyear==false) && (dd>=29)) {
                alert('Invalid date format!');
                return false;
            }
            if ((lyear==true) && (dd>29)) {
                alert('Invalid date format!');
                return false;
            }
        }
    } else { 
        alert("Invalid date format!");
        birthdayEl.focus();
        return false;
    }
};

const checkQuantity = () => {
    let valid = false;
    const min = 0, max = 99;
    const quantity = parseInt(quantityEl.value);
    if(isNaN(quantity)) {

    }

    if (!isRequired(lastname)) {        
        showError(lastnameEl, 'Lastname cannot be blank.');
    } else if (!isBetween(lastname.length, min, max)) {
        showError(lastnameEl, `Lastname must be between ${min} and ${max} characters.`);
    } else if (!hasNumber(lastname)) {        
        showError(lastnameEl, 'Lastname cannot be numeric.');
    } else {        
        showSuccess(lastnameEl, 'Lastname is valid.');
        valid = true;
    }
    return valid;

};

const checkLocation = () => {
    let valid = false;
    for (var i=0 ; i<locationEl.length ;i++) {
        if(locationEl[i].checked == true) {
            valid = true; 
        } else {
            alert ("Please Choose location");
        return false;
        }
    }
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

// Check an input is string of ASCII alphabets + numerics
const hasNumber = (notName) => {
    const re = /\d/;
    return re.test(notName);
};

// Check an input is date dd/mm/yyyy
const hasDate = (date) => {
    const re = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/;
    return re.match(date);
};

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;    
    
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('.message');
    error.style.color = "red";
    error.style.font = "15px verdana";
    error.textContent = message;
};

const showSuccess = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    
    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const success = formField.querySelector('.message');
    success.style.color = "green";
    success.style.font = "15px verdana";
    success.textContent = message;
}


function validate() {    
    // validate fields
    let isFirstnameValid = checkFirstname(), isLastnameValid = checkLastname(),
        isEmailValid = checkEmail();

    let isFormValid = isFirstnameValid && isLastnameValid && isEmailValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        return true;
    }
    return false;
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
    }
}));

//showError.style.color = "red";
//showSuccess.style.color = "green";

/*
// Select the form fields and add the function validate can be called when the form is submitted

const firstnameEl = document.querySelector('#first');
const lastnameEl = document.querySelector('#last');
const emailEl = document.querySelector('#email');
const birthdateEl = document.querySelector('#birthdate');
const quantityEl = document.querySelector('#quantity');
const locationEl = document.querySelectorAll('.location');
const checkbox1El = document.querySelector('#checkbox1');
const checkbox2El = document.querySelector('#checkbox2');

const checkFirstname = () => {

    let valid = false;

    const min = 2,
        max = 25;

    const firstname = firstnameEl.value.trim();

    if (!isRequired(firstname)) {
        showError(firstnameEl, 'Firstname cannot be blank.');
    } else if (!isBetween(firstname.length, min, max)) {
        showError(firstnameEl, `Firstname must be between ${min} and ${max} characters.  `)
    } else if (!isAlphabetic(firstname)) {
        showError(firstnameEl, 'Firstname alphabetic only.');
    } else {
        showSuccess(firstnameEl);
        valid = true;
    }
    return valid;
};

const checkLastname = () => {

    let valid = false;

    const min = 2,
        max = 25;

    const lastname = lastnameEl.value.trim();

    if (!isRequired(lastname)) {
        showError(lastnameEl, 'Lastname cannot be blank.');
    } else if (!isBetween(lastname.length, min, max)) {
        showError(lastnameEl, `Lastname must be between ${min} and ${max} characters.  `)
    } else if (!isAlphabetic(lastname)) {
        showError(lastnameEl, 'Lastname alphabetic only.');
    } else {
        showSuccess(lastnameEl);
        valid = true;
    }
    return valid;
};

// Function validate can be called when the form is submitted
function validate(e) {
    // prevent the form from submitting
    e.preventDefault();

};

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    formField.style.color = "green";

    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('.message');
    error.textContent = message;
};

const showSuccess = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    formField.style.color = "green";

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const success = formField.querySelector('.message');
    success.textContent = message;
}

/* Utility functions 

// Function isRequired returns true if the input argument is empty
const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

// Check an input is string of ASCII alphabets
const isAlphabetic = (string) => {
    const re = /^[a-zA-Z]$/;
    return re.test(string);
};

// Check the email is valid with a regular expression
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

// Check birthday
// Check the birthday is valid with a regular expression
const isBirthdayValid = (birthday) => {
    const re = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/;
    return re.match(birthday);
};


function validatedate(inputText) {
  var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/;
  // Match the date format through regular expression
  if(inputText.value.match(dateformat))
  {
  document.form1.text1.focus();
  //Test which seperator is used '/' or '-'
  var opera1 = inputText.value.split('/');
  var opera2 = inputText.value.split('-');
  lopera1 = opera1.length;
  lopera2 = opera2.length;
  // Extract the string into month, date and year
  if (lopera1>1)
  {
  var pdate = inputText.value.split('/');
  }
  else if (lopera2>1)
  {
  var pdate = inputText.value.split('-');
  }
  var dd = parseInt(pdate[0]);
  var mm  = parseInt(pdate[1]);
  var yy = parseInt(pdate[2]);
  // Create list of days of a month [assume there is no leap year by default]
  var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
  if (mm==1 || mm>2)
  {
  if (dd>ListofDays[mm-1])
  {
  alert('Invalid date format!');
  return false;
  }
  }
  if (mm==2)
  {
  var lyear = false;
  if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
  {
  lyear = true;
  }
  if ((lyear==false) && (dd>=29))
  {
  alert('Invalid date format!');
  return false;
  }
  if ((lyear==true) && (dd>29))
  {
  alert('Invalid date format!');
  return false;
  }
  }
  }
  else
  {
  alert("Invalid date format!");
  document.form1.text1.focus();
  return false;
  }
  }

  
  function radioValidation() {
    var gender = document.getElementsByName('gender');   
  var genValue = false;
  for (var i=0 ; i<gender.length ;i++){  
    if(gender[i].checked == true){ genValue = true; }
  }
  (!genValue){if
  ( );alert "Please Choose the gender"
  ;return false
  }
  }
  */