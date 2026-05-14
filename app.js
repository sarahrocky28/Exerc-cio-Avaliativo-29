const botoes = document.querySelectorAll('.btn');

botoes.forEach(function (botao) {
    botao.addEventListener('click', function () {
        const produto = botao.getAttribute('data-produto');
        alert('KABOOM!!!');
    });
});

const elemento = {
    email: document.querySelector("#email"),
    senha: document.querySelector("#senha"),
    form: document.querySelector("form"),
    button: document.querySelector("button"),
}

const dadosDigitados = {
    email: "",
    senha: "",
};

elemento.form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    // console.log(evento)
    // getdadosDigitados(elemento.email.value, elemento.senha.value);
    console.log(elemento.email.value, elemento.senha.value);
});

function getdadosDigitados(email, senha) {
    dadosDigitados.email = email;
    dadosDigitados.senha = senha;
}