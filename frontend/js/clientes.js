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

class RG {
    #valor;

    set(rg) {
        const limpo = this.#limpar(rg);

        if (limpo.length < 6 || limpo.length > 6) {
            throw new Error("RG inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }

    #limpar(rg) {
        return rg.replace(/\D/g, "");
    }

    #validar(rg) {
        if (rg.length !== 6) return false;
        if(/^(\d)\1+$/.test(rg)) return false;
        return true;
    }
}

this.rg = new RG;

class DataNascimento {

    #valor;

    set(dataNascimento) {
        const dataObj = this.#validar(dataNascimento);

        if(!this.#validar(dataObj)) {
            throw new Error("Data de nascimento inválida");
        }

        this.#valor = dataObj;
    }

    get() {
        //retorna no formato padrão brasileiro
        return this.#valor.toLocaleDateString("pt-BR");
    }

    getDate() {
        //se precisar do objeto Date internamente
        return this.#valor;
    }

    /*#converterParaDate(dataNascimento) {
        if(dataNascimento instanceof Date) return dataNascimento;
        return new Date(dataNascimento);
    }*/

    #validar(dataNascimento) {
       // if(!(dataNascimento instanceof Date) || isNaN(dataNascimento)) return false; 

        const hoje = new Date();
        if(dataNascimento > hoje) return false;

        return true;
    }
}

this.dataNascimento = new DataNascimento();

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
        return this.#formatar();
    }

    #limpar(telefone) {
        return telefone.replace(/\D/g, "");
    }

    #validar(telefone) {
        if (telefone.length !== 11) return false;
        if(/^(\d)\1+$/.test(telefone)) return false;
        return true;
    }

    #formatar() {
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
    }
}

this.telefone = new Telefone();
//this.telefone.set(telefone.value);

class Celular {   
    
}

this.celular = new Celular();

class Email {
    
}

this.email = new Email();

class Clientes {
    constructor() {
        //ENCAPSULAMENTO POR CLASSES E MÉTODOS PRIVADOS
        this.cpf = new CPF();
        this.rg = new RG();
        this.dataNascimento = new DataNascimento();
        this.telefone = new Telefone();
    }

    validar = (valor) => valor.trim().length > 0;
    
