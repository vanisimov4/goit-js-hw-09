const form = document.querySelector('form.feedback-form');
// const inputForm = from.querySelector('input');
// const textareaForm = from.querySelector('textarea');
// form.elements.email.value = 
const localStorageKey = "feedback-form-state";
form.elements.email.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener('input', handleFormInput);
form.addEventListener('submit', handleFormSubmit);

function handleFormInput(event) { 
    const email = form.elements.email.value;
    const message = form.elements.message.value;
        const objForm = {
            email,
            message,
    };
    console.log(objForm);
    saveToLS(localStorageKey, objForm);
}

function handleFormSubmit(event) { 
    event.preventDefault();
    console.log(event.target.elements.email.value);
    console.log(event.target.elements.message.value);
    localStorage.removeItem(localStorageKey);
    form.reset();
}

function saveToLS(key, value) {
    const zip = JSON.stringify(value);
    localStorage.setItem(key, zip);
}

function loadFromLS(key) {
    const zip = localStorage.getItem(key);
    try {
        return JSON.parse(zip);
    } catch {
        return zip;
    }
}