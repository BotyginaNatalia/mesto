import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._imgForm = this._selectorPopup.querySelector(".popup__image");
    this._imgTitle = this._selectorPopup.querySelector(".popup__title_pic");
  }

  openPopup(name, link) {
    this._imgForm.src = link;
    this._imgTitle.textContent = name;
    this._imgForm.alt = name;
    super.openPopup();
  }
}