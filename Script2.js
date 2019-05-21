let typing = document.querySelector(".registered p");
let typeString = 'You have successfully been registered! We are glad to see you as a new partner. We will do our best to build your business empire. Wish you success and partnership for many years. Kind and Best regards TT team';
let i = 0;
let text = '';

function type() {
    text = typeString.slice(0, ++i);
    typing.innerHTML = text + '|';
    setTimeout(type, 100);
};