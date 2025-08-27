const exibir = document.getElementById("btn-objeto-literal");
const dados = document.getElementById("dados-objeto-literal");
const mensagem = document.getElementById("mensagem-objeto-literal");

exibir.addEventListener("click", () => {
    //a) Objeto literal (mais simples)
    const pessoa = {
        nome: "Jhon", 
        idade: 30,
        falar() {
            console.log("Olá, meu nome é " + this.nome);
        }
    };
    
    dados.innerHTML = JSON.stringify(pessoa);
    mensagem.innerHTML = `Olá meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos`;
    pessoa.falar();
});

