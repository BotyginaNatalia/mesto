const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//popups open

const openPopup = function (popup)  {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscUp);
  document.addEventListener("click", handleOverlay);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  
}

//close popup by Esc

const closePopupByEsc = (popup) => {
  document.removeEventListener("keydown", handleEscUp);
  popup.classList.remove("popup_opened");
};

const handleEscUp = (evt) => {
  const activePopup = document.querySelector(".popup_opened");
  if (evt.key === "Escape") {
    closePopupByEsc(activePopup);
  };
};

//close popup overlay

function handleOverlay(evt) {
	if (evt.target.classList.contains("popup")) {
		const activePopup = document.querySelector(".popup_opened");
		closePopup(activePopup);
	};
};



//for popup1

const profileForm = document.querySelector(".popup_edit");

const editButton = document.querySelector(".profile__edit-button");

const closeEdit = document.querySelector(".popup__close-button");

const inputName = document.querySelector(".popup__info_name_active");
const inputJob = document.querySelector(".popup__info_job_active");

const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

const formProfileElement = document.querySelector(".popup__container_profile");

//popup1 functions

function closeProfilePopup() {
  closePopup(profileForm);
}

//popup1 profile edit

function submitProfileForm(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;

  closeProfilePopup();
};

editButton.addEventListener("click", function(){
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;

  openPopup(profileForm);
});

closeEdit.addEventListener("click", closeProfilePopup);

formProfileElement.addEventListener("submit", submitProfileForm);

//for popup3

const openFullImage = document.querySelector(".popup_pic");

const closeImg = document.querySelector(".popup__close-button_pic");

const imgForm = document.querySelector(".popup__image");

const imgTitle = document.querySelector(".popup__title_pic");

//for buttons

const likeButton = document.querySelectorAll(".element__like-button");

const deleteButton = document.querySelectorAll(".element__delete-button");

//Cards function

const elementBox = document.querySelector(".elements");

function renderCard (elementImage, elementName) {

  const template = document.querySelector(".template").content;
  const newElement = template.querySelector(".element").cloneNode(true);
  const newElementImg = newElement.querySelector(".element__image");

  newElement.querySelector(".element__title").textContent = elementName;

  newElementImg.src = elementImage;
  newElementImg.alt = elementName;

  newElement.querySelector(".element__image").addEventListener("click", function(){
    imgTitle.textContent = elementName;
    imgForm.src = elementImage;
    imgForm.alt = elementName;

    openPopup(openFullImage);
  });

    const likeButton = e => {
    e.target.classList.toggle("element__like-button_active");
  }
  
  const likeButtonElement = newElement.querySelector(".element__like-button");
  likeButtonElement.addEventListener("click", likeButton);
  
  const deleteButtons = newElement.querySelector(".element__delete-button");
  deleteButtons.addEventListener("click", deletePic);
  
  function deletePic () {
    this.closest(".element").remove(); 
  }

  return newElement;
}

function renderInitialCards(initialCards) {
  initialCards.forEach((item) => {
    elementBox.append(renderCard(item.link, item.name));
  });
}

renderInitialCards(initialCards);

//for popup2

const popupAddCardForm = document.querySelector(".popup_add");

const formAddCard = document.querySelector(".popup__container_add");

const addButton = document.querySelector(".profile__add-button");

const closeAdd = document.querySelector(".popup__close-button_add");

const inputElementName = document.querySelector(".popup__info_item");

const inputElementLink = document.querySelector(".popup__info_link");

//popup2

function openAddForm() {
  openPopup(popupAddCardForm);
};

function closeAddForm() {
  closePopup(popupAddCardForm);
  
};



function submitAddElementForm (evt) {
  evt.preventDefault ();

  elementBox.prepend(renderCard(inputElementLink.value, inputElementName.value));
    
  closePopup(popupAddCardForm);
  formAddCard.reset();
}

addButton.addEventListener("click", openAddForm);

closeAdd.addEventListener("click", closeAddForm);

formAddCard.addEventListener("submit", submitAddElementForm);

//popup3

closeImg.addEventListener("click", () => closePopup(openFullImage));

