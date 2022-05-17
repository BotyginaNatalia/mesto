import Popup from "../components/Popup.js";

export class PopupWithConfirmation extends Popup {
    constructor(selectorPopup) {
        super(selectorPopup);
        this._form = this._selectorPopup.querySelector(".popup__container");
        this._submitForm = submitForm;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._submitForm();
        })
    }

    setSubmitForm(action) {
        this._submitForm(action);
    }
}