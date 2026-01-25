const passagem = document.querySelectorAll(".form-step");
const avancar = document.querySelectorAll(".btnAvancar");
const voltar = document.querySelectorAll(".btnVoltar");
const codigoInternoInput = document.getElementById("codigoInterno");
const precoCustoInput = document.getElementById("precoCusto");
const precoVendaInput = document.getElementById("precoVenda");
const codigoFabricanteInput = document.getElementById("codigoFabricante");
const dataCadastroInput = document.getElementById("dataCadastro");
const ultimaAtualizacaoInput = document.getElementById("ultimaAtualizacao");
const codigoBarrasInput = document.getElementById("codigoBarras");


const btnConcluir = document.querySelectorAll(".btnConcluir");

let etapaAtual = 0;

class CodigoInterno {
    #valor;

    set(codigoInterno) {
        const limpo = CodigoInterno.#limpar(codigoInterno);
        
        if(!CodigoInterno.#validar(limpo)) {
            throw new Error("Código interno inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }

    formatado() {
        return this.#valor.replace(/([A-Z0-9]{3})([A-Z0-9]{3})([A-Z0-9]{3})([A-Z0-9]{1})/,
            "$1-$2-$3-$4");
    }

    static #limpar(codigoInterno) {
        //codigoInterno.trim().toUpperCase();
        return codigoInterno.trim()
            .toUpperCase()
            .replace(/[^A-Z0-9]/g, ""); //mantém letras e números
    }

    static #validar(codigoInterno) {
        if(codigoInterno.length !== 10) return false;

        return /^[A-Z0-9]{10}$/.test(codigoInterno);
    }
}

const codigoInterno = new CodigoInterno();

function mascaraCodigoInterno(valor) {
    valor = valor
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "")
        .slice(0, 11)
        .replace(/^(.{3})(.{3})(.{3})(.{1})$/, "$1-$2-$3-$4");

    if(valor.length > 3) {
        return valor.replace(/([A-Z]{3})(\d+)/, "$1-$2");
    }

    return valor;
}

codigoInternoInput.addEventListener("input", e => {
    e.target.value = mascaraCodigoInterno(e.target.value);
});

class Quantidade {
    #valor;

    set(quantidade) {
        const n = Number(quantidade);

        if(!Number.isInteger(n) || n <= 0) {
            throw new Error("Quantidade inválida");
        }

        this.#valor = n;
    }

    get() {
        return this.#valor;
    }
}

const quantidadeEstoque = new Quantidade();

class PrecoCusto {
    #valor;

    set(precoCusto) {
        const limpo = PrecoCusto.#limpar(precoCusto);

        if(!PrecoCusto.#validar(limpo)) {
            throw new Error("Preço custo inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }

    static #limpar(valor) {
        if (typeof valor === "string") {
            valor = valor
                .replace(/\s/g, "")
                .replace("R$", "")
                .replace(/\./g, "")
                .replace(",", ".");
        }

        return Number(valor);
    }

    static #validar(precoCusto) {
        if (isNaN(precoCusto)) return false;
        if (precoCusto <= 0) return false;
        if (precoCusto > 1_000_000) return false;

        return true;
    };

    #formatar(precoCusto) {
        return precoCusto.toLocaleString("pt-BR",
            {style: "currency",
                currency: "BRL"});
    }
}

const precoCusto = new PrecoCusto();

function mascaraPrecoCusto(valor) {
    valor = Number(valor.replace(/\D/g, "")) / 100;

    const formatador = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 2,
    });

    return valor = formatador.format(valor);
}

precoCustoInput.addEventListener("input", e => {
    e.target.value = mascaraPrecoCusto(e.target.value);
});

class PrecoVenda {
    #valor;

    set(precoVenda) {
        const limpo = PrecoVenda.#limpar(precoVenda);

        if(!PrecoVenda.#validar(limpo)) {
            throw new Error("Preço de venda inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }

    static #limpar(valor) {
        if (typeof valor === "string") {
            valor = valor
                .replace(/\s/g, "")
                .replace("R$", "")
                .replace(/\./g, "")
                .replace(",", ".");
        }
        return Number(valor);
    }

    static #validar(valor) {
        if(isNaN(valor)) return false;
        if(valor <= 0) return false;
        if(valor > 1_000_000) return false;

        return true;
    };

    #formatar() {
        return precoVenda.toLocaleString("pt-BR", 
            {style: "currency",
                currency: "BRL"});
    }
}

const precoVenda = new PrecoVenda();

