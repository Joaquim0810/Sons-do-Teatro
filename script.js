const botoes = document.querySelectorAll(".som");
const pararTudo = document.getElementById("pararTudo");

let sonsTocando = [];

botoes.forEach(botao => {
    botao.addEventListener("click", function () {

        const arquivo = this.dataset.audio;

        const som = new Audio(arquivo);

        som.play();

        this.classList.add("tocando");

        sonsTocando.push({
            audio: som,
            botao: this
        });

        som.addEventListener("ended", function () {
            botao.classList.remove("tocando");
            sonsTocando = sonsTocando.filter(item => item.audio !== som);
        });
    });
});

pararTudo.addEventListener("click", function () {

    sonsTocando.forEach(item => {
        item.audio.pause();
        item.audio.currentTime = 0;
        item.botao.classList.remove("tocando");
    });

    sonsTocando = [];
});