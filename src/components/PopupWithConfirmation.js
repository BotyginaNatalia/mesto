import Popup from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popup) {
    super(popup);
    this._submitForm = null;
    this._form = this._popup.querySelector(".popup__container");
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitForm();
    });
  }

  setDeletion(confirm) {
    this._submitForm = confirm;
  }
}