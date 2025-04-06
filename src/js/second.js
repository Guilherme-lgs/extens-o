const text = document.getElementById("text");
const email = document.getElementById("email");
const username = document.getElementById("senha");

function usernamecheck() {
    const textValue = text.value;
    if (textValue === "") {
        erroInput(text, "Preencha esse campo!");
    } else if (textValue.length < 3) {
        erroInput(text, "O nome deve ter pelo menos 3 caracteres!");
    }
    function erroInput(input, message) {
        const formItem = input.parentElement;
        const textMessage = formItem.querySelector("a");
        textMessage.innerText = message;
        formItem.className = "form-content error";
    }
}

