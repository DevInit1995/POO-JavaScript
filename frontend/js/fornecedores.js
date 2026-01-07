const passagem = document.querySelectorAll(".form-step");
const avancar = document.querySelectorAll(".btnAvancar");
const voltar = document.querySelectorAll(".btnVoltar");
const btnConcluir = document.querySelectorAll(".btnConcluir");
let etapaAtual = 0;

class CNPJ {
    #valor;

    set(cnpj) {
        const limpo = CNPJ.#limpar(cnpj);

        if(!CNPJ.#validar(limpo)) {
            throw new Error("CNPJ inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }

    static #limpar(cnpj) {
        return cnpj.replace(/\D/g, '');
    }

    static #validar(cnpj) {
        if(cnpj.length !== 14) return false;
        return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
    
}

const cnpj = new CNPJ();

class InscricaoEstadual {
    #valor; 

    set(inscricaoEstadual) {
        const limpo = InscricaoEstadual.#limpar(inscricaoEstadual);

        if(!InscricaoEstadual.#validar(limpo)) {
            throw new Error("Inscrição Estadual inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }
    
    static #limpar(inscricaoEstadual) {
        return inscricaoEstadual.replace(/\D/g, "");
    }

    static #validar(inscricaoEstadual) {
        if (inscricaoEstadual.length !== 13) return false;
       
        return true; // validação simplificada
    }
}

const inscricaoEstadual = new InscricaoEstadual();

class Cep {
    #valor;

    set(cep) {
        const limpo = Cep.#limpar(cep);
        
        if(!Cep.#validar(limpo)) {
            throw new Error("CEP inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }

    static #limpar(cep) {
        return String(cep).replace(/\D/g, "");
    }

    static #validar(cep) {
        if(cep.length !== 8) return false;
        //evita números todos iguais (ex: 11111111)
        if(/^(\d)\1+$/.test(cep)) return false;

        return true;
    } 
}

const cep = new Cep();

class Telefone {
    #valor;

    set(telefone) {
        if (typeof telefone !== "string") {
            throw new Error("Telefone deve ser uma string");
        }

        const limpo = Telefone.#limpar(telefone);

        if (!Telefone.#validar(limpo)) {
            throw new Error("Telefone inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return Telefone.#formatar(this.#valor);
    }

    static #limpar(telefone) {
        return telefone.replace(/\D/g, "");
    }

    static #validar(telefone) {
        if (telefone.length !== 11) return false;
        if(/^(\d)\1+$/.test(telefone)) return false;
        return true;
    }

    static #formatar(valor) {
        if (valor.length === 11) {
            return valor.replace(
                /(\d{2})(\d{5})(\d{4})/,
                "($1) $2-$3"
            );
        }

        return valor.replace(
            /(\d{2})(\d{4})(\d{4})/,
            "($1) $2-$3"
        );
    }
}

const telefone = new Telefone();

class Celular {   
    #valor;

    set(celular) {
        if(typeof celular !== "string") {
            throw new Error("Celular deve ser uma string");
        }

        const limpo = Celular.#limpar(celular);

        if(!Celular.#validar(limpo)) {
            throw new Error("Celular inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return Celular.#formatar(this.#valor);
    }

    static #limpar(celular) {
        return celular.replace(/\D/g, "");
    }

    static #validar(celular) {
        if(celular.length !== 11) return false;
        if(/^(\d)\1+$/.test(celular)) return false;
        return true;
    }

    static #formatar(valor) {
        if(valor.length === 11) {
            return valor.replace(
                /(\d{2}) (\d{5})(\d{4})/,
                "($1) $2-$3"
            );
        }

        return valor.replace(
            /(\d{2})(\d{4})(\d{4})/,
            "($1) $2-$3"
        );
    }
}

const celular = new Celular();

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

const email = new Email();

class Site {
    #valor;
    
    set(site) {
        if(typeof site !== "string") {
            throw new Error("Site deve ser texto");
        }

        const limpo = site.trim();

        const url = Site.#converterParaURL(limpo);

        if(!url){
            throw new Error("URL inválida")
        }

        this.#valor = url.toString();
    }

    get() {
        return this.#valor;
    }

    static #converterParaURL(valor) {
        try {
            if(!/^https?:\/\//i.test(valor)) {
                valor = "https://" + valor;
            }

            return new URL(valor);
        } catch {
            return null;
        }
    }
}

const site = new Site();

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

const limiteCredito = new LimiteCredito();

class CodigoProduto {
    #valor;

