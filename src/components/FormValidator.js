export class FormValidator {
  constructor(validationObjects, formElement) {
    this._validationObjects = validationObjects;
    this._formElement = formElement;
  }

  _showError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );

    inputElement.classList.add(this._validationObjects.inputErrorClass);

    errorElement.classList.add(this._validationObjects.errorClass);
    errorElement.textContent = errorMessage;
  };

  _hideError = (inputElement) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );

    inputElement.classList.remove(this._validationObjects.inputErrorClass);

    errorElement.classList.remove(this._validationObjects.errorClass);
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
      this._buttonElement.classList.add(
        this._validationObjects.inactiveButtonClass
      );
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(
        this._validationObjects.inactiveButtonClass
      );
      this._buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._validationObjects.inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._validationObjects.submitButtonSelector
    );
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList, this._buttonElement);
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
