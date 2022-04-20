export class Card {
  constructor(data, cardTemplate, openFullSizeImage) {
    this._name = data.name;
    this._src = data.link;
    this._cardTemplate = cardTemplate;
    this._openFullSizeImage = openFullSizeImage;
  }

  _getTemplate() {
    const newCardElement = document
      .querySelector(this._cardTemplate)
      .content.querySelector(".element")
      .cloneNode(true);

    return newCardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._imgForm = this._element.querySelector(".element__image");
    this._imgForm.src = this._src;
    this._imgTitle = this._element.querySelector(".element__title");
    this._imgTitle.textContent = this._name;
    this._likeButton = this._element.querySelector(".element__like-button");
    this._deleteButton = this._element.querySelector(".element__delete-button");
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._setLike();
    });

    this._deleteButton.addEventListener("click", () => {
      this._deleteCard();
    });

    this._imgForm.addEventListener("click", () => {
      this._openFullSizeImage();
    });
  }

  _setLike() {
    this._likeButton.classList.toggle("element__like-button_active");
  }

  _deleteCard() {
    this._element.remove();
  }
}