const form = document.getElementById('quizForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const resposta = document.querySelector('input[name="resposta"]:checked').value;

    const email = "giovanasgarbi33@gmail.com";
    const assunto = encodeURIComponent("Resposta do Quiz Sabrina 💖");
    const corpo = encodeURIComponent(`A resposta foi: ${resposta}`);

    window.location.href = `mailto:${email}?subject=${assunto}&body=${corpo}`;
});
