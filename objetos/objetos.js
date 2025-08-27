//a) Objeto literal (mais simples)

const exibir = document.getElementById("btn-objeto-literal");
//const dados = document.getElementById("dados-objeto-literal");
const mensagem = document.getElementById("mensagem-objeto-literal");

exibir.addEventListener("click", () => {
    const pessoa = {
        nome: "Jhon", 
        idade: 30,
        peso: 78.80,
        altura: 1.87,
        sexo: "Masculino",
        cor: "Pardo",

        falar() {
            console.log("Olá, meu nome é " + this.nome);
        }
    };
    
    //dados.innerHTML = JSON.stringify(pessoa);
    mensagem.innerHTML = "Olá meu nome é " + pessoa.nome + 
    " e esse são os meus atributos de objeto: " + "Idade" + pessoa.idade
    + "Peso" + pessoa.peso + "Altura: " + pessoa.peso
    + "Sexo: " + pessoa.sexo + "Cor: " + pessoa.cor;
    
    pessoa.falar();
});

//B) Função construtora (prá-ES6)
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function() {
    console.log("Oi, eu sou o " + this.nome);
};

const pessoa = new Pessoa("Jhon", 30);
pessoa.falar();// Oi, eu sou Jhon 

//c) Classe (ES6+)
class Pessoa2 {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    falar(){
        console.log("Oi, eu sou " + this.nome);
    }
}

const pessoa2 = new Pessoa("Jhonny" + 25);
pessoa2.falar();


