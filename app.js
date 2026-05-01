const botoes = document.querySelectorAll('.btn');

botoes.forEach(function (botao) {
    botao.addEventListener('click', function () {
        const produto = botao.getAttribute('data-produto');
        alert('KABOOM!!!');
    });
});