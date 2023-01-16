import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
// const formData = {};
getValueFromLocalStorage();


form.addEventListener('input', throttle(onInput,500));
form.addEventListener('submit', onFormSubmit);

function onInput(event) {
    
    // formData[event.target.name] = event.target.value;
    const {
    elements: { email, message },
    } = document.querySelector('.feedback-form');

    const formData = {
        userEmail: email.value,
        userMessage: message.value,
    };
    // console.log(formData)

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function onFormSubmit(event) {
    event.preventDefault();


    const userDataJSON = localStorage.getItem(STORAGE_KEY);
    const userDataParsed = JSON.parse(userDataJSON);
    console.log(userDataParsed)

    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    
}


function getValueFromLocalStorage() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parseSavedMessage = JSON.parse(savedMessage);

    form.elements.email.value = parseSavedMessage?.userEmail || '';
    form.elements.message.value = parseSavedMessage?.userMessage || '';

    // if (parseSavedMessage) {
    //     form.value = parseSavedMessage;
    // }
    
}