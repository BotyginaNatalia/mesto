import Popup from "../components/Popup.js"

export class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._fullImageOpen = document.querySelector(".element__image");
    this._imgTitle = document.querySelector(".element__title");
  }
  open(name, link) {
    this._fullImageOpen.src = link;
    this._imgTitle.textContent = name;
    this._fullImageOpen.alt = name;
    super.open();
  }
}

