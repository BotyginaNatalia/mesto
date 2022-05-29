export {
    validationObjects,
    buttonEdit,
    profileNameDefault,
    profileJobDefault,
    buttonAdd,
    buttonOpenAvatar,
};

const validationObjects = {
    formSelector: ".popup__container",
    inputSelector: ".popup__info",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__submit-button_disabled",
    inputErrorClass: "popup__info_type_error",
    errorClass: "popup__span-error_visible",
  };

  /** for popup1 */

const buttonEdit = document.querySelector(".profile__edit-button");
const profileNameDefault = document.querySelector("#input-name");
const profileJobDefault = document.querySelector("#input-job");

/** for popup2 */

const buttonAdd = document.querySelector(".profile__add-button");

/** for popup4 */

const buttonOpenAvatar = document.querySelector(".profile__avatar-edit-button");