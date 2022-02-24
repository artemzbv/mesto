//Практическая работа №4

//Переменные попапа//
const profilePopup = document.getElementById('popup-edit');
const closeProfileButton = profilePopup.querySelector('.popup__close-button');
const editButton = document.querySelector('.profile__editbutton');

//Переменные формы попапа//
const profileForm = document.querySelector('.popup__form');
const nameInput = profileForm.querySelector('.popup__input_profile_name');
const jobInput = profileForm.querySelector('.popup__input_profile_job');

//Переменные профиля//
const inputValueName = document.querySelector('.profile__title');
const inputValueJob = document.querySelector('.profile__subtitle');

//Функции переключения//
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

//Переключение для кнопок "добавить" и "редактировать"//
editButton.addEventListener('click', function () {
  openPopup(profilePopup);
  nameInput.value = inputValueName.textContent;
  jobInput.value = inputValueJob.textContent;
});

closeProfileButton.addEventListener('click', function () {
  closePopup(profilePopup)
});

//Функция перезаписи и сохранения изменений и отправки формы//
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  inputValueName.textContent = nameInput.value;
  inputValueJob.textContent = jobInput.value;
  closePopup(profilePopup);
};

profileForm.addEventListener('submit', handleProfileFormSubmit);

//Практическая работа №5

// выбираем нужные элементы в html файле
const popupAdd = document.getElementById('popup-add');
const closeAddButton = popupAdd.querySelector('.popup__close-button');
//создаем кнопки открытия и закрытия нового попапа
//кнопка "добавить"
const addCardButton = document.querySelector('.profile__addbutton')

//Привязываем слушатель к кнопке "добавить"
addCardButton.addEventListener('click', function () {
  openPopup(popupAdd);
});

//привязываем слушатель к кнопке "закрыть"
closeAddButton.addEventListener('click', function () {
  closePopup(popupAdd);
});

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
function toggleLikes(evt) {
  evt.target.classList.toggle('element__like_active');
};
//Создаем функцию для удаления карточек
function deleteCard(evt) {
  evt.target.closest('.element').remove()
};
//Объявляем переменные для расширения картинки при клике
const popupImage = document.querySelector('.image-popup');
const elementImageExpand = document.querySelector('.image-popup__mask-group');
const elementImageExpandText = document.querySelector('.image-popup__text');
//Объявляем функцию, которая переносит элементы из массива в контейнер:
//массив -> template -> elements
function createCard(item) {
  const cardElement = elementsTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('.element__mask-group');
  const cardTitle = cardElement.querySelector('.element__title');
  const cardLike = cardElement.querySelector('.element__like');
  const cardElementDelete = cardElement.querySelector('.element__delete');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;

  cardImage.addEventListener('click', function () {
    openPopup(popupImage);
    elementImageExpand.src = item.link;
    elementImageExpand.alt = item.name;
    elementImageExpandText.textContent = item.name;
  });

  cardElementDelete.addEventListener('click', deleteCard);
  cardLike.addEventListener('click', toggleLikes);

  return cardElement;
};

function prependCard(item) {
  const cardElement = createCard(item)
  elementsContainer.prepend(cardElement);
};

//объявляем функцию, которая перебирает элементы массива
function render(items) {
  items.forEach(prependCard);
};
render(initialCards);

//Объявляем функцию для закрытия картинки
const closeImageButton = document.querySelector('.popup__close-button_image');
closeImageButton.addEventListener('click', function closeImagePopup() {
  closePopup(popupImage);
});
//Выбираем нужные инпуты через которые будем добавилять карточки
const formImageElement = document.querySelector('.popup__form_image');
const titleInput = formImageElement.querySelector('.popup__input_profile_title');
const refInput = formImageElement.querySelector('.popup__input_profile_ref');

//Создаем функцию сохранения инпутов в новую карточку(объект) массива 
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  //создаем объект для массива, в котором инпуты появятся в попапе 
  const object = {
    name: titleInput.value,
    link: refInput.value,
  };
  //проведем объект через темплейт в секцию elements
  prependCard(object);
  //закроем карточку
  closePopup(popupAdd);
  titleInput.value = ""
  refInput.value = ""
};
formImageElement.addEventListener('submit', handleCardFormSubmit);

