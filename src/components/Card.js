export default class Card {
  constructor(data, handleCardClick, handleLikeClick, handleDeleteClick, templateSelector, userId) {
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this.cardId = data._id;
    this._likes = data.likes;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  _getTemplate() {
    const newCard = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return newCard;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._imgForm = this._element.querySelector(".element__image");
    this._imgTitle = this._element.querySelector(".element__title");
    this._imgForm.src = this._link;
    this._imgForm.alt = this._name;
    this._imgTitle.textContent = this._name;

    this._deleteButton = this._element.querySelector(".element__delete-button");
    this._likeButton = this._element.querySelector(".element__like-button");

    this._numberOfLikes = this._element.querySelector(
      ".element__number-of-like"
    );
    this._numberOfLikes.textContent = this._likes.length;

    this.setLikeFromMe = this._likes.some((like) => like._id === this._userId);

    if (this._ownerId != this._userId) {
      this._deleteButton.remove();
    }

    if (this._likes.some((like) => like._id === this._userId)) {
      this._likeButton.classList.add("element__like-button_active");
    }
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () =>
      this._handleLikeClick(this, this.setLikeFromMe)
    );
    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteClick(this)
    );
    this._imgForm.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  }

  addNewLike(updateLikes) {
    this._likeButton.classList.add("element__like-button_active");
    this._numberOfLikes.textContent = updateLikes;
  }

  deleteNewLike(updateLikes) {
    this._likeButton.classList.remove("element__like-button_active");
    this._numberOfLikes.textContent = updateLikes;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }
}
