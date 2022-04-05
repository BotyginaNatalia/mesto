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

//Cards function

const elementBox = document.querySelector(".elements");

function renderCard (elementImage, elementName) {

  const template = document.querySelector(".template").content;
  const newElement = template.querySelector(".element").cloneNode(true);
  const newElementImg = newElement.querySelector(".element__image");

  newElement.querySelector(".element__title").textContent = elementName;

  newElementImg.src = elementImage;
  newElementImg.alt = elementName;

  newElementImg.addEventListener("click", function(){
    imgTitle.textContent = elementName;
    imgForm.src = elementImage;
    imgForm.alt = elementName;

    openPopup(fullImageOpen);
  });

    const buttonLike = e => {
    e.target.classList.toggle("element__like-button_active");
  }
  
  const buttonLikeElement = newElement.querySelector(".element__like-button");
  buttonLikeElement.addEventListener("click", buttonLike);
  
  const buttonsDelete = newElement.querySelector(".element__delete-button");
  buttonsDelete.addEventListener("click", deletePic);
  
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

//popups open

const openPopup = function (popup)  {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEsc);
  popup.addEventListener("click", handleOverlay);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByEsc);
  popup.removeEventListener("click", overlayClose);
  
}

//close popup by Esc

const closePopupByEsc = (evt) => {
  
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    closePopup(activePopup);
  };
};

//close popup overlay

function overlayClose(evt) { 

	if (evt.target.classList.contains("popup")) { 	
    closePopup(evt.target); 
	}; 
}; 

//for popup1

const profileForm = document.querySelector(".popup_edit");

const buttonEdit = document.querySelector(".profile__edit-button");

const profileFormClose = document.querySelector(".popup__close-button");

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

buttonEdit.addEventListener("click", function(){
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;

  openPopup(profileForm);
});

profileFormClose.addEventListener("click", closeProfilePopup);

formProfileElement.addEventListener("submit", submitProfileForm);

//for popup3

const fullImageOpen = document.querySelector(".popup_pic");

const imgClose = document.querySelector(".popup__close-button_pic");

const imgForm = document.querySelector(".popup__image");

const imgTitle = document.querySelector(".popup__title_pic");

//for popup2

const popupAddCardForm = document.querySelector(".popup_add");

const formAddCard = document.querySelector(".popup__container_add");

const buttonAdd = document.querySelector(".profile__add-button");

const buttonAddClose = document.querySelector(".popup__close-button_add");

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
buttonAdd.addEventListener("click", openAddForm);

buttonAddClose.addEventListener("click", closeAddForm);

formAddCard.addEventListener("submit", submitAddElementForm);

//popup3

imgClose.addEventListener("click", () => closePopup(fullImageOpen));