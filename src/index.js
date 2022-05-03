/** import */

import { initialCards } from "../src/components/cards.js";
import { Card } from "../src/components/Card.js";
import { FormValidator } from "../src/components/FormValidator.js";

import { Section } from "../src/components/Section.js";
import { PopupWithImage } from "../src/components/PopupWithImage.js";
import { PopupWithForm } from "../src/components/PopupWithForm.js";
import { UserInfo } from "../src/components/UserInfo.js";

import "../src/pages/index.css";

/** for popup1 */

const formProfileElement = document.querySelector(".popup__container_profile");

const buttonEdit = document.querySelector(".profile__edit-button");

const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

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

/** cards function */

const createCard = (item) => {
  const card = new Card(
    {
      handleCardClick: () => {
        openFullSizeImage.open(item.link, item.name);
      },
      data: item,
    },
    ".template"
  );
  return card.generateCard();
};



const renderCard = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      renderCard.addItem(createCard(item));
    },
  },
  ".elements"
);

renderCard.rendererItems(initialCards);

/** popup1 */

const submitProfileForm = new PopupWithForm(".popup_edit", () => {
  profileInfo.setUserInfo();
});
submitProfileForm.setEventListeners();

const profileInfo = new UserInfo({
  profileName: ".profile__title",
  profileJob: ".profile__subtitle",
});
profileInfo.getUserInfo();

buttonEdit.addEventListener("click", () => {
  const newProfileInfo = profileInfo.getUserInfo();
  profileName.value = newProfileInfo.name;
  profileJob.value = newProfileInfo.job;
  profileFormValidation.enableValidation();
  submitProfileForm.open();
});

/** popup2 */

const popupAddCardSubmitButton = new PopupWithForm(".popup_add", () => {
  renderCard.addItem(createCard(newCard));
});
popupAddCardSubmitButton.setEventListeners();

buttonAdd.addEventListener("click", () => {
  popupAddCardSubmitButton.open();
  popupAddCardFormValidation.enableValidation();
})

/** popup3 */

const openFullSizeImage = new PopupWithImage(".popup_pic")
openFullSizeImage.setEventListeners();