let container = document.querySelector(".content");

let showEditForm = document.querySelector(".popup");

let edit = document.querySelector(".profile");

let editButton = edit.querySelector(".profile__edit-button");

let closeButton = showEditForm.querySelector(".popup__close-button");

let profile = document.querySelector(".profile");

let profileContainer = document.querySelector(".profile__main");

let formElement = document.querySelector(".popup__container");

let inputName = document.querySelector(".popup__info_name_active");

let inputJob = document.querySelector(".popup__info_job_active");

let submitButton = showEditForm.querySelector(".popup__submit-button");

function formSubmitHandler(evt) {
  evt.preventDefault();

  let profileName = document.querySelector(".profile__title");
  let profileJob = document.querySelector(".profile__subtitle");

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
}

formElement.addEventListener("submit", formSubmitHandler);

editButton.onclick = function openPopup() {
  showEditForm.classList.add("popup_opened");
};

closeButton.onclick = function closePopup() {
  showEditForm.classList.remove("popup_opened");
};

submitButton.onclick = function closePopup() {
  showEditForm.classList.remove("popup_opened");
};