    validarPrimeiraEtapa = () => {
        const campos = [
            {id: "nomeCompleto", mensagem: "Preencha o campo nome"},
            {id: "cpf", mensagem: "Preencha o campo CPF"},
            {id: "rg", mensagem: "Preencha o campo RG"},
            {id: "dataNascimento", mensagem: "Preencha o campo data de nascimento"},
            {id: "masculino", mensagem: "Preencha o campo masculino"},
            {id: "feminino", mensagem: "Preencha o campo feminino"},
            {id: "solteiro", mensagem: "Preencha o campo solteiro"},
            {id: "separado", mensagem: "Preencha o campo separado"},
            {id: "viuvo", mensagem: "viúvo"}, 
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

            const rgDigitado = document.getElementById("rg").value;
            this.rg.set(rgDigitado);

            const dataNascimentoDigitado = document.getElementById("dataNascimento");
            this.dataNascimento.set(dataNascimentoDigitado);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    
    validarSegundaEtapa = () => {
        //validação dos campos
        const campos = [
            {id: "telefone", mensagem: "Preencha o campo telefone"},
            {id: "celular", mensagem: "Preencha o campo celular"},
            {id: "email", mensagem: "Preencha o campo email"},
        ]

        /*for(let campo of campos) {
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)) {
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        try {
            let telefoneDigitado = document.getElementById("telefone").value;
            this.telefone.set(telefoneDigitado);
           
            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    validarTerceiraEtapa = () => {
        //validação dos campos
        const campos = [
            {id: "estado", mensagem: "Preencha o campo estado"},
            {id: "cidade", mensagem: "Preencha o campo cidade"},
            {id: "bairro", mensagem: "Preencha o campo bairro"},
            {id: "rua", mensagem: "Preencha o campo rua"},
            {id: "numero", mensagem: "Preencha o campo número"},
            {id: "cep", mensagem: "Preencha o campo cep"},
            {id: "complemento", mensagem: "Preencha o campo complemento"},
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

    validarQuartaEtapa = () => {
        //validação dos campos
        const campos = [
            {id: "placa", mensagem: "Preencha o campo placa"},
            {id: "marca", mensagem: "Preencha o campo marca"},
            {id: "modelo", mensagem: "Preencha o campo modelo"},
            {id: "ano", mensagem: "Preencha o campo ano"},
            {id: "cor", mensagem: "Preencha o campo cor"},
            {id: "chassi", mensagem: "Preencha o campo chassi"},
            {id: "kmAtual", mensagem: "Preencha o campo km Atual"},
            {id: "tipoCombustivel", mensagem: "Preencha o campo tipo de combustível"},
            {id: "observacoes", mensagem: "Preencha o campo observacoes"},
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

    validarQuintaEtapa = () => {
        const campos = [
            {id: "dataCadastro", mensagem: "Preencha o campo data de cadastro"},
            {id: "historicoServicos", mensagem: "Preencha o campo histórico de serviços"},
            {id: "dataUltimaVisita", mensagem: "Preencha o campo data última visita"},
            {id: "observacoes", mensagem: "Preencha o campo observacoes"},
        ];

        /*for(let campo of campos) {
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)) {
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }

            
        }
        */
       this.proximaEtapa();
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
            nomeCompleto: document.getElementById("nomeCompleto").value,
            cpf: this.cpf.get(),
            rg: this.rg.get(),
            dataNascimento: this.dataNascimento.get(),
            masculino: document.getElementById("masculino").value,
            feminino: document.getElementById("feminino").value,
            solteiro: document.getElementById("solteiro").value,
            separado: document.getElementById("separado").value,
            viuvo: document.getElementById("viuvo").value,
            telefone: this.telefone.get(),
            celular: document.getElementById("celular").value,
            email: document.getElementById("email").value,
            estado: document.getElementById("estado").value,
            cidade: document.getElementById("cidade").value,
            bairro: document.getElementById("bairro").value,
            rua: document.getElementById("rua").value,
            numero: document.getElementById("numero").value,
            cep: document.getElementById("cep").value,
            complemento: document.getElementById("complemento").value,
            placa: document.getElementById("placa").value,
            marca: document.getElementById("marca").value,
            modelo: document.getElementById("modelo").value,
            ano: document.getElementById("ano").value,
            cor: document.getElementById("cor").value,
            chassi: document.getElementById("chassi").value,
            kmAtual: document.getElementById("kmAtual").value,
            tipoCombustivel: document.getElementById("tipoCombustivel").value,
            observacoesVeiculo: document.getElementById("observacoes").value,
            dataCadastro: document.getElementById("dataCadastro").value,
            historicoServicos: document.getElementById("historicoServicos").value,
            dataUltimaVisita: document.getElementById("dataUltimaVisita").value,
            observacoes: document.getElementById("observacoes").value
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
    btn.addEventListener("click", () => {
        switch(etapaAtual) {
            case 0: 
                clientes.validarPrimeiraEtapa();
                break;
            case 1: 
                clientes.validarSegundaEtapa();
                break;
            case 2:
                clientes.validarTerceiraEtapa();
                break;
            case 3:
                clientes.validarQuartaEtapa();
                break;
            case 4: 
                clientes.validarQuintaEtapa();
                break;
            default:
                clientes.proximaEtapa();
        }
    });
});

//voltar
voltar.forEach(btn => {
    btn.addEventListener("click", () => {
        clientes.etapaAnterior();
    });
});

const clientes = new Clientes();
window.concluir = () => clientes.concluir();

