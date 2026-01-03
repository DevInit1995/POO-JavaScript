const passagem = document.querySelectorAll(".form-step");
const avancar = document.querySelectorAll(".btnAvancar");
const voltar = document.querySelectorAll(".btnVoltar");
let etapaAtual = 0;

//ENCAPSULAMENTO POR CLASSES E MÉTODOS PRIVADOS
class CPF {
    #valor; // PRIVADO

    set(cpf) {
        const limpo = CPF.#limpar(cpf);

        if(!CPF.#validar(limpo)) {
            throw new Error("CPF inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }
    
    static #limpar(cpf) {
        return cpf.replace(/\D/g, "");
    }

    static #validar(cpf) {
        if (cpf.length !== 11) return false;
        if (/^(\d)\1{10}$/.test(cpf)) return false;
        return true; // validação simplificada
    }
}

this.cpf = new CPF;

class Email {
    #valor;
    
    set(email) {
        const limpo = Email.#limpar(email);

        if(!Email.#validar(limpo)) {
            throw new Error("E-mail inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }

    static #limpar(email) {
        return email.trim().toLowerCase();
    }

    static #validar(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}

this.email = new Email();

class Telefone {
    #valor;

    set(telefone) {
        if (typeof telefone !== "string") {
            throw new Error("Telefone deve ser uma string");
        }

        const limpo = this.#limpar(telefone);

        if (!this.#validar(limpo)) {
            throw new Error("Telefone inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }

    #limpar(telefone) {
        return telefone.replace(/\D/g, "");
    }

    #validar(telefone) {
        if (telefone.length !== 11) return false;
        if(/^(\d)\1+$/.test(telefone)) return false;
        return true;
    }

    /*#formatar() {
        if (this.#valor.length === 11) {
            return this.#valor.replace(
                /(\d{2})(\d{5})(\d{4})/,
                "($1) $2-$3"
            );
        }

        return this.#valor.replace(
            /(\d{2})(\d{4})(\d{4})/,
            "($1) $2-$3"
        );
    }*/
}

this.telefone = new Telefone();

class Cep {
    #valor;

    set(cep) {
        const limpo = this.#limpar(cep);
        
        if(!this.#validar(limpo)) {
            throw new Error("CEP inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }

    #limpar(cep) {
        return String(cep).replace(/\D/g, "");
    }

    #validar(cep) {
        if(cep.length !== 8) return false;
        //evita números todos iguais (ex: 11111111)
        if(/^(\d)\1+$/.test(cep)) return false;

        return true;
    } 
}

this.cep = new Cep();

class Placa {
    #valor;

    set(placa) {
        const limpo = this.#limpar(placa);

        if(!this.#validar(limpo)) {
            throw new Error("Placa inválida")
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }

    #limpar(placa) {
        return String(placa).toUpperCase()
        .replace(/[^A-Z0-9]/g, "");
    }

    #validar(placa) {
        if(placa.length !== 7) return false;

        // LLLNLNN (padrão Mercosul)
        const mercosul = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;
        const antigo = /^[A-Z]{3}[0-9]{4}$/;
        
        return mercosul.test(placa) || antigo.test(placa);
    }
}

this.placa = new Placa();

class Ano {
    #valor;
    
    set(ano) {
        if(typeof ano !== "string") {
            throw new Error("Ano do carro deve ser texto");
        }

        if(ano == "") {
            throw new Error("Ano do carro inválido")
        }

        return this.#valor = ano;
    }

    get() {
        //se precisar do objeto Date internamente
        return this.#valor;
    }
}

this.ano = new Ano();

class DataEntrada {
    #valor;
    
    set(dataEntrada) {
        if(typeof dataEntrada !== "string") {
            throw new Error("Data de entrada deve ser texto");
        }

        if(dataEntrada == "") {
            throw new Error("Data de entrada inválida")
        }

        return this.#valor = dataEntrada;
    }

    get() {
        //se precisar do objeto Date internamente
        return this.#valor;
    }
}

this.entrada = new DataEntrada();

class DataSaida {
    #valor;
    
    set(dataSaida) {
        if(typeof dataSaida !== "string") {
            throw new Error("Data de saída deve ser texto");
        }

        if(dataSaida == "") {
            throw new Error("Data de saída inválida")
        }

        return this.#valor = dataSaida;
    }

    get() {
        //se precisar do objeto Date internamente
        return this.#valor;
    }
}

this.entrega = new DataSaida();

class LimiteCredito {
    #valor;

    set(limiteCredito) {
        const valor = Number(limiteCredito);
        
        if(typeof valor !== "number" || isNaN(valor)) {
            throw new Error("Limite de crédito inválido");
        }

        if(valor <= 0 ) {
            throw new Error("Limite não pode ser negativo");
        }

        if(valor > 5000) {
            throw new Error("Limite não pode ser maior que 5000")
        }

        this.#valor = valor;
    }

    get() {
        return this.#valor;
    }
}

this.limiteCredito = new LimiteCredito();

class DataCadastro {
    #valor;
    
    set(dataCadastro) {
        if(typeof dataCadastro !== "string") {
            throw new Error("Ano do carro deve ser texto");
        }

        if(dataCadastro == "") {
            throw new Error("Ano do carro inválido")
        }

        return this.#valor = dataCadastro;
    }

    get() {
        //se precisar do objeto Date internamente
        return this.#valor;
    }
}

this.dataCadastro = new DataCadastro();

class PrecoUnitario {
    #valor;

    set(precoUnitario) {
        const limpo = this.#limpar(precoUnitario);

        if(!this.#validar(limpo)) {
            throw new Error("Preço inválido");
        }
        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }

    #limpar(precoUnitario) {
        if (typeof precoUnitario === "string") {
            precoUnitario = precoUnitario.replace(/\./g, "").replace(",", ".");
        }
        
        return Number(precoUnitario);
    };

    #validar(precoUnitario) {
        if (isNaN(precoUnitario)) return false;
        if (precoUnitario <= 0) return false;
        if (precoUnitario > 1_000_000) return false; // limite realista
        
        return true;
    };
    
    #formatar(precoUnitario){
        return precoUnitario.toLocaleString("pt-BR", 
            {style: "currency", 
                currency: "BRL;"});
    }
}

this.precoUnitario = new PrecoUnitario();

class OrdemServicosCadastro {
    constructor() {
        //ENCAPSULAMENTO POR CLASSES E MÉTODOS PRIVADOS
        this.cpf = new CPF();
        this.email = new Email();
        this.telefone = new Telefone();
        this.cep = new Cep();      
        this.placa = new Placa();
        this.ano = new Ano();
        //this.kmAtual = new KmAtual();
        this.entrada = new DataEntrada();
        this.entrega = new DataSaida();
        this.limiteCredito = new LimiteCredito();
        this.dataCadastro = new DataCadastro();
        this.precoUnitario = new PrecoUnitario();
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

            /*let kmAtualDigitado = document.getElementById("kmAtual").value;
            this.kmAtual.set(kmAtualDigitado);*/

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    validarTerceiraEtapa = () => {
        debugger
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
           // kmAtual: this.kmAtual.get(),
            tipoCombustivel: document.getElementById("tipoCombustivel").value,
            observacoes: document.getElementById("observacoes").value,
            identificacao: document.getElementById("identificacao").value,
            servicos: document.getElementById("servicos").value,
            valores: document.getElementById("valores").value,
            entrada: this.entrada.get(),
            entrega: this.entrega.get(),
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
        let tabela = JSON.parse(localStorage.getItem("ordem-servicos-cadastro")) || [];

        //Colocar o novo registro
        tabela.push(registro);

        //Salvar novamente no localStorage
        localStorage.setItem("ordem-servicos-cadastro", JSON.stringify(tabela));
    }    
}

avancar.forEach((btn) => {
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