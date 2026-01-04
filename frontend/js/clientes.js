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

const cpf = new CPF;

class RG {
    #valor;

    set(rg) {
        const limpo = RG.#limpar(rg);

        if (!RG.#validar(limpo)) {
            throw new Error("RG inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }

    static #limpar(rg) {
        return rg.replace(/\D/g, "");
    }

    static #validar(rg) {
        if (rg.length !== 6) return false;
        if(/^(\d)\1+$/.test(rg)) return false;
        return true;
    }
}

const rg = new RG;

class DataNascimento {
    #valor;
    
    set(dataNascimento) {
        if(typeof dataNascimento !== "string") {
            throw new Error("Data de nacimento deve ser texto");
        }

        if(dataNascimento == "") {
            throw new Error("Data de nascimento inválida")
        }

        return this.#valor = dataNascimento;
    }

    get() {
        //se precisar do objeto Date internamente
        return this.#valor;
    }
}

const dataNascimento = new DataNascimento();

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

class Placa {
    #valor;

    set(placa) {
        const limpo = Placa.#limpar(placa);

        if(!Placa.#validar(limpo)) {
            throw new Error("Placa inválida")
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }

    static #limpar(placa) {
        return String(placa).toUpperCase()
        .replace(/[^A-Z0-9]/g, "");
    }

    static #validar(placa) {
        if(placa.length !== 7) return false;

        // LLLNLNN (padrão Mercosul)
        const mercosul = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;
        const antigo = /^[A-Z]{3}[0-9]{4}$/;
        
        return mercosul.test(placa) || antigo.test(placa);
    }
}

const placa = new Placa();

class Chassi {
    #valor;

    set(chassi) {
        const limpa = Chassi.#limpar(chassi);

        if(!Chassi.#validar(limpa)) {
            throw new Error("Chassi inválido");
        }

        this.#valor = limpa;
    }

    get() {
        return this.#valor;
    }

    static #limpar(chassi) {
        return String(chassi).toUpperCase()
        .replace(/[^A-Z0-9]/g, "");
    }

    static #validar(chassi) {
        if(chassi.length !== 17) return false;
        
        return chassi;
    }
}

const chassi = new Chassi();

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

const ano = new Ano();

class DataCadastro {
    #valor;
    
    set(dataCadastro) {
        if(typeof dataCadastro !== "string") {
            throw new Error("Data de cadastro do carro deve ser texto");
        }

        if(dataCadastro == "") {
            throw new Error("Data de cadastro do carro inválido")
        }

        return this.#valor = dataCadastro;
    }

    get() {
        //se precisar do objeto Date internamente
        return this.#valor;
    }
}

const dataCadastro = new DataCadastro();

class UltimaVisita {
    #valor;
    
    set(ultimaVisita) {
        if(typeof ultimaVisita !== "string") {
            throw new Error("Ano do carro deve ser texto");
        }

        if(ultimaVisita == "") {
            throw new Error("Ano do carro inválido")
        }

        return this.#valor = ultimaVisita;
    }

    get() {
        //se precisar do objeto Date internamente
        return this.#valor;
    }
}

const UltimaVisita = new UltimaVisita();

class Clientes {
    constructor() {
        //ENCAPSULAMENTO POR CLASSES E MÉTODOS PRIVADOS
        this.cpf = new CPF();
        this.rg = new RG();
        this.dataNascimento = new DataNascimento();
        this.telefone = new Telefone();
        this.celular = new Celular();
        this.email = new Email();
        this.cep = new Cep();
        this.placa = new Placa();
        this.chassi = new Chassi();
        this.ano = new Ano();
        this.ano = new DataCadastro();
        this.ano = new UltimaVisita();
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

            const dataNascimentoDigitado = document.getElementById("dataNascimento").value;
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
           
            let celularDigitado = document.getElementById("celular").value;
            this.celular.set(celularDigitado);

            let emailDigitado = document.getElementById("email").value;
            this.email.set(emailDigitado);

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

        try {
            let cepDigitado = document.getElementById("cep").value;
            this.cep.set(cepDigitado);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
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

        try {
            const placaDigitada = document.getElementById("placa").value;
            this.placa.set(placaDigitada);

            const chassiDigitado = document.getElementById("chassi").value;
            this.chassi.set(chassiDigitado);

            const anoDigitado = document.getElementById("ano").value;
            this.ano.set(anoDigitado);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
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
       
       try {
            const dataCadastroDigitada = document.getElementById("dataCadastro").value;
            this.dataCadastro.set(dataCadastroDigitada);

            const dataUltimaVisitaDigitado = document.getElementById("dataUltimaVisita").value;
            this.dataCadastro.set(dataUltimaVisitaDigitado);

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
            celular: this.celular.get(),
            email: this.email.get(),
            estado: document.getElementById("estado").value,
            cidade: document.getElementById("cidade").value,
            bairro: document.getElementById("bairro").value,
            rua: document.getElementById("rua").value,
            numero: document.getElementById("numero").value,
            cep: this.cep.get(),
            complemento: document.getElementById("complemento").value,
            placa: this.placa.get(),
            marca: document.getElementById("marca").value,
            modelo: document.getElementById("modelo").value,
            ano: this.ano.get(),
            cor: document.getElementById("cor").value,
            chassi: this.chassi.get(),
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

