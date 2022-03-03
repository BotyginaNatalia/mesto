let showEditForm = document.querySelector(".popup");

let edit = document.querySelector(".profile");

let editButton = document.querySelector(".profile__edit-button");

let closeButton = document.querySelector(".popup__close-button");

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