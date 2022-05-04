import Popup from "../components/Popup.js";

export class PopupWithForm extends Popup {
    constructor(selectorPopup, submitForm) {
      super(selectorPopup);
      this._submitForm = submitForm;
      this._form = this._selectorPopup.querySelector(".popup__container");
      this._input = this._form.querySelectorAll(".popup__info");
    }
  
    _getInputValues() {
      const values = {};
      this._input.forEach(input => (values[input.name] = input.value));
    
      return this._values;
    }
  
    setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener("submit", () => {
        this._submitForm(this._getInputValues());      
      });
    }
  
    closePopup() {
      super.closePopup();
      this._form.reset();
    }
  }