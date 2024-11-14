// Функция создания карточки
export function createCard(item, deleteCard) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);

  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardImage = cardElement.querySelector(".card__image");

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardElement.querySelector(".card__title").textContent = item.name;

  deleteButton.addEventListener("click", deleteCard);

  return cardElement;
}
