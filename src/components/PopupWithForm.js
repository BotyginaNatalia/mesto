import Popup from "../components/Popup.js";

export class PopupWithForm extends Popup {
  constructor(selectorPopup, submitForm) {
    super(selectorPopup);
    this._submitForm = submitForm;
    this._form = document.querySelector(".popup__container");
    this._inputList = document.querySelectorAll(".popup__info");
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", () => {
      this._submitForm(this._getInputValues());      
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
