export class Card {
  constructor(data, handleCardClick, {handleDeleteButtonClick}, templateSelector, userId, api) {
    this._name = data.name;
    this._link = data.link;    
    this._templateSelector = templateSelector;    
    this._handleCardClick = handleCardClick;    
    this._handleDeleteButtonClick = handleDeleteButtonClick;
    this._ownerId = data.owner._id;    
    this._userId = userId;
    this._api = api;
    this._id = data._id;
    this._likes = data.likes;
  }

  _getTemplate() {
    const newCard = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return newCard;
  }

  _ifLikeIsMine() {
    if (this._likes.some((like) => like._id === this._userId)) {
      this._likeButton.classList.add("element__like-button_active");
    }
  }

  _handleLikeButtonClick() {
    if (!this._likeButton.classList.contains("element__like-button_active")) {
      this._api
        .addLike(this._id)
        .then((res) => {
          this._likeButton.classList.add("element__like-button_active");
          this._numberOfLikes.textContent = res.likes.length;
        }).catch((err) => console.log(err));
    } else {
      this._api
        .removeLike(this._id)
        .then((res) => {
          this._likeButton.classList.remove("element__like-button_active");
          this._numberOfLikes.textContent = res.likes.length;
        }).catch((err) => console.log(err));
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImg = this._element.querySelector(".element__image");
    this._cardTitle = this._element.querySelector(".element__title");
    this._cardImg.src = this._link;
    this._cardImg.alt = this._name;
    this._cardImg.textContent = this._name;

    this._deleteButton = this._element.querySelector(".element__delete-button");
    if (this._ownerId != this._userId) {
      this._deleteButton.remove();
    }
    this._likeButton = this._element.querySelector(".element__like-button");
    this._numberOfLikes = this._element.querySelector(".element__number-of-like");
    this._numberOfLikes.textContent = this._likes.length;
    
    this._ifLikeIsMine();
    this._setEventListeners();
    
    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () =>
      this._handleLikeButtonClick(this)
    );
    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteButtonClick(this)
    );
    this._imgForm.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }
}