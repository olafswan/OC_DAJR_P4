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
}

// DOM Elements
const closeBtn = document.querySelector(".close");

// event click sur close
closeBtn.addEventListener("click", closeModal);

// fonction fermeture de la modal
function closeModal() {
  modalbg.style.display = "none";
}

// comportement du bouton submit
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  // empeche la modal de se fermer au click
  e.preventDefault();
  // lance la fonction de test des inputs
  testInputsValidity();
});

// récupère les données entrées dans un champ en fonction de son id
function getValue(inputId) {
  const input = document.getElementById(inputId);
  return input.value;
}
// stockage des id des inputs avec leur messages d'erreur associés
// TODO ajouter une key isValid pour controler la validité de l'input ? utilisation d'un constructor
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
  element.setAttribute("data-error-visible", "true");
  // TODO comprendre comment la classe : data-error-visible="true"
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

// fonction pour vérifier la validité de tous les input et afficher les messaqges d'erreur
function testInputsValidity() {
  for (let index = 0; index < inputsIds.length; index++) {
    // stockage du nom de l'id (ex: first)
    const inputId = inputsIds[index].id;

    // stockage du message d'erreur correspondant (ex: Veuillez entrer 2 caractères)
    const inputErrorMessage = inputsIds[index].errorMessage;

    // stockage de la valeur saisie par l'utilisateur (ex John)
    let inputValue = getValue(inputId);

    // switch des differents inputs
    switch (inputId) {
      case "first":
        // enlève l'eventuel message d'erreur
        hideError(first.closest(".formData"));
        // verifie la condition de validité de la donnée
        if (inputValue.length >= 2) {
          // fait passer la variable sur true
          firstIsValid = true;
        } else {
          console.log("** error  in " + inputId);
          // fait passer al variable sur true
          firstIsValid = false;
          // affiche le message d'erreur sur l'input
          showError(first.closest(".formData"), inputErrorMessage);
          // TODO trouver comment remplacer first par la variable inputId pour grouper les case first et last
        }
        break;

      case "last":
        // enlève l'eventuel message d'erreur
        hideError(last.closest(".formData"));
        // verifie la condition de validité de la donnée
        if (inputValue.length >= 2) {
          // fait passer la variable sur true
          lastIsValid = true;
        } else {
          // fait passer la variable sur false
          lastIsValid = false;
          // affiche le message d'erreur sur l'input
          showError(last.closest(".formData"), inputErrorMessage);
        }
        break;

      case "email":
        // enlève l'eventuel message d'erreur
        hideError(email.closest(".formData"));
        // verifie la condition de validité de la donnée
        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputValue)) {
          // fait passer la variable sur true
          emailIsValid = true;
        } else {
          // fait passer la variable sur false
          emailIsValid = false;
          // affiche le message d'erreur sur l'input
          showError(email.closest(".formData"), inputErrorMessage);
        }
        break;

      case "birthdate":
        // enlève l'eventuel message d'erreur
        hideError(birthdate.closest(".formData"));
        // verifie la condition de validité de la donnée
        if (
          /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
            inputValue
          )
        ) {
          // fait passer la variable sur true
          birthdateIsValid = true;
        } else {
          // fait passer la variable sur false
          birthdateIsValid = false;
          // affiche le message d'erreur sur l'input
          showError(birthdate.closest(".formData"), inputErrorMessage);
        }
        break;

      case "quantity":
        // enlève l'eventuel message d'erreur
        hideError(quantity.closest(".formData"));
        // verifie la condition de validité de la donnée
        if (/^\d+$/.test(inputValue)) {
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
        // TODO check why if else don't work / locationIsValid is always true
        if (document.querySelector('input[name="location"]:checked')) {
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
        // TODO check why if else don't work / conditionsIsValid is always undefined
        if (document.querySelector('input[id="checkbox1"]:checked')) {
          // fait passer la variable sur true
          locationIsValid = true;
        } else {
          // fait passer la variable sur false
          locationIsValid = false;
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
    // ferme la modale
    closeModal();
    // affiche la fenetre de confirmation d'inscription
    setTimeout(() => {
      openConfirmation();
    }, 100);
  } else {
    console.log("*** Formulaire invalide ! ***");
  }

  console.log("first is valid ?", firstIsValid);
  console.log("last is valid ?", lastIsValid);
  console.log("email is valid ?", emailIsValid);
  console.log("birthdate is valid ?", birthdateIsValid);
  console.log("quantity is valid ?", quantityIsValid);
  console.log("location is valid ?", locationIsValid);
  console.log("conditions is valid ?", conditionsIsValid);
}

// fonction d'ouverture de la fenetre de confirmation d'inscription
function openConfirmation() {
  confirmationbg.style.display = "block";
}

// DOM Elements
const confirmationbg = document.querySelector(".bground-confirmation");
const closeConfirmationBtn = document.querySelector(".close-confirmation");
const submitConfirmationBtn = document.querySelector(
  ".btn-submit-confirmation"
);

// event click sur bouton close (X et Fermer)
closeConfirmationBtn.addEventListener("click", closeConfirmation);
submitConfirmationBtn.addEventListener("click", closeConfirmation);

// fonction de fermeture de la fenetre de confirmation
function closeConfirmation() {
  confirmationbg.style.display = "none";
}
