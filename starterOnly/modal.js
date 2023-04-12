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
// -------------------------
// issue#1: fermer la modale
// -------------------------

// DOM Elements
const closeBtn = document.querySelector(".close");

// close modal event
closeBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
// -------------------------

// ------------------------------------------
// issue#2: Implémenter entrées du formulaire
// ------------------------------------------

// start livecoding with emeric

function getValue(inputId) {
  const input = document.getElementById(inputId);
  return input.value;
}

// const inputIds = ["first", "last", ""]

const inputsIds = [{ id: "first", errorMessage: "mon message" }];

for (let index = 0; index < inputsIds.length; index++) {
  const input = inputsIds[index];
  let inputValue = getValue(input.id);
  console.log(inputValue);
  // utiliser switch
}

const formInputs = {
  first: [
    firstIsValid,
    "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  ],
  last: [
    lastIsValid,
    "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  ],
  email: [emailIsValid, "Veuillez entrer une adresse e-mail valide."],
  birthdate: [birthdateIsValid, "Vous devez entrer votre date de naissance."],
  quantity: [quantityIsValid, "Veuillez entrer un nombre."],
  location: [locationIsValid, "Vous devez choisir une option."],
  conditions: [
    conditionsIsValid,
    "Vous devez accepter les termes et conditions.",
  ],
};

// end livecoding with emeric

// get first
let first = document.getElementById("first");

// get first value
let firstValue = first.value;

// get first value bis
let firstValue2 = document.getElementById("first").value;

// get first value length
let firstValueLength = firstValue.length;

// check if a value length is valid
function lengthIsLongEnough(valueLength) {
  return valueLength >= 2;
}

// check if first value length is valid
let firstIsValid = lengthIsLongEnough(firstValueLength);

// get last value
const lastValue = document.getElementById("last").value;

// get last value length
const lastValueLength = document.getElementById("last").value.length;

// check if last value length is valid
const lastIsValid = lengthIsLongEnough(lastValueLength);

// get email value
const emailValue = document.getElementById("email").value;

// check if email is valid
function emailChecker(email) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}
const emailIsValid = emailChecker(emailValue);

// get birthdate
const birthdateValue = document.getElementById("birthdate").value;

// check if birthdate is valid
function birthdateChecker(birthdate) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
    birthdate
  );
}
const birthdateIsValid = birthdateChecker(birthdateValue);

// get quantity
const quantityValue = document.getElementById("quantity").value;

// check if quantity is a number
function numberChecker(string) {
  return /^\d+$/.test(string);
}
const quantityIsValid = numberChecker(quantityValue);

// location is checked
function locationChecker() {
  return !document.querySelector('input[name="location"]:checked')
    ? false
    : true;
}

// check if location is checked
const locationIsValid = locationChecker();

// TODO verify why it doesn't work with an anonymous function
// const locationIsValid2 = function () {
//   return !document.querySelector('input[name="location"]:checked')
//     ? false
//     : true;
// };

// conditions is checked
function conditionsChecker() {
  return !document.querySelector('input[id="checkbox1"]:checked')
    ? false
    : true;
}

// check if conditions is checked
const conditionsIsValid = conditionsChecker();

// TODO prevent modal close and save data if form is unvalid

// ------------------------------------------

// ------------------------------------------------
// issue#3: Ajouter validation ou messages d'erreur
// ------------------------------------------------
// pour chaque input si checkInput est faux afficher la pseudo class after corespondante
const formInputs = {
  first: [
    firstIsValid,
    "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  ],
  last: [
    lastIsValid,
    "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  ],
  email: [emailIsValid, "Veuillez entrer une adresse e-mail valide."],
  birthdate: [birthdateIsValid, "Vous devez entrer votre date de naissance."],
  quantity: [quantityIsValid, "Veuillez entrer un nombre."],
  location: [locationIsValid, "Vous devez choisir une option."],
  conditions: [
    conditionsIsValid,
    "Vous devez accepter les termes et conditions.",
  ],
};

function showErrorMessage(inputName) {
  if (!formInputs[inputName][0]) {
    // ajouter formInputs.name[1] au content du after correspondant
    console.log("input: " + inputName);
    console.log(formInputs[inputName][1]);
  }
}

// const formData = document.querySelectorAll(".formData");

// check each input looking for error
function checkForError() {
  for (const [key, value] of Object.entries(formInputs)) {
    showErrorMessage(key);
  }
}

// ------------------------------------------------

// ------------
// testing mode
// ------------
const testingBtn = document.querySelector(".testing");
testingBtn.addEventListener("click", testingMode);
function testingMode() {
  // input tests below
  // console.log("testingMode is on");
  // console.log(first);
  // console.log(firstValue);
  // console.log(firstValue2);
  // console.log("testingMode is off");
  // console.log("testingMode is on");

  // console.log("--- CHECK FIRST");
  // console.log(firstValue.length);
  // console.log(firstValueLength);

  // console.log("--- CHECK LAST");
  // console.log(lastValueLength);
  // console.log(lengthIsLongEnough(lastValueLength));

  // console.log("--- CHECK EMAIL");
  // console.log(emailValue);
  // console.log(emailChecker(emailValue));

  // console.log(emailIsValid);
  // console.log("testingMode is off");

  // console.log("--- CHECK QUANTITY");
  // console.log(quantityIsValid);
  console.log(showErrorMessage(first));
}

// ------------
