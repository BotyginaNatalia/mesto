/** import */

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import "./index.css";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
import { Api } from "../components/Api.js";
import {
  validationObjects,
  buttonEdit,
  profileNameDefault,
  profileJobDefault,
  buttonAdd,
  buttonOpenAvatar,
} from "../utils/constants.js";

/** validation */

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
    userId = allProfileInfo._id;
    renderCard.renderItems(allCardsInfo);
    
  })
  .catch((err) => {
    alert(err);
  });

/** cards functions */

const renderCard = new Section(
  {
    renderer: (item) => {
      renderCard.addItem(createCard(item));
    }
  },
  ".elements"
);

function createCard(item) {
  const newCard = new Card(
    item,
    handleCardClick,
    {handleDeleteButtonClick: () => {
      popupSubmitCardRemove.setDeletion(() => {
        api
          .deleteMyCard(item._id)
          .then(() => {
            newCard.deleteCard();
            popupSubmitCardRemove.closePopup();
          })
          .catch((err) => console.log(err));
      });      
      popupSubmitCardRemove.openPopup();
    },
    },
    ".template",
    userId,
    api,
  );

  return newCard.generateCard();
}

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
    })
    .finally(() => {
      popupAddCardSubmitButton.loadingMessage(false);
    });
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
    .catch((err) => console.log(err))
    .finally(() => {
      popupAvatar.loadingMessage(false);
    });
}

buttonOpenAvatar.addEventListener("click", () => {
  avatarFormValidation.hideErrorMessage();
  popupAvatar.openPopup();
});

/** deleteCard popup5 */

const popupSubmitCardRemove = new PopupWithConfirmation(".popup_delete-card");
popupSubmitCardRemove.setEventListeners();