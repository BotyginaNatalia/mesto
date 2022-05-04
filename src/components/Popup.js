export default class Popup {
    constructor(selectorPopup) {
      this._selectorPopup = document.querySelector(selectorPopup);
      this._handleEscClose = this._handleEscClose.bind(this);
    }

    _handleEscClose(evt) {
      if (evt.key === "Escape") {
        this.closePopup();
      }
    }
  
    openPopup() {
      this._selectorPopup.classList.add("popup_opened");
      document.addEventListener("keydown", this._handleEscClose);
    }
  
    closePopup() {
      this._selectorPopup.classList.remove("popup_opened");
      document.removeEventListener("keydown", this._handleEscClose);
    }  

    setEventListeners() {
      this._selectorPopup.addEventListener("click", (evt) => {
        if (evt.target.classList.contains("popup__close-button") || evt.target.classList.contains("popup")) {
          this.closePopup();
        }
      });
    }
  }


