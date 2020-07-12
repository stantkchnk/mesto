// Получить объекты popup, кнопкок открытия/закрытия popup
let editButton = document.querySelector(".button_action_edit");
let popup = document.querySelector(".popup");
let closeButton = popup.querySelector(".button_action_close");

//Добавить/удалить класс для отображения/скрытия popup
function togglePopup(evt) {
  evt.preventDefault();
  popup.classList.toggle("popup_opened");
}

// Отслеживать нажатие кнопки открытия popup с вызовом функции для открытия popup
editButton.addEventListener("click", togglePopup);

// Отслеживать нажатие кнопки закрытия popup с вызовом функции для скрытия popup
closeButton.addEventListener("click", togglePopup);

// Обработать введенные в форму профиля данные
function formSubmitHandler(evt) {
  evt.preventDefault();

  // Получить введенные в поля имени и описания popup значения
  let nameInput = popup.querySelector(".popup__profile-name");
  let aboutInput = popup.querySelector(".popup__profile-about");

  // Получить объекты имени и описания профиля
  let nameProfile = document.querySelector(".profile__title");
  let aboutProfile = document.querySelector(".profile__about");

  // Задать объектам имени и описания в профиле новые значения
  nameProfile.textContent = nameInput.value;
  aboutProfile.textContent = aboutInput.value;

  // Закрыть popup
  togglePopup(evt);
}

// Получить объект кнопки сохранения введенных в форму данных
let popupContainer = popup.querySelector(".popup__container");

// Отслеживать нажатие кнопки сохранения новых данных профиля
popupContainer.addEventListener("submit", formSubmitHandler);
