// Получить объекты popup, кнопкок открытия/закрытия popup
let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = popup.querySelector(".popup__close-button");

// Получить объекты имени и описания профиля
let nameProfile = document.querySelector(".profile__title");
let aboutProfile = document.querySelector(".profile__about");

// Получить объекты полей формы
let nameInput = popup.querySelector(".popup__input_content_name");
let aboutInput = popup.querySelector(".popup__input_content_about");

// Получить объект кнопки сохранения введенных в форму данных
let popupContainer = popup.querySelector(".popup__container");

//Открыть/закрыть popup, отображая в полях ввода данные из профиля
function togglePopup() {
  // Проверить открывается или закрывается форма. Если открывается, добавить в поля ввода значения из профиля
  if (!popup.classList.contains("popup_opened")) {
    nameInput.value = nameProfile.textContent.trim();
    aboutInput.value = aboutProfile.textContent.trim();
  }
  popup.classList.toggle("popup_opened"); // Добавить/удалить класс для отображения/скрытия popup
}

// Обработать введенные в форму профиля данные
function formSubmitHandler(evt) {
  evt.preventDefault();

  // Задать объектам имени и описания в профиле новые значения
  nameProfile.textContent = nameInput.value;
  aboutProfile.textContent = aboutInput.value;

  // Закрыть popup
  togglePopup(evt);
}

// Отслеживать нажатие кнопки открытия popup с вызовом функции для открытия popup
editButton.addEventListener("click", togglePopup);

// Отслеживать нажатие кнопки закрытия popup с вызовом функции для скрытия popup
closeButton.addEventListener("click", togglePopup);

// Отслеживать нажатие кнопки сохранения новых данных профиля
popupContainer.addEventListener("submit", formSubmitHandler);
