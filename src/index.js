/** import */

import { initialCards } from "../src/components/cards.js";
import { Card } from "../src/components/Card.js";
import { FormValidator } from "../src/components/FormValidator.js";

import { Section } from "../src/components/Section.js";
import { PopupWithImage } from "../src/components/PopupWithImage.js";
import { PopupWithForm } from "../src/components/PopupWithForm.js";
import { UserInfo } from "../src/components/UserInfo.js";

import "./pages/index.css";

/** for popup1 */

const formProfileElement = document.querySelector(".popup__container_profile");

const buttonEdit = document.querySelector(".profile__edit-button");

const profileNameDefault = document.querySelector(".popup__info_name_active");
const profileJobDefault = document.querySelector(".popup__info_job_active");

/** for popup2 */

const formAddCard = document.querySelector(".popup__container_add");

const buttonAdd = document.querySelector(".profile__add-button");

/** validationObjects */

const validationObjects = {
  formSelector: ".popup__container",
  inputSelector: ".popup__info",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__info_type_error",
  errorClass: "popup__span-error_visible",
};

/** validation */

const profileFormValidation = new FormValidator(
  validationObjects,
  formProfileElement
);

const popupAddCardFormValidation = new FormValidator(
  validationObjects,
  formAddCard
);

profileFormValidation.enableValidation();
popupAddCardFormValidation.enableValidation();

/** cards function */

const createCard = (item) => {
  const newCard = new Card(
    {handleCardClick: () => {openFullSizeImage.openPopup(item.link, item.name);}, data: item,}, ".template");
  return newCard.generateCard();
};

const elementsBox = new Section(
  {
    items: initialCards, renderer: (item) => {elementsBox.addItem(createCard(item));},
  },
  ".elements"
);

elementsBox.renderItems(initialCards);

/** popup1 */

const popupProfileForm = new PopupWithForm(".popup_edit", () => {
  profileInfo.setUserInfo();
});
popupProfileForm.setEventListeners();

const profileInfo = new UserInfo({
  profileName: ".profile__title",
  profileJob: ".profile__subtitle",
});
profileInfo.getUserInfo();

buttonEdit.addEventListener("click", () => {
  const newProfileInfo = profileInfo.getUserInfo();
  profileNameDefault.value = newProfileInfo.name;
  profileJobDefault.value = newProfileInfo.job;  
  popupProfileForm.openPopup();
});

/** popup2 */

const popupAddCardSubmitButton = new PopupWithForm(".popup_add", () => {
  renderCard.addItem(createCard());
});
popupAddCardSubmitButton.setEventListeners();

buttonAdd.addEventListener("click", () => {
  popupAddCardSubmitButton.openPopup();  
})

/** popup3 */

const openFullSizeImage = new PopupWithImage(".popup_pic")
openFullSizeImage.setEventListeners();