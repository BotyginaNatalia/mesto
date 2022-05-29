import Popup from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupImgForm = this._popup.querySelector(".popup__image");
    this._popupImgTitle = this._popup.querySelector(".popup__title_pic");
  }

  openPopup(name, link) {
    this._popupImgForm.src = link;
    this._popupImgTitle.textContent = name;
    this._popupImgForm.alt = name;
    super.openPopup();
  }
}