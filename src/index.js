/** import */

import { Card } from "../src/components/Card.js";
import { FormValidator } from "../src/components/FormValidator.js";
import { Section } from "../src/components/Section.js";
import { PopupWithImage } from "../src/components/PopupWithImage.js";
import { PopupWithForm } from "../src/components/PopupWithForm.js";
import { UserInfo } from "../src/components/UserInfo.js";
import "./pages/index.css";
import { PopupWithConfirmation } from "../src/components/PopupWithConfirmation.js";
import { Api } from "../src/components/Api.js";

/** for popup1 */

const buttonEdit = document.querySelector(".profile__edit-button");
const profileNameDefault = document.querySelector("#input-name");
const profileJobDefault = document.querySelector("#input-job");

/** for popup2 */

const buttonAdd = document.querySelector(".profile__add-button");

/** for popup4 */

const buttonOpenAvatar = document.querySelector(".profile__avatar-edit-button");

/** validation */

const validationObjects = {
  formSelector: ".popup__container",
  inputSelector: ".popup__info",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__info_type_error",
  errorClass: "popup__span-error_visible",
};

const formProfileElement = document.querySelector(".popup__container_profile");
const formAddCard = document.querySelector(".popup__container_add");
const formEditAvatar = document.querySelector(".popup__container_avatar");

const profileFormValidation = new FormValidator(
  validationObjects,
  formProfileElement
);

const popupAddCardFormValidation = new FormValidator(
  validationObjects,
  formAddCard
);

const avatarFormValidation = new FormValidator(
  validationObjects,
  formEditAvatar
);

profileFormValidation.enableValidation();
popupAddCardFormValidation.enableValidation();
avatarFormValidation.enableValidation();

/** cards functions */
const renderCard = new Section(
  {
    renderer: createCard,
  },
  ".elements"
);

function createCard(item) {
  const newCard = new Card(
    item,
    handleCardClick,
    handleDeleteButtonClick,
    ".template",
    userId,
    api,
  );

  return newCard.generateCard();
}

/** Api */

let userId; 

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-41/",
  headers: {
    authorization: "fbc65fd2-5c16-4a99-9542-a08cde72dc8c",
    "content-Type": "application/json",
  },
});

Promise.all([api.getOriginalProfileInfo(), api.getOriginalCards()])
  .then(([allProfileInfo, allCardsInfo]) => {
    profileInfo.setUserInfo(allProfileInfo);
    renderCard.renderItems(allCardsInfo);
    userId = allProfileInfo._id;
  })
  .catch((err) => {
    alert(err);
  });

/** profile popup1 */

const profileInfo = new UserInfo({
  profileName: ".profile__title",
  profileJob: ".profile__subtitle",
  profileAvatar: ".profile__image",
});

const popupProfileForm = new PopupWithForm(profileSubmitForm, ".popup_edit");
popupProfileForm.setEventListeners();

function profileSubmitForm(data) {
  popupProfileForm.loadingMessage(true);
  api
    .changeProfileInfo(data)
    .then((res) => {
      profileInfo.setUserInfo(res);
      popupProfileForm.closePopup();
    })
    .catch((err) => {
      alert(err);
    })
    .finally(() => {
      popupProfileForm.loadingMessage(false);
    });
}

buttonEdit.addEventListener("click", () => {
  const newProfileInfo = profileInfo.getUserInfo();
  profileNameDefault.value = newProfileInfo.name;
  profileJobDefault.value = newProfileInfo.about;  
  profileFormValidation.hideErrorMessage();
  popupProfileForm.openPopup();
});

/** addCard popup2 */
const popupAddCardSubmitButton = new PopupWithForm(addCardSubmitForm, ".popup_add");
popupAddCardSubmitButton.setEventListeners();

function addCardSubmitForm(data) {
  popupAddCardSubmitButton.loadingMessage(true);
  api
    .addNewCard(data)
    .then((res) => {
      renderCard.addItem(createCard(res));
      popupAddCardSubmitButton.closePopup();
    })
    .catch((err) => {
      alert(err);
    });
}

function handleDeleteButtonClick() {
  popupSubmitCardRemove.openPopup();
}

buttonAdd.addEventListener("click", () => {
  popupAddCardFormValidation.hideErrorMessage();
  popupAddCardSubmitButton.openPopup();
});

/** pic popup3 */
const openFullSizeImage = new PopupWithImage(".popup_pic");
openFullSizeImage.setEventListeners();

function handleCardClick(name, link) {
  openFullSizeImage.openPopup(name, link);
}

/** avatar popup4 */
const popupAvatar = new PopupWithForm(avatarSubmitForm, ".popup_avatar");
popupAvatar.setEventListeners();

function avatarSubmitForm(avatar) {
  popupAvatar.loadingMessage(true);
  api
    .updateAvatar(avatar)
    .then((res) => {
      profileInfo.setUserInfo(res);
      popupAvatar.closePopup();
    })
    .catch((err) => {
      alert(err);
    });
}

buttonOpenAvatar.addEventListener("click", () => {
  avatarFormValidation.hideErrorMessage();
  popupAvatar.openPopup();
});

/** deleteCard popup5 */
const popupSubmitCardRemove = new PopupWithConfirmation(deleteCardSubmitForm, ".popup_delete-card");
popupSubmitCardRemove.setEventListeners();

function deleteCardSubmitForm (newCard) {
  api
    .deleteMyCard(newCard._id)
    .then(() => {
      newCard.deleteCard();
      popupSubmitCardRemove.closePopup();
    })
    .catch((err) => {
      alert(err);
    });
}