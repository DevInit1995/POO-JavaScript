//conta bancaria
const inputNomeCompleto = document.getElementById("nomeCompleto");
const inputDataNascimento = document.getElementById("dataNascimento");
const inputNacionalidade = document.getElementById("nacionalidade");
const inputEstadoCivil = document.getElementById("estadoCivil");
const inputNomeMae = document.getElementById("nomeMae");
const inputNomePai = document.getElementById("nomePai");
const btnCadastrar = document.getElementById("btnCadastrar");

class CadastroBancario{
    constructor(nome, nascimento, nacionalidade, estadoCivil, mae, pai) {
        this.inputNomeCompleto = nome;
        this.dataNascimento = nascimento;
        this.inputNacionalidade = nacionalidade;
        this.inputEstadoCivil = estadoCivil;
        this.inputNomeMae = mae;
        this.inputNomePai = pai;
    }

    validacao = () => {
        const nomeCompleto = inputNomeCompleto.value.trim();
        const nomeMae = inputNomeMae.value.trim();
        const nomePai = inputNomePai.value.trim();
        const dataNascimento = inputDataNascimento.value.trim();
        const nacionalidade = inputNacionalidade.value.trim();
        const estadoCivil = inputEstadoCivil.value.trim();
        
        if(!nomeCompleto || !estadoCivil 
            || !nomeMae || !nomePai || !dataNascimento || !nacionalidade){
            alert("Por favor, preencha todos os campos.");
        }else if(!isNaN(nomeCompleto) || !isNaN(estadoCivil)
            || !isNaN(nomeMae) || !isNaN(nomePai) || !isNaN(nacionalidade)){
            alert("Este campo só permite caracteres.");
        }else{
            alert("Cadastro realizado.")
        }
    }
}

const cadastro = new CadastroBancario();
btnCadastrar.addEventListener("click", cadastro.validacao);

const steps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".prev");
let currentStep = 0;

class Carrossel {
    card = () => {
        //debugger
        nextBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                steps[currentStep].classList.remove("active");
                currentStep++;
                steps[currentStep].classList.add("active");
            });
        }); 

        prevBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                steps[currentStep].classList.remove("active");
                currentStep--;
                steps[currentStep].classList.add("active");
            });
        });
    }      
}

const card = new Carrossel();
card.card();
    



