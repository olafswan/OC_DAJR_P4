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

// issue#2: Implémenter entrées du formulaire
// ------------------------------------------
// get first
const first = document.getElementById("first");

// get first value
const firstValue = first.value;

// get first value bis
const firstValue2 = document.getElementById("first").value;
// ------------------------------------------

// testing mode
// ------------
const testingBtn = document.querySelector(".testing");
testingBtn.addEventListener("click", testingMode);
function testingMode() {
  // input tests below
  console.log("testingMode is on");
  console.log(first);
  console.log(firstValue);
  console.log(firstValue2);
  console.log("testingMode is off");
}
// ------------
