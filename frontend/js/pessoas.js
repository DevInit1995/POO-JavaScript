/*Dia 2 – Funções Construtoras
📌 Teoria e prática:

Como criar objetos reutilizáveis com função construtora

Uso de new

Adicionar métodos via prototype

✅ Exemplo:

js
Copiar
Editar
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
Pessoa.prototype.apresentar = function() {
  console.log(`Olá, meu nome é ${this.nome}`);
};
let p1 = new Pessoa("João", 30);
p1.apresentar();*/

class Pessoa {
    constructor(id, nome, sexo, idade, profissao, 
        estado, cidade, bairro, rua, numero, cep, 
        telefone, email, cpf, rg, cnh, tipoPessoa, 
        dataCadastro, veiculos, historicoServicos){
            this.id = id;
            this.nome = nome;
            this.sexo = sexo;
            this.idade = idade;
            this.profissao = profissao;
            this.estado = estado;
            this.cidade = cidade;
            this.bairro = bairro;
            this.rua = rua;
            this.numero = numero;
            this.cep = cep;
            this.telefone = telefone;
            this.email = email;
            this.cpf = cpf;
            this.rg = rg;
            this.cnh = cnh;
            this.tipoPessoa = tipoPessoa;
            this.dataCadastro = dataCadastro;
            this.veiculos = veiculos;
            this.historicoServicos = historicoServicos;
    }

    paginaFucionarioCadastro = () => {
      const botao = document.getElementById("btnFuncionarios");
      const urlParaAbrir = "funcionarios.html";

      botao.addEventListener('click', function() {
        window.open(urlParaAbrir, '_blank');
      });
    }

    paginaClientesCadastro = () => {
      const botao = document.getElementById("btnClientes");
      const urlParaAbrir = "clientes.html";

      botao.addEventListener('click', function() {
        window.open(urlParaAbrir, '_blank');
      });
    }

    paginaFornecedoresCadastro = () => {
      const botao = document.getElementById("btnFornecedores");
      const urlParaAbrir = "fornecedores.html";

      botao.addEventListener('click', function() {
        window.open(urlParaAbrir, '_blank');
      });
    }
}

aberturaPagina = new Pessoa();
aberturaPagina.paginaFucionarioCadastro();
aberturaPagina.paginaClientesCadastro();
aberturaPagina.paginaFornecedoresCadastro();

/*📘 Praticar:

Criar um sistema de cadastro simples com objetos de pessoas e produtos*/