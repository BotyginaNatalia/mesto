import Popup from "../components/Popup.js";

export class PopupWithImage extends Popup {
    constructor(selectorPopup) {
      super(selectorPopup);
      this._imgForm = document.querySelector(".popup_pic");
      this._imgTitle = document.querySelector(".popup__title_pic");
    }
    openPopup(name, link) {
      this._imgForm.src = link;
      this._imgTitle.textContent = name;
      this._imgForm.alt = name;
      super.openPopup();
    }
  }
