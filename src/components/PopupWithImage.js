import Popup from "../components/Popup.js";

export class PopupWithImage extends Popup {
    constructor(selectorPopup) {
      super(selectorPopup);
      this._popupImgForm = document.querySelector(".element__image");
      this._popupImgTitle = document.querySelector(".popup__title_pic");
    }
    openPopup(name, link) {
      this._popupImgForm.src = link;
      this._popupImgTitle.textContent = name;
      this._popupImgForm.alt = name;
      super.openPopup();
    }
  }
