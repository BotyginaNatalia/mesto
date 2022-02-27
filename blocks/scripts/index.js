let container = document.querySelector(".content");

let showEditForm = container.querySelector(".popup");

let edit = container.querySelector(".profile");

let editButton = edit.querySelector(".profile__edit-button");

let closeButton = showEditForm.querySelector(".popup__close-button");

function openPopup() {
  showEditForm.classList.toggle("popup_opened");
}

editButton.addEventListener("click", openPopup);

function closePopup() {
  showEditForm.classList.toggle("popup_opened");
}

editButton.addEventListener("click", closePopup);

let div = document.querySelector(".popup");

document
  .querySelector(".profile__edit-button")
  .addEventListener("click", () => {
    div.style.display =
      getComputedStyle(div).display == "block" ? "none" : "block";
  });

document.querySelector(".popup__close-button").addEventListener("click", () => {
  div.style.display =
    getComputedStyle(div).display == "block" ? "none" : "none";
});

document
  .querySelector(".popup__button-submit")
  .addEventListener("click", () => {
    div.style.display =
      getComputedStyle(div).display == "block" ? "none" : "block";
  });

let formElement = document.querySelector(".popup__container");

let inputName = formElement.querySelector(".popup__input-name");
let inputJob = formElement.querySelector(".popup__input-job");

function formSubmitHandler(evt) {
  evt.preventDefault();

  let profileName = document.querySelector(".profile__title");
  let profileJob = document.querySelector(".profile__subtitle");

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
}

formElement.addEventListener("submit", formSubmitHandler);
