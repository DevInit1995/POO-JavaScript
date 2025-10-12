const passagem = document.querySelectorAll(".form-step");
const avancar = document.querySelectorAll(".btnAvancar");
const voltar = document.querySelectorAll(".btnVoltar");
let etapaAtual = 0;

class Carrossel {
    cards = () => {
        avancar.forEach(btn => {
            btn.addEventListener("click", () => {
                passagem[etapaAtual].classList.remove("active");
                etapaAtual++;
                passagem[etapaAtual].classList.add("active");
            });
        });

        voltar.forEach(btn => {
            btn.addEventListener("click", () => {
                passagem[etapaAtual].classList.remove("active");
                etapaAtual--;
                passagem[etapaAtual].classList.add("active");
            });
        });
    }
}

const cards = new Carrossel();
cards.cards();