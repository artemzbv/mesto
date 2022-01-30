const popupElement = document.querySelector('.popup');
const body = document.querySelector('.body');
const closeButton = popupElement.querySelector('.popup__close-button');
const addButton = document.querySelector('.profile__editbutton');
const saveButton = document.querySelector('.popup__submit-button');

addButton.addEventListener('click', () => {
popupElement.classList.add('popup_opened');
});

closeButton.addEventListener('click', () => {
popupElement.classList.remove ('popup_opened');
});


let profile = document.querySelector ('.profile');
let profileTitle = profile.querySelector('.profile__title');
let profileSubtitle = profile.querySelector('.profile__subtitle');

let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__nameinput');
let jobInput = formElement.querySelector('.popup__jobinput')



function setPopUpName () {  
let inputValueName = document.querySelector('.profile__title');
let inputValueJob = document.querySelector('.profile__subtitle');  
    
inputValueName.textContent = nameInput.value;
inputValueJob.textContent = jobInput.value;
}

saveButton.addEventListener('click', () => {
popupElement.classList.remove('popup_opened');
setPopUpName ();
});