    set(codigo) {
        if (typeof codigo !== "string") {
            throw new Error("Código deve ser texto");
        }

        const limpo = codigo.trim().toUpperCase();

        if (!/^[A-Z]{3}-\d{4}$/.test(limpo)) {
            throw new Error("Código de produto inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }

}

const codigoProduto = new CodigoProduto();

class PrecoUnitario {
    #valor;

    set(precoUnitario) {
        const limpo = PrecoUnitario.#limpar(precoUnitario);

        if(!PrecoUnitario.#validar(limpo)) {
            throw new Error("Preço inválido");
        }
        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }

    static #limpar(precoUnitario) {
        if (typeof precoUnitario === "string") {
            precoUnitario = precoUnitario.replace(/\./g, "").replace(",", ".");
        }
        
        return Number(precoUnitario);
    };

    static #validar(precoUnitario) {
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

const precoUnitario = new PrecoUnitario();

class DataCadastro {
    #valor;
    
    set(dataCadastro) {
        if(typeof dataCadastro !== "string") {
            throw new Error("Data de cadastro do fornecedor deve ser texto");
        }

        if(dataCadastro == "") {
            throw new Error("Data de cadastro do fornecedor inválido")
        }

        return this.#valor = dataCadastro;
    }

    get() {
        //se precisar do objeto Date internamente
        return this.#valor;
    }
}

const dataCadastro = new DataCadastro();

class Fornecedores {
    constructor() {
        this.cnpj = new CNPJ();
        this.inscricaoEstadual = new InscricaoEstadual();
        this.cep = new Cep();
        this.telefone = new Telefone();
        this.celular = new Celular();
        this.email = new Email();
        this.site = new Site();
        this.dataCadastro = new DataCadastro();
        this.limiteCredito = new LimiteCredito();
        this.precoUnitario = new PrecoUnitario();
        this.codigoProduto = new CodigoProduto();
    }

    validar = (valor) => valor.trim().length > 0;

    validarPrimeiraEtapa() {
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

            const inscricaoEstadualDigitado = document.getElementById("inscricaoEstadual").value;
            this.inscricaoEstadual.set(inscricaoEstadualDigitado);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    validarSegundaEtapa() {
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

        try {
            const cepDigitado = document.getElementById("cep").value;
            this.cep.set(cepDigitado);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    validarTerceiraEtapa() {
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

        try {
            const telefoneDigitado = document.getElementById("telefone").value;
            this.telefone.set(telefoneDigitado);

            const celularDigitado = document.getElementById("celular").value;
            this.celular.set(celularDigitado);

            const emailDigitado = document.getElementById("email").value;
            this.email.set(emailDigitado);

            const siteDigitado = document.getElementById("site").value;
            this.site.set(siteDigitado);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    validarQuartaEtapa() {
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

        try {
            const limiteCreditoDigitado = document.getElementById("limiteCredito").value;
            this.limiteCredito.set(limiteCreditoDigitado);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Error", e.message);
        }
    }

    validarQuintaEtapa() {
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
       
        try {
            const dataCadastroDigitado = document.getElementById("dataCadastro").value;
            this.dataCadastro.set(dataCadastroDigitado);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Error", e.message);
        }
    }

    validarSextaEtapa() {
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

        try {
            const precoUnitarioDigitado = document.getElementById("precoUnitario").value;
            this.precoUnitario.set(precoUnitarioDigitado);

            const codigoProdutoDigitado = document.getElementById("codigoProduto").value;
            this.codigoProduto.set(codigoProdutoDigitado);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    //LocalStorage
    concluir() {
        const registro = {
            razaoSocial: document.getElementById("razaoSocial").value,
            nomeFantasia: document.getElementById("nomeFantasia").value,
            cnpj: this.cnpj.get(),
            inscricaoEstadual: this.inscricaoEstadual.get(),
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
            cep: this.cep.get(),
            complemento: document.getElementById("complemento").value,
            telefone: this.telefone.get(),
            celular: this.celular.get(),
            email: this.email.get(),
            site: this.site.get(),
            formaPagamento: document.getElementById("formaPagamento").value,
            prazoPagamento: document.getElementById("prazoPagamento").value,
            limiteCredito: this.limiteCredito.get(),
            condicaoEntrega: document.getElementById("condicaoEntrega").value,
            dataCadastro: this.dataCadastro.get(),
            inativo: document.getElementById("inativo").value,
            observacoes: document.getElementById("observacoes").value,
            nomeProduto: document.getElementById("nomeProduto").value,
            marca: document.getElementById("marca").value,
            precoUnitario: this.precoUnitario.get(),
            codigoProduto: this.codigoProduto.get()
        }

        //Buscar a "tabela" no localStorage (ou criar vazia)
        let tabela = JSON.parse(localStorage.getItem("fornecedores")) || [];

        //Colocar o novo registro
        tabela.push(registro);

        //Salvar novamente no localStorage
        localStorage.setItem("fornecedores", JSON.stringify(tabela));
    }

    proximaEtapa() {
        passagem[etapaAtual].classList.remove("active");
        etapaAtual++;
        passagem[etapaAtual].classList.add("active");
    }

    etapaAnterior() {
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
    });
});

document.querySelectorAll(".btnConcluir").forEach(btn => {
    btn.addEventListener("click", () => {
        fornecedores.concluir();
    });
});