function editNav() {
  let x = document.getElementById("myTopnav");
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
const modalClose = document.querySelector(".close");// added
const message = document.querySelectorAll(".message");// added
const formTag = document.querySelector("form");//
formTag.id = "reserve";// add dynamically id form
const form = document.querySelector("#reserve");//
const firstName = document.querySelector("#first");//
const lastName = document.querySelector("#last");//
const emailEl = document.querySelector("#email");//
const birthDate = document.querySelector("#birthdate");//
const quantity = document.querySelector("#quantity");//
const locationName = document.getElementsByName("location");
const checkbox1 = document.querySelector("#checkbox1");//
const checkbox2 = document.querySelector("#checkbox2");//
const modalBody = document.querySelector(".modal-body");//
const content = document.querySelector(".content");//
const btnSignup = document.querySelector("button.btn-signup");//
const faBars = document.querySelector("#myTopnav a.icon .fa-bars");
const aIcon = document.querySelector("#myTopnav a.icon");
const logo = document.querySelector("#myTopnav .header-logo img");
const topNav = document.querySelector("#myTopnav");
const heroSection = document.querySelector(".hero-section");
const heroContent = document.querySelector(".hero-content");
const heroHeadline = document.querySelector("h1.hero-headline");
const pHeroText = document.querySelector("p.hero-text");
const heroImg = document.querySelector(".hero-img img");
const body = document.querySelector("body");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const pCopyrights = document.querySelector("footer p.copyrights");

const img = document.querySelector("img");

// media queries
// Create a condition that targets viewports at least 992px wide
const mediaQuery992 = window.matchMedia('(min-width: 992px)');

function handleTabletChange992(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query 992px Matched!');

    content.style.marginTop = "0px";
    modalbg.style.top = "0";
    modalbg.style.marginTop = "110px";

    topNav.style.display = 'flex';
    topNav.style.alignItems = 'center';
    topNav.style.justifyContent = 'space-between';
    topNav.style.margin = '20px';
    heroImg.style.width = '100%';
    heroImg.style.height = '100%';
    heroImg.style.objectFit = 'cover';
    logo.style.height = '50px'; 
    logo.style.padding = '0 16px';         
    heroHeadline.style.fontSize = '80px';    
    heroContent.style.margin = '0px';
    heroContent.style.padding = '80px';
    pHeroText.style.fontSize = '16px';
    pHeroText.style.margin = '20px 1px';
    pHeroText.style.paddingRight = '100px';    
    heroImg.style.margin = '0px';
    pCopyrights.style.margin = '0px';    
    pHeroText.style.zIndex = '100';
    heroContent.style.zIndex = '1';
    heroImg.style.zIndex = '10';
    footer.style.padding = '0px';
  }
}

// Register event listener for 992px wide
mediaQuery992.addEventListener('change', handleTabletChange992);

// Initial check for 992px wide
handleTabletChange992(mediaQuery992);

// Create a condition that targets viewports at least 768px wide
const mediaQuery768 = window.matchMedia('(max-width: 768px) and (min-width: 376px)');

function handleTabletChange768(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query 768px Matched!'); 

    content.style.marginTop = "0px";
    modalbg.style.top = "0";
    modalbg.style.marginTop = "110px";
    
    topNav.style.display = 'flex';
    topNav.style.alignItems = 'center';
    topNav.style.justifyContent = 'space-between';
    topNav.style.margin = '20px';
    logo.style.height = '70px'; 
    logo.style.padding = '16px'; 
    faBars.style.fontSize = '40px';
    faBars.style.borderRadius = '35%';
    faBars.style.border = '2px solid transparent';
    aIcon.style.margin = '0px';
    aIcon.style.marginRight = '6px';
    aIcon.style.marginLeft = '6px';
    aIcon.style.marginTop = '6px';
    aIcon.style.padding = '1px';
    heroHeadline.style.fontSize = '70px';
    heroContent.style.margin = '0px';
    heroContent.style.padding = '40px';
    pHeroText.style.fontSize = '20px';
    pHeroText.style.margin = '20px 1px';
    pHeroText.style.paddingRight = '0px';
    heroImg.style.width = '100%';
    heroImg.style.height = '100%';
    heroImg.style.objectFit = 'cover';
    heroImg.style.margin = '0px';
    pCopyrights.style.margin = '0px';
    footer.style.padding = '0px';
  }  
}

