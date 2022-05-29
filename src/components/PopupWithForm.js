import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(submitForm, popup) {
    super(popup);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector(".popup__container");
    this._submitButton = this._form.querySelector(".popup__submit-button");
    this._buttonText = this._submitButton.textContent;
    this._input = this._form.querySelectorAll(".popup__info");
  }

  _getInputValues() {
    this._values = {};
    this._input.forEach((input) => {
      this._values[input.name] = input.value;
    });
    return this._values;
  }

  closePopup() {
    this._form.reset();
    super.closePopup();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    });
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Сохранение...";
    } else {
      this._submitButton.textContent = this._buttonText;
    }
  }
}