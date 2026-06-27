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
    constructor(id, nomeCompleto, sexo, dataNascimento, especialidade, funcao, 
        salario, estado, cidade, bairro, rua, numero, cep, complemento, telefone,
        celular, email, contatoEmergencia, cpf, rg, cnh, pis, tipoPessoa, dataCadastro,
        dataAdmissao, cargaHoraria, turno, banco, agencia, conta, tituloEleitor, tipoConta,
        status, ultimaAtualizacao, veiculos, historicoServicos) {
            this.id = id;
            this.nomeCompleto = nomeCompleto;
            this.sexo = sexo;
            this.dataNascimento = dataNascimento;
            this.especialidade = especialidade;
            this.funcao = funcao;
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
            this.contatoEmergencia = contatoEmergencia;
            this.cpf = cpf;
            this.rg = rg;
            this.cnh = cnh;
            this.pis = pis;
            this.tipoPessoa = tipoPessoa;
            this.dataCadastro = dataCadastro;
            this.dataAdmissao = dataAdmissao;
            this.cargaHoraria = cargaHoraria;
            this.turno = turno;
            this.banco = banco;
            this.agencia = agencia;
            this.conta = conta;
            this.tituloEleitor = tituloEleitor;
            this.tipoConta = tipoConta;
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