// Register event listener for 768px wide
mediaQuery768.addEventListener('change', handleTabletChange768);

// Initial check for 768px wide
handleTabletChange768(mediaQuery768);

// Create a condition that targets viewports at least 375px wide
const mediaQuery375 = window.matchMedia('(max-width: 376px)');

function handleTabletChange375(e) {  
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query 375px Matched!');

    content.style.marginTop = "0px";
    modalbg.style.margin = "0 auto";
    modalbg.style.marginTop = "55px";

    topNav.style.display = 'flex';
    topNav.style.alignItems = 'center';
    topNav.style.justifyContent = 'space-between';
    topNav.style.margin = '12px 10px';
    logo.style.height = '28px'; 
    logo.style.padding = '0 16px'; 
    faBars.style.fontSize = '26px';
    faBars.style.color = "#FF0000";
    heroHeadline.style.display = 'flex';
    heroHeadline.style.alignItems = 'flex-start';
    heroHeadline.style.justifyContent = 'flex-start';
    heroHeadline.style.flexWrap = 'wrap';
    heroHeadline.style.fontSize = '38px';
    heroContent.style.margin = '0 0 10px';
    heroContent.style.padding = '10px';
    
    pHeroText.style.display = 'flex';
    pHeroText.style.alignItems = 'flex-start';
    pHeroText.style.justifyContent = 'flex-start';
    pHeroText.style.flexWrap = 'wrap';

    pHeroText.style.minWidth = '375px';
    pHeroText.style.fontSize = '14px';
    pHeroText.style.margin = '20px 5px';
    pHeroText.style.paddingRight = '50px';
    heroImg.style.margin = '0px';
    pCopyrights.style.margin = '0px';            
  }
}

// Register event listener for 375px wide
mediaQuery375.addEventListener('change', handleTabletChange375);

// Initial check for 375px wide
handleTabletChange375(mediaQuery375);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";  
  modalbg.style.backgroundColor = "transparent";  
  window.scrollTo({ top:'-50px', left: 0, behavior: 'smooth' });  
}

// down modal event
modalClose.addEventListener("click", downModal);//

// down modal form
function downModal() {//
  modalbg.style.display = "none";//
  form.reset();//
  const messagesReset = document.querySelectorAll('.message');//
  const inputsReset = document.querySelectorAll('input');//  
  messagesReset.forEach(message => {//
      message.textContent = '';//     
  });//
  inputsReset.forEach(borders => {//
    borders.style.border = '2px solid transparent';//      
  });//
}

// add all the elements inside modal which you want to make focusable
const  focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), radio, check-box'; 

const modal = document.querySelector('#reserve'); // select the modal by it's id

const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
const focusableContent = modal.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

document.addEventListener('keydown', function(e) {
  let isTabPressed = e.key === 'Tab' || e.code === 9;

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) { // if shift key pressed for shift + tab combination
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus(); // add focus for the last focusable element      
      e.preventDefault();
    }
  } else { // if tab key is pressed
    if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstFocusableElement.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  }
});

firstFocusableElement.focus();

// main navbar properties
faBars.style.paddingRight = "0px";
faBars.style.marginRight = "0px";
faBars.style.color = "#FF0000";
faBars.style.textAlign = "center";

// add dynamically message div
for (let i = 0; formData.length > i; i++) {//
  let elDiv = document.createElement("div");//
  elDiv.classList.add("message");//
  formData[i].appendChild(elDiv);//    
}

// show success function
const showSuccess = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class and add the success class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message and show the success message
  const error = formField.querySelector('.message');
  const success = formField.querySelector('.message');
  success.style.color = "#00FF00";
  input.style.border = "4px solid #00FF00";  
  success.style.fontSize = "14px";
  success.style.fontWeight = "100";
  success.style.marginBottom = "10px";
  error.textContent = '';
  success.textContent = message;
};

