import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(formDeletionSubmit, selectorPopup) {
    super(selectorPopup);
    this._formElement = this._popupElement.querySelector(".popup__container_delete-card");
    this._submitButton = this._formElement.querySelector(".popup__submit-button");
    this._formDeletionSubmit = formDeletionSubmit;
    this._buttonText = this._submitButton.textContent;
  }

  openPopup(newCard) {
    super.openPopup();
    this._newCard = newCard;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Удаление...";
    } else {
      this._submitButton.textContent = this._buttonText;
    }
  }

  setEventListeners() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._formDeletionSubmit(this._newCard);
    });
    super.setEventListeners();
  }
}