//import

import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

//for popup1

const profileForm = document.querySelector(".popup_edit");

const buttonEdit = document.querySelector(".profile__edit-button");

const profileFormClose = document.querySelector(".popup__close-button_profile");

const inputName = document.querySelector(".popup__info_name_active");
const inputJob = document.querySelector(".popup__info_job_active");

const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

const formProfileElement = document.querySelector(".popup__container_profile");

//for popup2

const popupAddCardForm = document.querySelector(".popup_add");

const formAddCard = document.querySelector(".popup__container_add");

const buttonAdd = document.querySelector(".profile__add-button");

const buttonAddClose = document.querySelector(".popup__close-button_add");

const inputElementName = document.querySelector(".popup__info_item");
const inputElementLink = document.querySelector(".popup__info_link");

const addCardSubmitButton = document.querySelector(".popup__submit-button_add");

//for popup3

const fullImageOpen = document.querySelector(".popup_pic");

const imgClose = document.querySelector(".popup__close-button_pic");

const imgForm = document.querySelector(".popup__image");

const imgTitle = document.querySelector(".popup__title_pic");

//cards

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//validationObjects

const validationObjects = {
  formSelector: ".popup__container",
  inputSelector: ".popup__info",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__info_type_error",
  errorClass: "popup__span-error_visible",
};

//validation

const profileFormValidation = new FormValidator (validationObjects, profileForm);
const popupAddCardFormValidation = new FormValidator (validationObjects, popupAddCardForm);
profileFormValidation.enableValidation();
popupAddCardFormValidation.enableValidation();

//cards function

const elementBox = document.querySelector(".elements");

function renderCard (data, cardTemplate, openFullSizeImage) {
  const card = new Card (data, cardTemplate, openFullSizeImage);
  return card.generateCard();
}

initialCards.forEach((item) => {
  const cardElement = renderCard (item, '.template', openFullSizeImage);
  elementBox.append(cardElement);
})

//popups open and close

const openPopup = function (popup)  {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEsc);
  popup.addEventListener("click", overlayClose);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByEsc);
  popup.removeEventListener("click", overlayClose);
  
}

//close popup by Esc

const closePopupByEsc = (evt) => {
  
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    closePopup(activePopup);
  };
};

//close popup overlay

function overlayClose(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  };
}

//popup1 open and close

function openProfilePopup() {
  openPopup(profileForm);
}

function closeProfilePopup() {
  closePopup(profileForm);
}

//popup1 open and edit

buttonEdit.addEventListener("click", function () {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  profileFormValidation.hideErrorMessage();
  openPopup(profileForm);
});

//popup1 submit and close

function submitProfileForm(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;

  closeProfilePopup();
};

buttonEdit.addEventListener("click", openProfilePopup);

profileFormClose.addEventListener("click", closeProfilePopup);

formProfileElement.addEventListener("submit", submitProfileForm);

//popup2 close 

function closeAddForm() {
  closePopup(popupAddCardForm);  
};

//popup2 open and add 

buttonAdd.addEventListener("click", () => {
  inputElementLink.value = "";
  inputElementName.value = "";  
  addCardSubmitButton.classList.add("popup__submit-button_disabled");
  addCardSubmitButton.disabled = true;
  formAddCard.reset();
  popupAddCardFormValidation.hideErrorMessage();
  openPopup(popupAddCardForm);
});

//popup2 submit and close

function submitAddElementForm (evt) {
  evt.preventDefault ();  
  const newCard = renderCard ({name:inputElementName.value, link: inputElementLink.value},'.template', openFullSizeImage);
  elementBox.prepend(newCard);

  closePopup(popupAddCardForm);
  formAddCard.reset();
}

buttonAddClose.addEventListener("click", closeAddForm);

formAddCard.addEventListener("submit", submitAddElementForm);

//popup3 open fullsize image

function openFullSizeImage() {
  imgTitle.textContent = this._name;
  imgForm.src = this._src;
  imgForm.alt = this._name;
  openPopup(fullImageOpen);
}

//popup3 close

imgClose.addEventListener("click", () => closePopup(fullImageOpen));