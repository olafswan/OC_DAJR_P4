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
  // ajoute la classe data-error-visible
  element.setAttribute("data-error-visible", "true");
  // TODO comprendre comment la classe : data-error-visible="true"
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
        if (inputValue.length >= 2) {
          // fait passer la "bonne" variable sur true
          inputId === "first" ? (firstIsValid = true) : (lastIsValid = true);
        } else {
          // fait passer la "bonne" variable sur false
          inputId === "first" ? (firstIsValid = false) : (lastIsValid = false);
          // affiche le message d'erreur sur l'input
          showError(input.closest(".formData"), inputErrorMessage);
          // TODO trouver comment remplacer first par la variable inputId pour grouper les case first et last
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

  // console.log("********************");
  // console.log("*TEST RADIO BUTTONS*");
  // console.log("methode 1 (retourne null si aucun radio coché)");
  // console.log(
  //   "document.querySelector('input[name=\"location\"]:checked')",
  //   document.querySelector('input[name="location"]:checked')
  // );

  // console.log("methode 2 (retourne false si aucun radio coché)");
  // console.log("checkRadioSelected", checkRadioSelected());

  // console.log("location is valid ?", locationIsValid);
  // console.log("********************");

  // console.log("********************");
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
