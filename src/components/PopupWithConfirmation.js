import Popup from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._submitForm = null;
    this._form = this._selectorPopup.querySelector(".popup__container");
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitForm();
    });
  }

  setSubmitAction(action) {
    this._submitForm = action;
  }
}