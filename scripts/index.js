//Практическая работа №4
//Переменные попапа//
const popupElement = document.getElementById('popup-edit');
const closeButton = popupElement.querySelector('.popup__close-button');
const editButton = document.querySelector('.profile__editbutton');

//Переменные формы попапа//
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_profile_name');
const jobInput = formElement.querySelector('.popup__input_profile_job');

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
editButton.addEventListener('click', openPopUp);
closeButton.addEventListener('click', closePopUp);

//Функция перезаписи и сохранения изменений и отправки формы//
function setPopUpName(evt) {
  evt.preventDefault();
  inputValueName.textContent = nameInput.value;
  inputValueJob.textContent = jobInput.value;
  closePopUp();
};

formElement.addEventListener('submit', setPopUpName);

//Практическая работа №5

// выбираем нужные элементы в html файле
const popupAdd = document.getElementById('popup-add');
const closeCardButton = popupAdd.querySelector('.popup__close-button');

// создаем кнопки открытия и закрытия нового попапа
//кнопка "добавить"
addCardButton = document.querySelector('.profile__addbutton')
addCard = function () {
  popupAdd.classList.add('popup_opened');
};
//кнопка "закрыть"
closeCard = function () {
  popupAdd.classList.remove('popup_opened');
};

addCardButton.addEventListener('click', addCard);
closeCardButton.addEventListener('click', closeCard);

//Объявляем массив//
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//объявляем template, элементы которого перейдут в конйтенер блока elements//  
const elementsTemplate = document.querySelector('#user').content;
const elementsContainer = document.querySelector('.elements');

//Создаем функцию для лайков
function likeEvent(evt) {
  evt.target.classList.toggle('element__like_active');
};
//Создаем функцию для удаления карточек
function deleteEvent(evt) {
  evt.target.closest('.element').remove()
};
//Объявляем переменные для расширения картинки при клике
const elementImageExpand = document.querySelector('.popupimg__mask-group');
const elementImageExpandText = document.querySelector('.popupimg__text');
const popupImage = document.querySelector('.popupimg');

//Объявляем функцию, которая переносит элементы из массива в контейнер:
//массив -> template -> elements
function massiveToCards(item) {
  const elementTemplate = elementsTemplate.querySelector('.element').cloneNode(true);
  let imageTemplate = elementTemplate.querySelector('.element__mask-group');
  let titleTemplate = elementTemplate.querySelector('.element__title');
  let like = elementTemplate.querySelector('.element__like');
  let deleteImage = elementTemplate.querySelector('.element__delete');
  imageTemplate.src = item.link;
  titleTemplate.textContent = item.name;
  item.alt = item.name;
  deleteImage.addEventListener('click', deleteEvent);
  like.addEventListener('click', likeEvent);

  imageTemplate.addEventListener('click', function () {
    popupImage.classList.toggle('popupimg_opened');
    elementImageExpand.src = item.link;
    elementImageExpandText.textContent = item.name;
  });
  console.log(popupImage);
  elementsContainer.prepend(elementTemplate);
}

//объявляем функцию, которая перебирает элементы массива
function render(item) {
  item.forEach(massiveToCards);
};
render(initialCards);

//Объявляем функцию для закрытия картинки
closeImagePopUp = function () {
  popupImage.classList.remove('popupimg_opened');
};
closeImage = document.querySelector('.popupimg__close-button');
closeImage.addEventListener('click', closeImagePopUp);

//Выбираем нужные инпуты через которые будем добавилять карточки
const formImageElement = document.querySelector('.popup__form_image');
const titleInput = formImageElement.querySelector('.popup__input_profile_title');
const refInput = formImageElement.querySelector('.popup__input_profile_ref');

//Создаем функцию сохранения инпутов в новую карточку(объект) массива 
function setPopUpImage(evt) {
  evt.preventDefault();
  //создаем объект для массива, в котором инпуты появятся в попапе 
  const object = {
    name: titleInput.value,
    link: refInput.value,
  };
  //проведем объект через темплейт в секцию elements
  massiveToCards(object);
  //закроем карточку
  closeCard();
};
formImageElement.addEventListener('submit', setPopUpImage);

