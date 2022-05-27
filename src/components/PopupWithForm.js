import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(formSubmit, selectorPopup) {
    super(selectorPopup);
    this._formSubmit = formSubmit;
    this._formElement = this._popupElement.querySelector(".popup__container");
    this._submitButton = this._formElement.querySelector(".popup__submit-button");
    this._buttonText = this._submitButton.textContent;
    this._inputList = this._formElement.querySelectorAll(".popup__info");
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  closePopup() {
    this._formElement.reset();
    super.closePopup();
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._formSubmit(this._getInputValues());
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