export default class Popup {
  constructor(selectorPopup) {
    this._selectorPopup = selectorPopup;
    this._elementPopup = document.querySelector(selectorPopup);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  }

  openPopup() {
    this._elementPopup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  closePopup() {
    this._elementPopup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }  

  setEventListeners() {
    this._elementPopup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup__close-button") || evt.target.classList.contains("popup")) {
        this.closePopup();
      }
    });
  }
}