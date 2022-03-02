let showEditForm = document.querySelector(".popup");

let edit = document.querySelector(".profile");

let editButton = document.querySelector(".profile__edit-button");

let closeButton = document.querySelector(".popup__close-button");

let formElement = document.querySelector(".popup__container");

function openPopup() {
  showEditForm.classList.add("popup_opened");
}

function closePopup() {
  showEditForm.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  let inputName = document.querySelector(".popup__info_name_active");
  let inputJob = document.querySelector(".popup__info_job_active");

  let profileName = document.querySelector(".profile__title");
  let profileJob = document.querySelector(".profile__subtitle");

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;

  closePopup();
}

editButton.addEventListener("click", openPopup);

closeButton.addEventListener("click", closePopup);

formElement.addEventListener("submit", formSubmitHandler);

submitButton.addEventListener("click", closePopup);