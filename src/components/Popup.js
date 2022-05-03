export default class Popup {
  constructor(selectorPopup) {
    this._selectorPopup = document.querySelector(selectorPopup);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._selectorPopup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._selectorPopup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._selectorPopup.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("popup__close-button") ||
        evt.target === this._selectorPopup
      ) {
        this.close();
      }
    });
  }
}
