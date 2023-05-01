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

// event click sur btn
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// fonction ouverture de la modal
function launchModal() {
  modalbg.style.display = "block";
  // previent le scroll du body quand la modal est ouverte
  document.body.style.position = "fixed";
}

// DOM Elements
const closeBtn = document.querySelector(".close");

// event click sur close
closeBtn.addEventListener("click", closeModal);

// fonction fermeture de la modal
function closeModal() {
  modalbg.style.display = "none";
  // autorise à nouveau le scroll du body
  const scrollY = document.body.style.top;
  document.body.style.position = "";
}

// comportement du bouton submit
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  // empeche la modal de se fermer au click
  e.preventDefault();
  // si le formulaire n'a pas encore été validé
  if (submitBtn.value == "C'est parti") {
    // lancer la fonction de test des inputs
    testInputsValidity();
  } else {
    // fermer la modale
    closeModal();
    restoreForm();
  }
});

// récupère les données entrées dans un champ en fonction de son id
function getValue(inputId) {
  const input = document.getElementById(inputId);
  return input.value;
}
// stockage des id des inputs avec leur messages d'erreur associés
// TODO ajouter une key isValid pour controler la validité de l'input ? utilisation d'un constructor ?
const inputsIds = [
  {
    id: "first",
    errorMessage: "Veuillez entrer 2 caractères ou plus",
  },
  {
    id: "last",
    errorMessage: "Veuillez entrer 2 caractères ou plus",
  },
  {
    id: "email",
    errorMessage: "Veuillez entrer une adresse e-mail valide",
  },
  {
    id: "birthdate",
    errorMessage:
      "Veuillez entrer une date de naissance valide (mois/jour/année)",
  },
  {
    id: "quantity",
    errorMessage: "Veuillez entrer un nombre en chiffres",
  },
  {
    id: "location1",
    errorMessage: "Veuillez choisir un tournoi",
  },
  {
    id: "checkbox1",
    errorMessage: "Veuillez accepter les conditions d'utilisations",
  },
];

// afficher le message d'erreur et la classe CSS erreur
function showError(element, message) {
  // ajoute la classe data-error-visible
  element.setAttribute("data-error-visible", "true");
  // TODO comprendre la synthaxe de la classe CSS : data-error-visible="true"
  // ajoute le message d'erreur en content de l'after
  element.setAttribute("data-error", message);
}

// masquer le message d'erreur et la classe CSS erreur
function hideError(element) {
  element.setAttribute("data-error-visible", "false");
  element.removeAttribute("data-error");
}

// variable de l'état de la validité des inputs
let firstIsValid,
  lastIsValid,
  emailIsValid,
  birthdateIsValid,
  quantityIsValid,
  locationIsValid,
  conditionsIsValid;

// vérifier si un des boutons radios est séléctionné
function checkRadioSelected() {
  const radios = document.getElementsByName("location");
  let selected = false;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selected = true;
      break;
    }
  }
  return selected;
}

