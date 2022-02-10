//Переменные попапа//
const popupElement = document.querySelector('.popup');
const closeButton = popupElement.querySelector('.popup__close-button');
const addButton = document.querySelector('.profile__editbutton');

//Переменные формы попапа//
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_profile-name');
const jobInput = formElement.querySelector('.popup__input_profile-job');

//Переменные профиля//
const inputValueName = document.querySelector('.profile__title');
const inputValueJob = document.querySelector('.profile__subtitle');

//Функции переключения//
openPopUp = function () {
    popupElement.classList.add('popup_opened');
    nameInput.value = inputValueName.textContent;
    jobInput.value = inputValueJob.textContent;
};
closePopUp = function () {
    popupElement.classList.remove('popup_opened');
};

//Переключение для кнопок "добавить" и "редактировать"//
addButton.addEventListener('click', openPopUp);
closeButton.addEventListener('click', closePopUp);

//Функция перезаписи и сохранения изменений и отправки формы//
function setPopUpName(evt) {
    evt.preventDefault();
    inputValueName.textContent = nameInput.value;
    inputValueJob.textContent = jobInput.value;
    closePopUp();
};

formElement.addEventListener('submit', setPopUpName);