const validationObjects = {
  formSelector: ".popup__container",
  inputSelector: ".popup__info",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__info_type_error",
  errorClass: "popup__span-error_visible",
};

const showError = (
  formElement,
  inputElement,
  errorMessage,
  validationObjects
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(validationObjects.inputErrorClass);

  errorElement.classList.add(validationObjects.errorClass);
  errorElement.textContent = errorMessage;
};

const hideError = (formElement, inputElement, validationObjects) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(validationObjects.inputErrorClass);

  errorElement.classList.remove(validationObjects.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, validationObjects) => {
  if (!inputElement.validity.valid) {
    showError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      validationObjects
    );
  } else {
    hideError(formElement, inputElement, validationObjects);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, validationObjects) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationObjects.inactiveButtonClass);
  } else {
    buttonElement.classList.add(validationObjects.inactiveButtonClass);
  }
};

const setEventListeners = (formElement, validationObjects) => {
  const inputList = Array.from(
    formElement.querySelectorAll(validationObjects.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    validationObjects.submitButtonSelector
  );
  toggleButtonState(inputList, buttonElement, validationObjects);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, validationObjects);
      toggleButtonState(inputList, buttonElement, validationObjects);
    });
  });
};

const enableValidation = (validationObjects) => {
  const formList = Array.from(
    document.querySelectorAll(validationObjects.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement, validationObjects);
  });
};

enableValidation(validationObjects);