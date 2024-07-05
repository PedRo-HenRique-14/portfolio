const form = document.querySelector(".contact-form");
const fullNameInput = form.querySelector("#full-name");
const emailInput = form.querySelector("#email");
const messageArea = form.querySelector("#message-area");
const statusSpan = form.querySelectorAll(".status");
const submitButton = form.querySelector("#submitForm");
var exeption = false

submitButton.addEventListener("click", () => {
    if(fullNameInput.value == '') {
        statusSpan[0].style.color = "#ff0000";
        statusSpan[0].innerHTML = "Este campo é obrigatório!";
        fullNameInput.style.borderColor = "#ff0000";
        exeption = true;
    } else {
        statusSpan[0].style.color = "";
        statusSpan[0].innerHTML = "";
        fullNameInput.style.borderColor = "";
        exeption = false;
    }

    if(emailInput.value == '') {
        statusSpan[1].style.color = "#ff0000";
        statusSpan[1].innerHTML = "Este campo é obrigatório!";
        emailInput.style.borderColor = "#ff0000";
        exeption = true;
    } else {
        statusSpan[1].style.color = "";
        statusSpan[1].innerHTML = "";
        emailInput.style.borderColor = "";
        exeption = false;
    }

    if(messageArea.value == '') {
        statusSpan[2].style.color = "#ff0000";
        statusSpan[2].innerHTML = "Este campo é obrigatório!";
        messageArea.style.borderColor = "#ff0000";
        exeption = true;
    } else {
        statusSpan[2].style.color = "";
        statusSpan[2].innerHTML = "";
        messageArea.style.borderColor = "";
        exeption = false;
    }

    if(!exeption) {
        statusSpan[3].style.color = "#3cff00";
        statusSpan[3].innerHTML = "Mensagem enviada! Obrigado.";
    } else {
        statusSpan[3].style.color = "";
        statusSpan[3].innerHTML = "";
    }
});