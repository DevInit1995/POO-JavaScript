const passagem = document.querySelectorAll(".form-step");
const avancar = document.querySelectorAll(".btnAvancar");
const voltar = document.querySelectorAll(".btnVoltar");
let etapaAtual = 0;

//ENCAPSULAMENTO POR CLASSES E MÉTODOS PRIVADOS
class CPF {
    #valor; // PRIVADO

    set(cpf) {
        const limpo = this.#limpar(cpf);

        if(!this.#validar(limpo)) {
            throw new Error("CPF inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }
    
    #limpar(cpf) {
        return cpf.replace(/\D/g, "");
    }

    #validar(cpf) {
        if (cpf.length !== 11) return false;
        if (/^(\d)\1{10}$/.test(cpf)) return false;
        return true; // validação simplificada
    }
}

this.cpf = new CPF;

class Email {
    #valor;
    
    set(email) {
        const limpo = this.#limpar(email);

        if(!this.#validar(limpo)) {
            throw new Error("E-mail inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }

    #limpar(email) {
        return email.trim().toLowerCase();
    }

    #validar(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}

this.email = new Email();

class OrdemServicosCadastro {
    constructor() {
        //ENCAPSULAMENTO POR CLASSES E MÉTODOS PRIVADOS
        this.cpf = new CPF();
        this.email = new Email();
        this.telefone = new Telefone();
        this.cep = new Cep();      
        this.placa = new Placa();
        this.ano = new Ano();
        this.kmAtual = new KmAtual();
        this.dataEntrada = new DataEntrada();
        this.dataSaida = new DataSaida();
        this.limiteCretito = new LimiteCredito();
        this.dataCadastro = new DataCadastro();
        this.precoUnitario = new this.PrecoUnitario();
    }

    validar = (valor) => valor.trim().length > 0;
    
    validarPrimeiraEtapa = () => {
        const campos = [
            {id: "nomeCompleto", mensagem: "Preencha o campo Nome Completo"},
            {id: "cpf", mensagem: "Preencha o campo CPF"},
            {id: "email", mensagem: "Preencha o campo E-mail"},
            {id: "telefone", mensagem: "Preencha o campo Telefone"},
            {id: "estado", mensagem: "Preencha o campo Estado"},
            {id: "cidade", mensagem: "Preencha o campo Cidade"},
            {id: "bairro", mensagem: "Preencha o campo Bairro"},
            {id: "rua", mensagem: "Preencha o campo Rua"},
            {id: "numero", mensagem: "Preencha o campo Número"},
            {id: "cep", mensagem: "Preencha o campo cep"},
        ]

        /*for(let campo of campos) {
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)) {
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/
        
        try {
            const cpfDigitado = document.getElementById("cpf").value;
            this.cpf.set(cpfDigitado);

            const emailDigitado = document.getElementById("email").value;
            this.email.set(emailDigitado);

            const telefoneDigitado = document.getElementById("telefone").value;
            this.telefone.set(telefoneDigitado);

            const cepDigitado = document.getElementById("cep").value;
            this.cep.set(cepDigitado);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    validarSegundaEtapa = () => {
        //validação dos campos
        const campos = [
            {id: "placa", mensagem: "Preencha o campo Placa"},
            {id: "marca", mensagem: "Preencha o campo Marca"},
            {id: "modelo", mensagem: "Preencha o campo Modelo"},
            {id: "ano", mensagem: "Preencha o campo Ano"},
            {id: "cor", mensagem: "Preencha o campo Cor"},
            {id: "motor", mensagem: "Preencha o campo Motor"},
            {id: "kmAtual", mensagem: "Preencha o campo KM Atual"},
            {id: "tipoCombustivel", mensagem: "Preencha o campo Tipo Combustível"},
        ]

        /*for(let campo of campos) {
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)) {
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        try {
            let placaDigitado = document.getElementById("placa").value;
            this.placa.set(placaDigitado);
           
            let anoDigitado = document.getElementById("ano").value;
            this.ano.set(anoDigitado);

            let kmAtualDigitado = document.getElementById("kmAtual").value;
            this.kmAtual.set(kmAtualDigitado);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    validarTerceiraEtapa = () => {
        //validação dos campos
        const campos = [
            {id: "identificacao", mensagem: "Preencha o campo Identificação"},
            {id: "servicos", mensagem: "Preencha o campo Servicos"},
            {id: "valores", mensagem: "Preencha o campo Valores"},
            {id: "entrada", mensagem: "Informe a Data de Entrada"},
            {id: "entrega", mensagem: "Informe a Data de Entrega"},
            {id: "responsavel", mensagem: "Informe o Técnico Responsável"},
        ]

        /*for(let campo of campos) {
            const valor = document.getElementById(campo.id).value; 
            if(!this.validar(valor)) {
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        try {
            let entradaDigitado = document.getElementById("entrada").value;
            this.entrada.set(entradaDigitado);

            let entregaDigitado = document.getElementById("entrega").value;
            this.entrega.set(entregaDigitado);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    validarQuartaEtapa = () => {
        //validação dos campos
        const campos = [
            {id: "formaPagamento", mensagem: "Infomre a Forma de Pagamento "},
            {id: "prazoPagamento", mensagem: "Informe o Prazo de Pagamento "},
            {id: "limiteCredito", mensagem: "Informe o Limite de Crédito"},
            {id: "condicaoEntrega", mensagem: "Informe a Condição Entrega"},                       
        ]

        /*for(let campo of campos) {
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)) {
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        try {
            const limiteCreditoDigitada = document.getElementById("limiteCredito").value;
            this.limiteCredito.set(limiteCreditoDigitada);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    validarQuintaEtapa = () => {
        const campos = [
            {id: "dataCadastro", mensagem: "Preencha o campo data de cadastro"},
        ];

        /*for(let campo of campos) {
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)) {
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }
        */
       
       try {
            const dataCadastroDigitada = document.getElementById("dataCadastro").value;
            this.dataCadastro.set(dataCadastroDigitada);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    validarSextaEtapa = () => {
        const campos = [
            {id: "nomeProduto", mensagem: "Informe o Nome Produto"},
            {id: "marca", mensagem: "Informe a Marca"},
            {id: "precoUnitario", mensagem: "Informe o Preço Unitário"},
            {id: "codigoProduto", mensagem: "Informe o Código do Produto"},
        ];

        /*for(let campo of campos) {
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)) {
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }
        */
       
       try {
            const precoUnitarioDigitada = document.getElementById("precoUnitario").value;
            this.precoUnitario.set(precoUnitarioDigitada);
            
            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    proximaEtapa = () => {
        passagem[etapaAtual].classList.remove("active");
        etapaAtual++;
        passagem[etapaAtual].classList.add("active");
    }

    etapaAnterior = () => {
        passagem[etapaAtual].classList.remove("active");
        etapaAtual--;
        passagem[etapaAtual].classList.add("active");
    }

    exibirAlerta(icone, titulo, texto) {
        Swal.fire ({
            icon: icone,
            title: titulo,
            text: texto,
        });
    }

    //LocalStorage
    concluir = () => {
        const registro = {
            placa: this.placa.get(),
            marca: document.getElementById("marca").value,
            modelo: document.getElementById("modelo").value,
            ano: this.ano.get(),
            cor: document.getElementById("cor").value,
            motor: document.getElementById("motor").value,
            kmAtual: this.kmAtual.get(),
            tipoCombustivel: document.getElementById("tipoCombustivel").value,
            observacoes: document.getElementById("observacoes").value,
            identificacao: document.getElementById("identificacao").value,
            servicos: document.getElementById("servicos").value,
            valores: document.getElementById("valores").value,
            entrada: this.entrada.get(),
            entrega: this.entreda.get(),
            status: document.getElementById("status").value,
            responsavel: document.getElementById("responsavel").value,
            pagamento: document.getElementById("pagamento").value,
            historico: document.getElementById("historico").value,
            formaPagamento: document.getElementById("formaPagamento").value,
            prazoPagamento: document.getElementById("prazoPagamento").value,
            limiteCredito: this.limiteCredito.get(),
            condicaoEntrega: document.getElementById("condicaoEntrega").value,
            dataCadastro: this.dataCadastro.get(),
            observacoes: document.getElementById("observacoes").value,
            nomeProduto: document.getElementById("nomeProduto").value,
            marca: document.getElementById("marca").value,
            precoUnitario: this.precoUnitario.get(),
            codigoProduto: document.getElementById("codigoProduto").value,
        };

        //Buscar a "tabela" no localStorage (ou criar vazia)
        let tabela = JSON.parse(localStorage.getItem("clientes")) || [];

        //Colocar o novo registro
        tabela.push(registro);

        //Salvar novamente no localStorage
        localStorage.setItem("clientes", JSON.stringify(tabela));
    }    
}

avancar.forEach((btn) => {
    debugger
    btn.addEventListener("click", () => {
        switch(etapaAtual) {
            case 0: 
                ordemServicosCadastro.validarPrimeiraEtapa();
                break;
            case 1: 
                ordemServicosCadastro.validarSegundaEtapa();
                break;
            case 2:
                ordemServicosCadastro.validarTerceiraEtapa();
                break;
            case 3:
                ordemServicosCadastro.validarQuartaEtapa();
                break;
            case 4: 
                ordemServicosCadastro.validarQuintaEtapa();
                break;
            case 5:
                ordemServicosCadastro.validarSextaEtapa();
                break;
            default:
                ordemServicosCadastro.proximaEtapa();
        }
    });
});

//voltar
voltar.forEach(btn => {
    btn.addEventListener("click", () => {
        ordemServicosCadastro.etapaAnterior();
    });
});

const ordemServicosCadastro = new OrdemServicosCadastro();
window.concluir = () => ordemServicosCadastro.concluir();