// show error function
const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the success class and add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // hide the error message and show the error message
  const error = formField.querySelector('.message');
  const success = formField.querySelector('.message');
  error.style.color = "#ff4858";
  input.style.border = "4px solid #FF0000";
  error.style.fontSize = "14px";
  error.style.fontWeight = "100";
  error.style.marginBottom = "10px";
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

const checkFirstName = () => {  
  let valid = false;
  const min = 2, max = 25;
  const first = firstName.value.trim();
  
  if (!isRequired(first)) {        
    showError(firstName, 'Votre prénom est attendu.');
  } else if (isNumber(first)) {        
    showError(firstName, 'Votre prénom ne doit pas contenir de nombre.');
  } else if (isCharSpe(first)) {        
    showError(firstName, 'Votre prénom ne doit pas contenir de caractère spécial.');
  } else if (!isBetween(first.length, min, max)) {
    showError(firstName, `Votre prénom doit être entre ${min} et ${max} caractères.`);
  } else {        
    showSuccess(firstName, `Votre prénom est ${first}.`);
    valid = true;
  }
  return valid;
};

const checkLastName = () => {  
  let valid = false;
  const min = 3, max = 25;
  const last = lastName.value.trim(); 
    
  if (!isRequired(last)) {        
    showError(lastName, 'Votre nom de famille est absent.');
  } else if (isNumber(last)) {        
    showError(lastName, 'Votre nom de famille ne doit pas contenir de nombre.');
  } else if (isCharSpe(last)) {        
    showError(lastName, 'Votre nom de famille ne doit pas contenir de caractère spécial.');
  } else if (!isBetween(last.length, min, max)) {
    showError(lastName, `Votre nom de famille doit être entre ${min} et ${max} caractères.`);
  } else {        
    showSuccess(lastName, `Votre nom de famille est ${last}.`);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();

  if (!isRequired(email)) {
      showError(emailEl, 'Votre email ne peut rester vide.');
  } else if (!isEmailValid(email)) {
      showError(emailEl, 'Votre email n\'est pas valide.');
  } else {
      showSuccess(emailEl, `Votre email est ${email}. `);
      valid = true;
  }
  return valid;
};

const checkBirthdate = () => {  
  let valid = false;
  const bDay = birthDate.value;
  const dob = new Date(bDay);  
  let age = new Date().getFullYear() - dob.getFullYear();
  
  if (!isRequired(dob.getDay()) || 
      !isRequired(dob.getMonth()) ||
      !isRequired(dob.getFullYear()) ||
      isNaN(dob.getDate()) ||
      dob.getFullYear()>new Date().getFullYear() || 
      dob.getFullYear()<1920) {
    showError(birthDate, 'Date de naissance invalid ou absent !');
  } else if (age <= 18) {
    showError(birthDate, 'Vous n\'êtes pas majeur !');
  }
  else {
    showSuccess(birthDate, `Ok ! Vous avez ${age} ans. `);
    valid = true;    
  }
  return valid;
};

const checkQuantity = () => {
  let valid = false;
  const quant = quantity.value;

  if (isNaN(quant)) {
    showError(quantity, 'Nombre de tournois GameOn participé non pertinent !');
  }  else if ((quant) >= 100) {
    showError(quantity, 'Nombre de tournois GameOn doit être inférieur à cent !');
  } else if (!isRequired(quant)) {
    showError(quantity, 'Votre participation à un tournoi GameOn est absent ! ');    
  } else if (quant == 0) {
    showSuccess(quantity, 'Vous n\'avez participé à aucun tournoi GameOn. ');
    valid = true;    
  } else if (quant == 1) {
    showSuccess(quantity, 'Vous avez déjà participé à un tournoi GameOn. ');
    valid = true;
  } else {
    showSuccess(quantity, `Vous avez participé à ${quant} tournois GameOn.`);
    valid = true;    
  }
  return valid;
};

const checkLocation = () => {
  let valid = false;
  let len = locationName.length;

  for (let i = 1; i < len; i++) {//    
    const getSelectedValue = document.querySelector( 'input[name="location"]:checked'); 
    const location = document.querySelector(`#location${i+1}`);//
    if (getSelectedValue) {//
      valid = true;      
      showSuccess(location, `Vous voulez participez au tournoi de ${getSelectedValue.value}. `);
    } else if (!getSelectedValue) showError(location, 'Vous devriez choisir une ville pour participer ! ');    
  } 
  return valid;
};

const checkBox = () => {
  let valid = false;
  const br = document.createElement('br');
  const checkBox1 = document.querySelector( 'input[id="checkbox1"]:checked');
  const checkBox2 = document.querySelector( 'input[id="checkbox2"]:checked');
  if (checkBox1 && checkBox2) {
    showSuccess(checkbox1, 'Vous avez lu le CGU et merci pour votre abonnement à notre newsletter ! ');    
    valid = true;
  } else if (checkBox1) {
    showSuccess(checkbox2, 'Vous avez lu le CGU. Merci d\'avoir cocher ! ');
    valid = true;
  } else {
    showError(checkbox1, 'Vous n\'avez pas cocher ! N\'avez vous pas lu le CGU ? ' );
  }
  return valid;
};

// data validation
form.addEventListener('submit', validate);
function validate(event) {    
  let valid = false;  
  // validate fields
  let isFirstNameValid = checkFirstName(),
      isLastNameValid = checkLastName(),
      isEmailValid = checkEmail(),
      isBirthdateValid = checkBirthdate(),
      isQuantityValid = checkQuantity(),
      isLocationValid = checkLocation(),
      isCheckBoxValid = checkBox();

  let isFormValid = isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isBirthdateValid &&
      isQuantityValid && 
      isLocationValid && 
      isCheckBoxValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    modalbg.style.textAlign = "center";
    modalbg.style.margin = "0 auto";
    modalbg.style.marginTop = "50px";
    modalbg.innerHTML = 
      `<div class="content">
          <span class="close"></span>
          <div class="modal-body">
              <p>Merci pour</p>
              <p>votre inscription</p>        
          </div>
          <button class="think" type="button">
            <a href='../html/index.html'>Fermer</a>
          </button>
      </div>`;
      const $content = document.querySelector('.content');
      $content.style.height = '715px';
      $content.style.maxWidth = '500px';
      const $modalBody = document.querySelector('.modal-body');
      $modalBody.style.display = 'flex';
      $modalBody.style.flexDirection = 'column';
      $modalBody.style.alignItems = 'center';
      $modalBody.style.marginTop = '270px';
      const $button = document.querySelector('.think');
      $button.style.width = '200px';
      $button.style.height = '40px';
      $button.style.fontSize = '20px';
      $button.style.marginTop = '230px';
      $button.style.marginBottom = '20px';
      $button.style.backgroundColor = '#F00';
      $button.style.border = '#FFF';
      $button.style.borderRadius = '10px';
      const $buttonAnchor = document.querySelector('.think a');
      $buttonAnchor.style.textDecoration = 'none';
      $buttonAnchor.style.color = '#FFF';
      // close the modal
      const $close = document.querySelector('.close');
      $close.addEventListener("click", () => {
        modalbg.style.display = "none";
      });
      window.scrollTo({ 
      top: '-60px', 
      left: 0, 
      behavior: 'smooth' 
    });    
    valid = true;
  } 
  return valid;
}

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
      // cancel the previous timer
      if (timeoutId) {
          clearTimeout(timeoutId);
      }
      // setup a new timer
      timeoutId = setTimeout(() => {
          fn.apply(null, args);
      }, delay);
  };
};

form.addEventListener('input', debounce(function (e) {
  switch (e.target.id) {
      case 'first':
        checkFirstName();
        break;
      case 'last':
        checkLastName();
        break;
      case 'email':
        checkEmail();
        break;      
      case 'birthdate':
        checkBirthdate();
        break;
      case 'quantity':
        checkQuantity();
        break;
      case 'location1':
        checkLocation();
        break;
      case 'location2':
        checkLocation();
        break;
      case 'location3':
        checkLocation();
        break;
      case 'location4':
        checkLocation();
        break;
      case 'location5':
        checkLocation();
        break;
      case 'location6':
        checkLocation();
        break;
      case 'checkbox1':
        checkBox();
        break;
      case 'checkbox2':
        checkBox();
        break;
  }
}));