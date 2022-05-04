export class Card {
  constructor({data, handleCardClick}, cardTemplateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const newCardElement = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return newCardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._imgForm = this._element.querySelector(".element__image");
    this._imgForm.src = this._link;
    this._imgForm.alt = this._name;
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
      this._handleCardClick(this._link, this._name);
    });
  }



  _setLike() {
    this._likeButton.classList.toggle("element__like-button_active");
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }
}