function mascaraPrecoVenda(valor) {
    valor = Number(valor.replace(/\D/g, "")) / 100;

    const formatador = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 2,
    });

    return valor = formatador.format(valor);
}

precoVendaInput.addEventListener("input", e => {
    e.target.value = mascaraPrecoCusto(e.target.value);
});

class CodigoFabricante {
    #valor;

    set(codigoFabricante) {
        const limpo = codigoFabricante.trim().toUpperCase();

        if(!/^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{1}$/.test(limpo)) {
            throw new Error("Código interno inválido (formato: XXX-XXX-XXX-XX)");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }
}

const codigoFabricante = new CodigoFabricante();

function mascaraCodigoFabricante(valor) {
    valor = valor
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "")
        .slice(0, 11)
        .replace(/^(.{3})(.{3})(.{3})(.{1})$/, "$1-$2-$3-$4");

    if(valor.length > 3) {
        return valor.replace(/([A-Z]{3})(\d+)/, "$1-$2");
    }

    return valor;
}

codigoFabricanteInput.addEventListener("input", e => {
    e.target.value = mascaraCodigoFabricante(e.target.value);
});

class DataCadastro {
    #valor;

    set(dataCadastro) {
        if(typeof dataCadastro !== "string"){
            throw new Error("Data de cadastro deve ser texto");
        }

        if(dataCadastro == "") {
            throw new Error("Data de cadastro inválido");
        }

        return this.#valor = dataCadastro;
    }

    get() {
        return this.#valor;
    }
}

const dataCadastro = new DataCadastro();

function mascaraDataCadastro(data) {
    data = new Date();

    return data = new Intl.toLocaleDateString("pt-BR");
}

dataCadastroInput.addEventListener("dataform", e => {
    e.target.value = mascaraDataCadastro(e.target.value);
});

class UltimaAtualizacao {
    #valor;

    set(ultimaAtualizacao) {
        if(typeof ultimaAtualizacao !== "string") {
            throw new Error("Data de cadastro deve ser texto");
        }

        if(ultimaAtualizacao == "") {
            throw new Error("Data de cadastro inválido");
        }

        return this.#valor = ultimaAtualizacao;
    }

    get() {
        return this.#valor;
    }
}

const ultimaAtualizacao = new UltimaAtualizacao();

function mascaraUltimaAtualizacao(data) {
    data = new Date();

    return data = new Intl.toLocaleDateString("pt-BR");
}

ultimaAtualizacaoInput.addEventListener("dataform", e => {
    e.target.value = mascaraUltimaAtualizacao(e.target.value);
});

class CodigoBarras {
    #valor;

    set(codigoBarras) {
        const limpo = codigoBarras.replace(/\D/g, "");

        if(limpo.length !== 13) {
            throw new Error("Código interno inválido (formato: 0000000000000)");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }
}

const codigoBarras = new CodigoBarras();

class CadastroPecas {
    constructor() {
        this.codigoInterno = new CodigoInterno();
        this.quantidadeEstoque = new Quantidade();
        this.precoCusto = new PrecoCusto();
        this.precoVenda = new PrecoVenda();
        this.codigoFabricante = new CodigoFabricante();
        this.dataCadastro = new DataCadastro();
        this.ultimaAtualizacao = new UltimaAtualizacao();
        this.codigoBarras = new CodigoBarras();
    }

    validar = (valor) => valor.trim().length > 0;

