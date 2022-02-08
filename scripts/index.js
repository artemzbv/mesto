//Переменные попапа//
const popupElement = document.querySelector('.popup');
const closeButton = popupElement.querySelector('.popup__close-button');
const addButton = document.querySelector('.profile__editbutton');

//Переменные формы попапа//
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_name');
const jobInput = formElement.querySelector('.popup__input_job');

//Переменные профиля//
const inputValueName = document.querySelector('.profile__title');
const inputValueJob = document.querySelector('.profile__subtitle');

//Функция переключения//
togglePopUp = function () {
    popupElement.classList.toggle('popup_opened');
    nameInput.value.textContent = inputValueName;
    jobInput.value = inputValueJob.textContent;
};

//Переключение для кнопок "добавить" и "редактировать"//
addButton.addEventListener('click', togglePopUp);
closeButton.addEventListener('click', togglePopUp);

//Функция перезаписи и сохранения изменений и отправки формы//
function setPopUpName(evt) {
    evt.preventDefault();
    inputValueName.textContent = nameInput.value;
    inputValueJob.textContent = jobInput.value;
    togglePopUp();
};

formElement.addEventListener('submit', setPopUpName);