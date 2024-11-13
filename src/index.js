import "../pages/index.css";
import { createCard, likeCard, deleteCard } from "./components/card.js";
import {
  openModal,
  closeModal,
  handleOverlayClose,
} from "./components/modal.js";
import { initialCards } from "./components/cards.js";

const cardsListContainer = document.querySelector(".places__list");
const openEditProfileButton = document.querySelector(".profile__edit-button");
const newCardBtn = document.querySelector(".profile__add-button");
const editProfileModal = document.querySelector(".popup_type_edit");
const newCardModal = document.querySelector(".popup_type_new-card");
const userProfileName = document.querySelector(".profile__title");
const userProfileDescription = document.querySelector(".profile__description");
const nameInputField = editProfileModal.querySelector(
  ".popup__input_type_name"
);
const jobInputField = editProfileModal.querySelector(
  ".popup__input_type_description"
);
const imagePopupModal = document.querySelector(".popup_type_image");
const imagePopupElement = imagePopupModal.querySelector(".popup__image");
const imagePopupCaption = imagePopupModal.querySelector(".popup__caption");
const editProfileFormElement = editProfileModal.querySelector(".popup__form");
const cardNameInputFieldField = document.querySelector(
  ".popup__input_type_card-name"
);
const cardLinkInputField = document.querySelector(".popup__input_type_url");

// обработчик редактирования профиля

openEditProfileButton.addEventListener("click", () => {
  nameInputField.value = userProfileName.textContent;
  jobInputField.value = userProfileDescription.textContent;
  openModal(editProfileModal);
});

// обработчик отправки форм

editProfileFormElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  userProfileName.textContent = nameInputField.value;
  userProfileDescription.textContent = jobInputField.value;
  closeModal(editProfileModal);
});

// открытие модального окна изображения карточки

newCardBtn.addEventListener("click", () => {
  openModal(newCardModal);
});

newCardModal.querySelector(".popup__form").addEventListener("submit", (evt) => {
  handleClickAddCard(evt);
  closeModal(newCardModal);
});

function handleClickAddCard(evt) {
  evt.preventDefault();

  const newCard = {
    name: cardNameInputFieldField.value,
    link: cardLinkInputField.value,
  };

  const cardElement = createCard(newCard, likeCard, deleteCard, showImagePopup);
  cardsListContainer.prepend(cardElement);

  cardNameInputFieldField.value = "";
  cardLinkInputField.value = "";
}

function showImagePopup(card) {
  imagePopupElement.src = card.link;
  imagePopupElement.alt = card.name;
  imagePopupCaption.textContent = card.name;
  openModal(imagePopupModal);
}

// отображение шести карточек при открытии страницы
renderCards();

function renderCards() {
  initialCards.forEach((item) => {
    const cardElement = createCard(item, likeCard, deleteCard, showImagePopup);
    cardsListContainer.append(cardElement);
  });
}

// функиция обработчик событий по оверлею
document
  .querySelectorAll(".popup")
  .forEach((popup) =>
    popup.addEventListener("click", (evt) => handleOverlayClose(evt))
  );
