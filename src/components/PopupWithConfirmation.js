import Popup from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(submitForm, selectorPopup) {
    super(selectorPopup);
    this._submitForm = submitForm;
    this._form = this._selectorPopup.querySelector(".popup__container");
  }

  openPopup(newCard) {
    super.openPopup();
    this._newCard = newCard;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitForm(this._newCard);
    });
    super.setEventListeners();
  }
}