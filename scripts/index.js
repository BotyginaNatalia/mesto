//popups 

let popups = document.querySelector(".popup");

//for popup1

let showEditForm = document.querySelector(".popup_edit");

let edit = document.querySelector(".profile");

let editButton = document.querySelector(".profile__edit-button");

let closeEdit = document.querySelector(".popup__close-button");

let inputName = document.querySelector(".popup__info_name_active");
let inputJob = document.querySelector(".popup__info_job_active");

let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__subtitle");

let formElement = document.querySelector(".popup__container");

//popup1 functions

function openEditPopup() {
  openPopup(showEditForm);
}

function closeEditPopup() {
  closePopup(showEditForm);
}

//popup1 profile edit

inputName.value = profileName.textContent;
inputJob.value = profileJob.textContent;

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;

  closeEditPopup();
};

editButton.addEventListener("click", openEditPopup);

closeEdit.addEventListener("click", closeEditPopup);

formElement.addEventListener("submit", formSubmitHandler);

//for popup2

let addForm = document.querySelector(".popup_add");

let addButton = document.querySelector(".profile__add-button");

let closeAdd = document.querySelector(".popup__close-button_add");

let addElement = document.querySelector(".popup__container_add");

let inputElementName = document.querySelector(".popup__info_item");

let inputElementLink = document.querySelector(".popup__info_link");

const elementBox = document.querySelector(".elements");

const template = document.querySelector(".template");

//for popup3

let fullImage = document.querySelector(".popup_pic");

let closeImg = document.querySelector(".popup__close-button_pic");

let imgForm = document.querySelector(".popup__container_pic");


//for buttons

let likeButton = document.querySelectorAll(".element__like-button");

let deleteButton = document.querySelectorAll(".element__delete-button");

//Cards

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

function renderElementBox (name, link) {
  const elementTemplate = document.querySelector(".template").content.cloneNode(true);

  elementTemplate.querySelector(".element__title").textContent = name;
  elementTemplate.querySelector(".element__image").src = link;

  elementBox.append(elementTemplate);
}

initialCards.forEach(card => renderElementBox(card.name, card.link));

//buttons

const LikeButton = e => {
  e.target.classList.toggle("element__like-button_active");
}

document.querySelector(".element__like-button").addEventListener("click", LikeButton);

const buttons = [...document.querySelectorAll(".element__like-button")];
buttons.forEach(button => {
  button.addEventListener("click", LikeButton)
});

document.querySelector(".element__delete-button").addEventListener("click", deleteButton);

const deleteButtons = [...document.querySelectorAll(".element__delete-button")];
deleteButtons.forEach(button => {
  button.addEventListener("click", deletePic)
});

function deletePic () {
  this.closest(".element").remove(); 
}

//popups

function openPopup(popups) {
  popups.classList.add("popup_opened");
}

function closePopup(popups) {
  popups.classList.remove("popup_opened");
}

//popup2 adding elements

function openAddForm() {
  openPopup(addForm);
};

function closeAddForm() {
  closePopup(addForm);
};

function newElements (evt) {
  evt.preventDefault ();

  const element = document.querySelector(".template").content.cloneNode(true);
  
  inputElementName.textContent = inputElementName.value;
  inputElementLink.src = inputElementLink.value;

  element.querySelector(".element__image").src = inputElementLink.value;
  element.querySelector(".element__title").textContent = inputElementName.value;
  element.querySelector(".element__like-button").addEventListener("click", LikeButton);
  element.querySelector(".element__delete-button").addEventListener("click", deletePic);
  element.querySelector(".element__image").addEventListener("click", openPicPopup);
  
  elementBox.prepend(element);
  
  closeAddForm();
}

addButton.addEventListener("click", openAddForm);

closeAdd.addEventListener("click", closeAddForm);

addElement.addEventListener("submit", newElements);

//popup3 open fullsize image

let elementImage = document.querySelectorAll(".element__image");

const text = document.querySelector(".element__title").childNodes[0].nodeValue;

const openPicPopup = (img) => {
  fullImage.querySelector(".popup__image").src = img.currentTarget.src;  
  fullImage.querySelector(".popup__title_pic").textContent = text;
  fullImage.classList.add("popup_opened");
  
}

elementImage.forEach(img => {
  img.addEventListener("click", openPicPopup);
});

function closePicPopup() {
  fullImage.classList.remove("popup_opened");
}

imgForm.addEventListener("click", closePicPopup);
closeImg.addEventListener("click", closePicPopup);

