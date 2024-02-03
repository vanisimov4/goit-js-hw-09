const form = document.querySelector('form.feedback-form');

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function handleInput(evt) { 
    console.log("hi");
    console.log(evt.target.elements.email.value);
    console.log(evt.target.elements.message.value);
    // const objForm = {
    //     email:
    //     message: 
    // };

    // localStorage.setItem("feedback-form-state", "JSON.stringify(objForm)");
}

function handleSubmit(evt) { 
    
}
