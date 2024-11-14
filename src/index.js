import "../pages/index.css";
import { createCard } from "./components/card.js";
import { initialCards } from "./components/cards.js";

const cardsListContainer = document.querySelector(".places__list");

function renderCards() {
  initialCards.forEach((item) => {
    const cardElement = createCard(item, deleteCard);
    cardsListContainer.append(cardElement);
  });
}

function deleteCard(evt) {
  evt.target.closest(".places__item").remove();
}

renderCards();
