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
    constructor(id, nomeCompleto, sexo, dataNascimento, estado, cidade, 
        bairro, rua, numero, cep, complemento, telefone, celular, email, 
        cpf, rg, cnh, dataCadastro) {
            this.id = id;
            this.nomeCompleto = nomeCompleto;
            this.sexo = sexo;
            this.dataNascimento = dataNascimento;
            this.estado = estado;
            this.cidade = cidade;
            this.bairro = bairro;
            this.rua = rua;
            this.numero = numero;
            this.cep = cep;
            this.complemento = complemento;
            this.telefone = telefone;
            this.celular = celular;
            this.email = email;
            this.cpf = cpf;
            this.rg = rg;
            this.cnh = cnh;
            this.dataCadastro = dataCadastro;
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