// fonction pour vérifier la validité de tous les input et afficher les messaqges d'erreur
function testInputsValidity() {
  for (let index = 0; index < inputsIds.length; index++) {
    // stockage du nom de l'id (ex: first)
    const inputId = inputsIds[index].id;
    const input = document.getElementById(inputId);

    // stockage du message d'erreur correspondant (ex: Veuillez entrer 2 caractères)
    const inputErrorMessage = inputsIds[index].errorMessage;

    // stockage de la valeur saisie par l'utilisateur (ex John)
    let inputValue = getValue(inputId);

    // switch des differents inputs
    switch (inputId) {
      case "first":
      case "last":
        // enlève l'eventuel message d'erreur
        hideError(input.closest(".formData"));
        // verifie la condition de validité de la donnée
        if (inputValue.length >= 2 && /\D+/g.test(inputValue)) {
          // fait passer la "bonne" variable sur true
          inputId === "first" ? (firstIsValid = true) : (lastIsValid = true);
        } else {
          // fait passer la "bonne" variable sur false
          inputId === "first" ? (firstIsValid = false) : (lastIsValid = false);
          // affiche le message d'erreur sur l'input
          showError(input.closest(".formData"), inputErrorMessage);
        }
        break;

      case "email":
      case "birthdate":
        // enlève l'eventuel message d'erreur
        hideError(input.closest(".formData"));
        // choisis le bon regex en fonction de l'id (email ou birthdate)
        const regex =
          inputId === "email"
            ? /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            : /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
        // verifie la condition de validité de la donnée
        if (regex.test(inputValue)) {
          // fait passer la "bonne" variable sur true
          inputId === "email"
            ? (emailIsValid = true)
            : (birthdateIsValid = true);
        } else {
          // fait passer la "bonne" variable sur false
          inputId === "email"
            ? (emailIsValid = false)
            : (birthdateIsValid = false);
          // affiche le message d'erreur sur l'input
          showError(input.closest(".formData"), inputErrorMessage);
        }
        break;

      case "quantity":
        // enlève l'eventuel message d'erreur
        hideError(quantity.closest(".formData"));
        // verifie la condition de validité de la donnée
        if (/^\d+$/.test(inputValue) && inputValue >= 0) {
          // fait passer la variable sur true
          quantityIsValid = true;
        } else {
          // fait passer la variable sur false
          quantityIsValid = false;
          // affiche le message d'erreur sur l'input
          showError(quantity.closest(".formData"), inputErrorMessage);
        }
        break;

      case "location1":
        // enlève l'eventuel message d'erreur
        hideError(location1.closest(".formData"));
        // verifie la condition de validité de la donnée
        if (checkRadioSelected()) {
          // fait passer la variable sur true
          locationIsValid = true;
        } else {
          // fait passer la variable sur false
          locationIsValid = false;
          // affiche le message d'erreur sur l'input
          showError(location1.closest(".formData"), inputErrorMessage);
        }
        break;

      case "checkbox1":
        // enlève l'eventuel message d'erreur
        hideError(checkbox1.closest(".formData"));
        // verifie la condition de validité de la donnée
        if (document.querySelector('input[id="checkbox1"]:checked')) {
          // fait passer la variable sur true
          conditionsIsValid = true;
        } else {
          // fait passer la variable sur false
          conditionsIsValid = false;
          // affiche le message d'erreur sur l'input
          showError(checkbox1.closest(".formData"), inputErrorMessage);
        }
        break;
    }
  }

  // verifier si tous les inputs sont valides
  let formIsValid =
    firstIsValid &&
    lastIsValid &&
    emailIsValid &&
    birthdateIsValid &&
    quantityIsValid &&
    locationIsValid &&
    conditionsIsValid;

  // valide le formulaire s'il est valide
  if (formIsValid) {
    console.log("*** Formulaire valide ! ***");
    // efface le formulaire
    form.reset();
    // affiche le message de confirmation d'inscription
    showConfirmationMessage();
  } else {
    console.log("*** Formulaire invalide ! ***");
  }
}

// selection des elements du DOM
const modalElements = document.querySelectorAll(".formData");
const modalElements2 = document.querySelector(".text-label");
const submitBtn = document.querySelector(".btn-submit");
const modalBody = document.querySelector(".modal-body");

// affiche le message de remerciement
function showConfirmationMessage() {
  // masquage des elements du formulaire
  for (var i = 0; i < modalElements.length; i++) {
    // ajout de la classe hidden à tous les elements de classe .formData
    modalElements[i].classList.add("hidden");
  }
  // ajout de la classe hidden à  l'element de classe .text-label
  modalElements2.classList.add("hidden");

  // modification du contenu du bouton submit
  submitBtn.value = "Fermer";

  // création d'un div
  const div = document.createElement("div");
  // ajout d'HTML dans cette div
  div.innerHTML = "Merci pour<br />votre inscription";
  // ajout d'une class CSS à cette div
  div.classList.add("text-confirmation");
  // ajout de cette div en enfant de l'element de class modal-body
  modalBody.append(div);
}

// reinitialisation du formulaire
function restoreForm() {
  // suppresion du message de remerciement
  const div = document.querySelector(".text-confirmation");
  div.remove();
  // boucle sur la nodelist des elements de classe .formData
  for (var i = 0; i < modalElements.length; i++) {
    // suppression de la classe hidden à tous les elements de classe .formData
    modalElements[i].classList.remove("hidden");
  }
  // suppression de la classe hidden à l'elements de classe .text-label
  modalElements2.classList.remove("hidden");
  // modification du contenu du bouton submit
  submitBtn.value = "C'est parti";
}

// TEST MODE (désactive les type input email, date et number pour tester le contrôle des inputs)

// -----------
// Konami Code
const pattern = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
let current = 0;
var keyHandler = function (event) {
  // si la touche n'est pas le bonne remettre à 0 la variable current
  if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
    current = 0;
    return;
  }
  // incrémente la variable current
  console.log("🚀 ~ file: modal.js:321 ~ keyHandler ~ current:", current);
  current++;
  // si le code est complet reset current
  if (pattern.length === current) {
    current = 0;
    // toggle la fonction test
    document.getElementById("email").type == "email" ? testOn() : testOff();
  }
};

// Listen for keydown events
document.addEventListener("keydown", keyHandler, false);
// -----------

// active le mode test (désactive le type mail, date)
function testOn() {
  document.getElementById("email").type = "text";
  document.getElementById("birthdate").type = "text";
  document.getElementById("quantity").type = "text";
}

// active le mode test (désactive le type mail, date)
function testOff() {
  document.getElementById("email").type = "email";
  document.getElementById("birthdate").type = "date";
  document.getElementById("quantity").type = "number";
}
