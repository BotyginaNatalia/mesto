export class FormValidator {
  constructor(validationObjects, formElement) {
    this._formElement = formElement;
    this._inputSelector = validationObjects.inputSelector;    
    this._submitButtonSelector = validationObjects.submitButtonSelector;
    this._inactiveButtonClass = validationObjects.inactiveButtonClass;
    this._inputErrorClass = validationObjects.inputErrorClass;
    this._errorClass = validationObjects.errorClass;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  _showError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );

    inputElement.classList.add(this._inputErrorClass);

    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  };

  _hideError = (inputElement) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );

    inputElement.classList.remove(this._inputErrorClass);

    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    }
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  hideErrorMessage() {
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
    this._toggleButtonState();
  }

  enableValidation() {
    this._setEventListeners();
  }
}