import Popup from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._popupImgForm = this._selectorPopup.querySelector(".popup__image");
    this._popupImgTitle = this._selectorPopup.querySelector(".popup__title_pic");
  }

  openPopup(name, link) {
    this._popupImgForm.src = link;
    this._popupImgTitle.textContent = name;
    this._popupImgForm.alt = name;
    super.openPopup();
  }
}