    validarPrimeiraEtapa() {
        const campos = [
            {id: "nomeProduto", mensagem: "Preencha o campo nome do produto"},
            {id: "codigoInterno", mensagem: "Preencha o campo código interno"},
            {id: "categoria", mensagem: "Preencha o campo categoria"},
            {id: "marca", mensagem: "Preencha o campo marca"},
            {id: "quantidadeEstoque", mensagem: "Preencha o campo quantidade de estoque"},
            {id: "precoCusto", mensagem: "Preencha o campo preço de custo"},
            {id: "precoVenda", mensagem: "Preencha o campo preço de venda"},
            {id: "fornecedor", mensagem: "Preencha o campo fornecedor"},
        ]

        /*for(let campo of campos) {
            const valor = document.getElementById(campo.id).value;

            if(!this.validar(valor)) {
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        try {
            const codigoInternoDigitado = document.getElementById("codigoInterno").value;
            this.codigoInterno.set(codigoInternoDigitado);

            const quantidadeEstoqueDigitado = document.getElementById("quantidadeEstoque").value;
            this.quantidadeEstoque.set(quantidadeEstoqueDigitado);

            const precoCustoDigitado = document.getElementById("precoCusto").value;
            this.precoCusto.set(precoCustoDigitado);

            const precoVendaDigitado = document.getElementById("precoVenda").value;
            this.precoVenda.set(precoVendaDigitado);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    validarSegundaEtapa() {
        const campos = [
            {id: "unidadeMedida", mensagem: "Preencha o campo unidade de medida"},
            {id: "estoqueMinimo", mensagem: "Preencha o campo estoque minimo"},
            {id: "localizacaoEstoque", mensagem: "Preencha o campo localização de estoque"},
            {id: "codigoFabricante", mensagem: "Preencha o campo código fabricante"},
            {id: "aplicacao", mensagem: "Preencha o campo aplicação"},
        ]

        /*for(let campo of campos) {
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)) {
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        try {
            const codigoFabricanteDigitado = document.getElementById("codigoFabricante").value;
            this.codigoFabricante.set(codigoFabricanteDigitado);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    validarTerceiraEtapa() {
        const campos = [
            {id: "dataCadastro", mensagem: "Preencha o campo data cadastro"},
            {id: "ultimaAtualizacao", mensagem: "Preencha o campo última atualização"},
            {id: "codigoBarras", mensagem: "Preencha o campo código barras"},
            {id: "garantia", mensagem: "Preencha o campo garantia"},
            {id: "pesoVolume", mensagem: "Preencha o campo peso volume"},
        ]

        /*for(let campo of campos) {
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)) {
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        try {
            const dataCadastroDigitado = document.getElementById("dataCadastro").value;
            this.dataCadastro.set(dataCadastroDigitado);
           
            const ultimaAtualizacaoDigitado = document.getElementById("ultimaAtualizacao").value;
            this.ultimaAtualizacao.set(ultimaAtualizacaoDigitado);
            
            const codigoBarrasDigitado = document.getElementById("codigoBarras").value;
            this.codigoBarras.set(codigoBarrasDigitado);

            /*const pesoVolumeDigitado = document.getElementById("pesoVolume").value;
            this.pesoVolume.set(pesoVolumeDigitado);*/
            
            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
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

    exibirAlerta(icone, titulo, texto) {
        Swal.fire ({
            icon: icone,
            title: titulo,
            text: texto,
        });
    }

    //LocalStorage
    concluir() {
        const registro = {
            nomeProduto: document.getElementById("nomeProduto").value,
            codigoInterno: document.getElementById("codigoInterno").value,
            categoria: document.getElementById("categoria").value,
            marca: document.getElementById("marca").value,
            quantidadeEstoque: document.getElementById("quantidadeEstoque").value,
            precoCusto: document.getElementById("precoCusto").value,
            precoVenda: document.getElementById("precoVenda").value,
            fornecedor: document.getElementById("fornecedor").value,
            unidadeMedida: document.getElementById("unidadeMedida").value,
            estoqueMinimo: document.getElementById("estoqueMinimo").value,
            localizacaoEstoque: document.getElementById("localizacaoEstoque").value,
            codigoFabricante: document.getElementById("codigoFabricante").value,
            aplicacao: document.getElementById("aplicacao").value,
            dataCadastro: document.getElementById("dataCadastro").value,
            ultimaAtualizacao: document.getElementById("ultimaAtualizacao").value,
            codigoBarras: document.getElementById("codigoBarras").value,
            garantia: document.getElementById("garantia").value,
            pesoVolume: document.getElementById("pesoVolume").value,
        };

        let tabela = JSON.parse(localStorage.getItem("cadastroPecas")) || [];

        tabela.push(registro);

        localStorage.setItem("cadastroPecas", JSON.stringify(tabela));
    }
}

const cadastroPecas = new CadastroPecas();

avancar.forEach((btn) => {
    btn.addEventListener("click", () => {
        switch(etapaAtual) {
            case 0: 
                cadastroPecas.validarPrimeiraEtapa(); 
                break;
            case 1: 
                cadastroPecas.validarSegundaEtapa();
                break;
            case 2:
                cadastroPecas.validarTerceiraEtapa();
                break;
            default:
                cadastroPecas.proximaEtapa();
        }
    });
});

//voltar
voltar.forEach(btn => {
    btn.addEventListener("click", () => {
        cadastroPecas.etapaAnterior();
    });
});

document.querySelectorAll(".btnConcluir").forEach(btn => {
    btn.addEventListener("click", () => {
        cadastroPecas.concluir();
    });
});