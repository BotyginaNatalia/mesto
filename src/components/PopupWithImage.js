import Popup from "../components/Popup.js";

export class PopupWithImage extends Popup {
    constructor(selectorPopup) {
      super(selectorPopup);
      this._imgForm = document.querySelector(".element__image");
      this._imgTitle = document.querySelector(".element__title");
    }
    openPopup(name, link) {
      this._imgForm.src = link;
      this._imgTitle.textContent = name;
      this._imgForm.alt = name;
      super.openPopup();
    }
  }
