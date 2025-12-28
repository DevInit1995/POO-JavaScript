const passagem = document.querySelectorAll(".form-step");
const avancar = document.querySelectorAll(".btnAvancar");
const voltar = document.querySelectorAll(".btnVoltar");
let etapaAtual = 0;

class CNPJ {
    #valor;

    set(cnpj) {
        const limpo = this.#limpar(cnpj);

        if(!this.#validar(limpo)) {
            throw new Error("CNPJ inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }

    #limpar(cnpj) {
        return cnpj.replace(/\D/g, '');
    }

    #validar(cnpj) {
        if(cnpj.length !== 14) return false;
        return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
    
}

this.cnpj = new CNPJ();

class Fornecedores {
    constructor() {
        this.cnpj = new CNPJ();
    }

    validar = (valor) => valor.trim().length > 0;

    validarPrimeiraEtapa = () => {
        const campos = [
            {id: "razaoSocial", mensagem: "Preencha o campo razão social"},
            {id: "nomeFantasia", mensagem: "Preencha o campo nome fantasia"},
            {id: "cnpj", mensagem: "Preencha o campo cnpj"},
            {id: "inscricaoEstadual", mensagem: "Preencha o campo inscrição estadual"},
            {id: "segmento", mensagem: "Preencha o campo segmento"},            
        ]

        /*for(let campo of campos){
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)){
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        try {
            const cnpjDigitado = document.getElementById("cnpj").value;
            this.cnpj.set(cnpjDigitado);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    validarSegundaEtapa = () => {
        //validação dos campos
        const campos = [
            {id: "estado", mensagem: "Preencha o campo estado "},
            {id: "cidade", mensagem: "Preencha o campo cidade"},
            {id: "bairro", mensagem: "Preencha o campo bairro"},
            {id: "rua", mensagem: "Preencha o campo rua"},
            {id: "numero", mensagem: "Preencha o campo numero"},
            {id: "cep", mensagem: "Preencha o campo cep"},
            {id: "complemento", mensagem: "Preencha o campo complemento"},
        ]

        /*for(let campo of campos){
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)){
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        this.proximaEtapa();
    }

    validarTerceiraEtapa = () => {
        //validação de campos
        const campos = [
            {id: "telefone", mensagem: "Preencha o campo telefone"},
            {id: "celular", mensagem: "Preencha o campo celular"},
            {id: "email", mensagem: "Preencha o campo email"},
            {id: "site", mensagem: "Preencha o campo site"},
        ]

        /*for(let campo of campos){
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)){
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        this.proximaEtapa();
    }

    validarQuartaEtapa = () => {
        //validação de campos
        const campos = [
            {id: "formaPagamento", mensagem: "Preencha o campo forma de pagamento"},
            {id: "prazoPagamento", mensagem: "Preencha o campo prazo de pagamento"},
            {id: "limiteCredito", mensagem: "Preencha o campo limite de crédito"},
            {id: "condicaoEntrega", mensagem: "Preencha o campo condição de entrega"},
        ]

        /*for(let campo of campos){
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)){
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        this.proximaEtapa();
    }

    validarQuintaEtapa = () => {
        //validação de campos
        const campos = [
            {id: "dataCadastro", mensagem: "Preencha o campo data de cadastro"},
            {id: "prazoPagamento", mensagem: "Preencha o campo prazo de pagamento"},
        ]

        /*for(let campo of campos){
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)){
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/
       
        this.proximaEtapa();
    }

    validarSextaEtapa = () => {
        //validação de campos
        const campos = [
            {id: "nomeProduto", mensagem: "Preencha o campo nome do produto"},
            {id: "marca", mensagem: "Preencha o campo marca"},
            {id: "precoUnitario", mensagem: "Preencha o campo preço unitário"},
            {id: "codigoProduto", mensagem: "Preencha o campo código do produto"},
        ]

        /*for(let campo of campos){
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)){
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        this.proximaEtapa();
    }

    //LocalStorage
    concluir = () => {
        const registro = {
            razaoSocial: document.getElementById("razaoSocial").value,
            nomeFantasia: document.getElementById("nomeFantasia").value,
            cnpj: this.cnpj.get(),
            inscricaoEstadual: document.getElementById("inscricaoEstadual").value,
            segmento: document.getElementById("segmento").value,
            estado: document.getElementById("estado").value,
            cidade: document.getElementById("cidade").value,
            bairro: document.getElementById("bairro").value,
            rua: document.getElementById("rua").value,
            numero: document.getElementById("numero").value,
            cep: document.getElementById("cep").value,
            complemento: document.getElementById("complemento").value,
            estado: document.getElementById("estado").value,
            cidade: document.getElementById("cidade").value,
            bairro: document.getElementById("bairro").value,
            rua: document.getElementById("rua").value,
            numero: document.getElementById("numero").value,
            cep: document.getElementById("cep").value,
            complemento: document.getElementById("complemento").value,
            telefone: document.getElementById("telefone").value,
            celular: document.getElementById("celular").value,
            email: document.getElementById("email").value,
            site: document.getElementById("site").value,
            formaPagamento: document.getElementById("formaPagamento").value,
            prazoPagamento: document.getElementById("prazoPagamento").value,
            limiteCredito: document.getElementById("limiteCredito").value,
            condicaoEntrega: document.getElementById("condicaoEntrega").value,
            dataCadastro: document.getElementById("dataCadastro").value,
            inativo: document.getElementById("inativo").value,
            observacoes: document.getElementById("observacoes").value,
            nomeProduto: document.getElementById("nomeProduto").value,
            marca: document.getElementById("marca").value,
            precoUnitario: document.getElementById("precoUnitario").value,
            codigoProduto: document.getElementById("codigoProduto").value
        }

        //Buscar a "tabela" no localStorage (ou criar vazia)
        let tabela = JSON.parse(localStorage.getItem("fornecedores")) || [];

        //Colocar o novo registro
        tabela.push(registro);

        //Salvar novamente no localStorage
        localStorage.setItem("fornecedores", JSON.stringify(tabela));
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
    
    exibirAlerta(icone, titulo, texto){
        Swal.fire ({
            icon: icone,
            title: titulo, 
            text: texto,
        });
    }
}

const fornecedores = new Fornecedores();
window.concluir = () => fornecedores.concluir();

avancar.forEach((btn) => {
    btn.addEventListener("click", () => {
        switch(etapaAtual){
            case 0:
                fornecedores.validarPrimeiraEtapa();
                break;
            case 1:
                fornecedores.validarSegundaEtapa();
                break;
            case 2:
                fornecedores.validarTerceiraEtapa();
                break;
            case 3:
                fornecedores.validarQuartaEtapa();
                break;
            case 4:
                fornecedores.validarQuintaEtapa();
                break;
            case 5:
                fornecedores.validarSextaEtapa();
                break;
            default:
                fornecedores.proximaEtapa();
        }
    });
});

//voltar
voltar.forEach(btn => {
    btn.addEventListener("click", () => {
        fornecedores.etapaAnterior();
    })
})