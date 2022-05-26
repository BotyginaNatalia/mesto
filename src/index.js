/** import */

import Card from "../src/components/Card.js";
import { FormValidator } from "../src/components/FormValidator.js";

import Section from "../src/components/Section.js";
import PopupWithImage from "../src/components/PopupWithImage.js";
import PopupWithForm from "../src/components/PopupWithForm.js";
import UserInfo from "../src/components/UserInfo.js";

import "./pages/index.css";
import PopupWithConfirmation from "../src/components/PopupWithConfirmation.js";
import Api from "../src/components/Api.js";

/** for popup1 */

const buttonEdit = document.querySelector(".profile__edit-button");
const userNameInput = document.querySelector("#input-name");
const userDescriptionInput = document.querySelector("#input-job");

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

/** Api */
const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-41/",
  headers: {
    authorization: "fbc65fd2-5c16-4a99-9542-a08cde72dc8c",
    "content-Type": "application/json",
  },
});

Promise.all([api.getOriginalProfileInfo(), api.getOriginalCards()])
  .then(([profileData, elementsData]) => {
    userInfo.setUserInfo(profileData);
    cardsList.renderSectionItems(elementsData);
  })
  .catch((err) => {
    alert(err);
  });

/** cards functions */
const cardsList = new Section(
  {
    renderer: createCard,
  },
  ".elements"
);

function createCard(data) {
  const newCard = new Card(
    data,
    handleCardClick,
    handleLikeClick,
    handleDeleteClick,
    ".template",
    userInfo.returnUserId()
  );

  const newCardElement = newCard.generateCard();
  return newCardElement;
}

/** profile popup1 */

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  aboutSelector: ".profile__subtitle",
  avatarSelector: ".profile__image",
});

const popupProfileForm = new PopupWithForm(
  handleEditFormSubmit,
  ".popup_edit"
);
popupProfileForm.setEventListeners();

function handleEditFormSubmit(data) {
  popupProfileForm.renderLoading(true);
  api
    .changeProfileInfo(data)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupProfileForm.closePopup();
    })
    .catch((err) => {
      alert(err);
    })
    .finally(() => {
      popupProfileForm.renderLoading(false);
    });
}

buttonEdit.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  userNameInput.value = name;
  userDescriptionInput.value = about;
  profileFormValidation.hideErrorMessage();
  popupProfileForm.openPopup();
});

/** addCard popup2 */
const popupAddCardSubmitButton = new PopupWithForm(handleAddFormSubmit, ".popup_add");
popupAddCardSubmitButton.setEventListeners();

function handleAddFormSubmit(data) {
  popupAddCardSubmitButton.renderLoading(true);
  api
    .addNewCard(data)
    .then((res) => {
      cardsList.setItem(createCard(res));
      popupAddCardSubmitButton.closePopup();
    })
    .catch((err) => {
      alert(err);
    })
    .finally(() => {
      popupAddCardSubmitButton.renderLoading(false);
    });
}

function handleLikeClick(card) {
  if (card.hasMyLike) {
    api
      .removeLike(card.cardId)
      .then((res) => {
        card.deleteNewLike(res.likes.length);
      })
      .catch((err) => {
        alert(err);
      });
  } else {
    api
      .addLike(card.cardId)
      .then((res) => {
        card.addNewLike(res.likes.length);
      })
      .catch((err) => {
        alert(err);
      });
  }
}

function handleDeleteClick(card) {
  popupSubmitCardRemove.openPopup(card);
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
const popupAvatar = new PopupWithForm(
  handleAvatarFormSubmit,
  ".popup_avatar"
);
popupAvatar.setEventListeners();

function handleAvatarFormSubmit(avatar) {
  popupAvatar.renderLoading(true);
  api
    .updateAvatar(avatar)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupAvatar.closePopup();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupAvatar.renderLoading(false);
    });
}

buttonOpenAvatar.addEventListener("click", () => {
  avatarFormValidation.hideErrorMessage();
  popupAvatar.openPopup();
});

/** deleteCard popup5 */
const popupSubmitCardRemove = new PopupWithConfirmation(
  handleRemoveSubmit,
  ".popup_delete-card"
);
popupSubmitCardRemove.setEventListeners();

function handleRemoveSubmit(card) {
  popupSubmitCardRemove.renderLoading(true);
  api
    .deleteCard(card.cardId)
    .then(() => {
      card.deleteCard();
      popupSubmitCardRemove.closePopup();
    })
    .catch((err) => {
      alert(err);
    })
    .finally(() => {
      popupSubmitCardRemove.renderLoading(false);
    });
}