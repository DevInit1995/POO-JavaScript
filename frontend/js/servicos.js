const passagem = document.querySelectorAll(".form-step");
const avancar = document.querySelectorAll(".btnAvancar");
const voltar = document.querySelectorAll(".btnVoltar");
let etapaAtual = 0;

class PecaSelecionado {
    #valor;

    set(pecaSelecionado) {
        const numero = Number(pecaSelecionado);

        if(numero <= 0) {
            throw new Error("Selecione uma peça");
        }

        this.#valor = numero;
    }

    get() {
        return this.#valor;
    }
}

this.pecaSelecionado = new PecaSelecionado();

class ServicoSelecionado {
    #valor;

    set(servicoSelecionado) {
        const numero = Number(servicoSelecionado);

        if(numero <= 0) {
            throw new Error("Selecione um serviço");
        }

        this.#valor = numero;
    }

    get() {
        return this.#valor;
    }
}

this.servicoSelecionado = new ServicoSelecionado();

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

this.quantidade = new Quantidade();

class CodigoInterno {
    #valor;

    set(codigoInterno) {
        const limpo = codigoInterno.trim().toUpperCase();

        if(!/^[A-Z]{3}\d{4}$/.test(limpo)) {
            throw new Error("Código interno inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }
}

this.codigoInterno = new CodigoInterno();

class Servicos {
    constructor() {
        this.quantidade = new Quantidade();
        this.codigoInterno = new CodigoInterno();
        this.servicoSelecionado = new ServicoSelecionado();
        this.pecaSelecionado = new PecaSelecionado();
    }

    validar = (valor) => valor.trim().length > 0;

    validarPrimeiraEtapa = () => {
        const campos = [
            {id: "calculoServico", mensagem: "Selecione o serviço"},
            {id: "calcularPeca", mensagem: "Selecione a peça"},
            {id: "quantidade", mensagem: "Preencha o campo quantidade"},
            {id: "totalServico", tipo: "value", mensagem: "Preencha o campo total serviço"},
            {id: "totalPecas", tipo: "value", mensagem: "Preencha o campo total peças"},
            {id: "totalGeral", tipo: "value", mensagem: "Preencha o campo total geral"}            
        ];

        /*for(let campo of campos) {
            const elemento = document.getElementById(campo.id).value;
            const valor = elemento.value ?? elemento.innerText ?? "";

            if(!this.validar(valor)) {
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        try {
            const quantidadeDigitado = document.getElementById("quantidade").value;
            this.quantidade.set(quantidadeDigitado);

            const servicoSelect = document.getElementById("calculoServico");
            this.servicoSelecionado.set(servicoSelect.value);

            const pecaSelect = document.getElementById("calcularPeca");
            this.pecaSelecionado.set(pecaSelect.value);
            
            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    validarSegundaEtapa = () => {
        const campos = [
            {id: "tempoEstimado", mensagem: "Preencha o campo tempo estimado"},
            {id: "precoTotal", mensagem: "Preencha o campo preço da mão de obra"},
            {id: "categoria", mensagem: "Preencha o campo categoria"}
        ]

        /*for(let campo of campos) {
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)) {
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        this.proximaEtapa();
    }

    validarTerceiraEtapa = () => {
        const campos = [
            {id: "nomePeca", mensagem: "Preencha o campo nome peça"},
            {id: "marca", mensagem: "Preencha o campo marca"},
            {id: "codigoInterno", mensagem: "Preencha o campo código interno"},
            {id: "quantidadeEstoque", mensagem: "Preencha o campo quantidade estoque"},
            {id: "precoUnitario", mensagem: "Preencha o campo preço unitário"},
            {id: "fornecedor", mensagem: "Preencha o campo fornecedor"}
        ]

        /*for(let campo of campos) {
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)){
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        try {
            const codigoInternoDigitado = document.getElementById("codigoInterno").value;
            this.condigoInterno.set(codigoInternoDigitado);

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

    calcularTotal = () => {
        //debugger
        const idNumeroOs = parseFloat(document.getElementById("idNumeroOs").value);
        const calcularPeca = parseFloat(document.getElementById("calcularPeca").value);
        const quantidade = parseFloat(document.getElementById("quantidade").value);
        const preco = parseFloat(document.getElementById("precoTotal").value);
        
        const totalServico = calcularPeca;
        const totalPecas = calcularPeca * quantidade;
        const totalGeral = totalServico + totalPecas;
        
        document.getElementById("totalServico").innerText = totalServico.toFixed(2);
        document.getElementById("totalPecas").innerText = totalPecas.toFixed(2);
        document.getElementById("totalGeral").innerText = totalGeral.toFixed(2);
        //document.getElementById("precoTotal").innerText = totalGeral;
    }

    concluir = () => {
        const registro = {
            idNumeroOs: document.getElementById("idNumeroOs").value,
            calculoServico: document.getElementById("calculoServico").value,
            calcularPeca: document.getElementById("calcularPeca").value,
            quantidade: this.quantidade.get(),
            totalServico: document.getElementById("totalServico").value,
            totalPecas: document.getElementById("totalPecas").value,
            totalGeral: document.getElementById("totalGeral").value,
            tempoEstimado: document.getElementById("tempoEstimado").value,
            precoTotal: document.getElementById("precoTotal").value,
            categoria: document.getElementById("categoria").value,
            ids: document.getElementById("ids").value,
            nomePeca: document.getElementById("nomePeca").value,
            marca: document.getElementById("marca").value,
            servicoSelecionado: this.servicoSelecionado.get(),
            pecaSelecionado: this.pecaSelecionado.get(),
            quantidadeEstoque: document.getElementById("quantidadeEstoque").value,
            precoUnitario: document.getElementById("precoUnitario").value,
            fornecedor: document.getElementById("fornecedor").value
        };

        //Buscar a "tabela" no localStorage (ou criar vazia)
        let tabela = JSON.parse(localStorage.getItem("servicos")) || [];

        //Colocar o novo registro
        tabela.push(registro);

        //Salvar novamente no localStorage
        localStorage.setItem("servicos", JSON.stringify(tabela));
    }
}
const servicos = new Servicos();
window.calcularTotal = () => servicos.calcularTotal();

//localStorage
window.concluir = () => servicos.concluir();

avancar.forEach((btn) => {
    btn.addEventListener("click", () => {
        switch(etapaAtual) {
            case 0: 
                servicos.validarPrimeiraEtapa();
                break;
            case 1:
                servicos.validarSegundaEtapa();
                break;
            case 2: 
                servicos.validarTerceiraEtapa();
                break;
            default:
                servicos.proximaEtapa();
        }
    });
});

//Voltar
voltar.forEach(btn => {
    btn.addEventListener("click", () => {
        servicos.etapaAnterior();
    });
});