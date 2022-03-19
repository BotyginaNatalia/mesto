//for popup1

let showEditForm = document.querySelector(".popup");

let edit = document.querySelector(".profile");

let editButton = document.querySelector(".profile__edit-button");

let closeButton = document.querySelector(".popup__close-button");

//for popup2

let addForm = document.querySelector(".popup2");

let addButton = document.querySelector(".profile__add-button");

let closeButton2 = document.querySelector(".popup__close-button2");

//for popup3

let closeButton3 = document.querySelector(".popup__close-button3");

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

const elementBox = document.querySelector(".elements");

function renderElementBox (name, link) {
  const elementTemplate = document.querySelector(".template").content.cloneNode(true);

  elementTemplate.querySelector(".element__title").textContent = name;
  elementTemplate.querySelector(".element__image").src = link;

  elementBox.append(elementTemplate);
}

initialCards.forEach(card => renderElementBox(card.name, card.link));

//buttons

const LikeButton = e => {
  e.target.classList.toggle("element__like-button_active")
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

//popup1

function openPopup() {
  showEditForm.classList.add("popup_opened");

  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  
}

function closePopup() {
  showEditForm.classList.remove("popup_opened");
}

let formElement = document.querySelector(".popup__container");

let inputName = document.querySelector(".popup__info_name_active");
let inputJob = document.querySelector(".popup__info_job_active");

let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__subtitle");

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;

  closePopup();
}

editButton.addEventListener("click", openPopup);

closeButton.addEventListener("click", closePopup);

formElement.addEventListener("submit", formSubmitHandler);

//popup2

function openPopup2() {
  addForm.classList.add("popup_opened2");
}

function closePopup2() {
  addForm.classList.remove("popup_opened2");
}

let inputElementName = document.querySelector(".popup2__info_item");

let inputElementLink = document.querySelector(".popup2__info_link");

let addFormElement = document.querySelector(".popup__container2");

function renderNewElements (evt) {
  evt.preventDefault ();

  const element = document.querySelector(".template").content.cloneNode(true);
  
  inputElementName.textContent = inputElementName.value;
  inputElementLink.src = inputElementLink.value;

  element.querySelector(".element__image").src = inputElementLink.value;
  element.querySelector(".element__title").textContent = inputElementName.value;
  element.querySelector(".element__like-button").addEventListener("click", LikeButton);
  element.querySelector(".element__delete-button").addEventListener("click", deletePic);
  element.querySelector(".element__image").addEventListener("click", openPopup3);

  elementBox.prepend(element);
  
  closePopup2();
}


addButton.addEventListener("click", openPopup2);

closeButton2.addEventListener("click", closePopup2);

addFormElement.addEventListener("submit", renderNewElements);

//popup3

let popup3 = document.querySelector(".popup3");

let elementImage = document.querySelectorAll(".element__image");

const text = document.querySelector(".element__title").childNodes[0].nodeValue;

const openPopup3 = (img) => {
  popup3.querySelector(".popup__image").src = img.currentTarget.src;  
  popup3.querySelector(".popup__title3").textContent = text;
  popup3.classList.add("popup_opened3");
}

elementImage.forEach(img => {
  img.addEventListener("click", openPopup3);
});

function closePopup3() {
  popup3.classList.remove("popup_opened3");
}

closeButton3.addEventListener("click", closePopup3);








