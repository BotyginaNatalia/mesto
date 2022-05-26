import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(formSubmit, selectorPopup) {
    super(selectorPopup);
    this._form = this._popupElement.querySelector(
      ".popup__container_delete-card"
    );
    this._submitButton = this._form.querySelector(".popup__submit-button");
    this._handleFormSubmit = formSubmit;
    this._buttonText = this._submitButton.textContent;
  }

  openPopup(card) {
    super.openPopup();
    this._card = card;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Удаление...";
    } else {
      this._submitButton.textContent = this._buttonText;
    }
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._formSubmit(this._card);
    });
    super.setEventListeners();
  }
}
