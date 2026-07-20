const passagem = document.querySelectorAll(".form-step");
const avancar = document.querySelectorAll(".btnAvancar");
const voltar = document.querySelectorAll(".btnVoltar");
const cpfInput = document.getElementById("cpf");
const telefoneInput = document.getElementById("telefone");
const celularInput = document.getElementById("celular");
const inputDataNascimento = document.getElementById("dataNascimento");
const rgInput = document.getElementById("rg");
const cepInput = document.getElementById("cep");
const placaInput = document.getElementById("placa");
const chassiInput = document.getElementById("chassi");
const dataCadastroInput = document.getElementById("dataCadastro");
const dataUltimaVisitaInput = document.getElementById("dataUltimaVisita");
const btnConcluir = document.querySelectorAll(".btnConcluir");
let etapaAtual = 0;

//ENCAPSULAMENTO POR CLASSES E MÉTODOS PRIVADOS

class Campo {
    #valor; // PRIVADO
    
    set(valor) {
        const limpo = this.limpar(valor);

        if(!this.validar(limpo)) {
            throw new Error("Valor inválido");
        }

        this.#valor = limpo;
    }

    get() {
        return this.#valor;
    }

    limpar(valor) {
        return valor;
    }

    validar() {
        return true;
    }
}

class Id {
    #valor;

    constructor(valor = crypto.randomUUID()) {
        if(!Id.#validar(valor)) {
            throw new Error("Id inválido");
        }

        this.#valor = valor;
        Object.freeze(this);
    }

    get valor() {
        return this.#valor;
    }

    static #validar(valor) {
        return typeof valor === "string" &&
            /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
               .test(valor);
    } 
}

const id = new Id();
document.getElementById("id").value = id.valor;

class CPF extends Campo {
    limpar(cpf) {
        return cpf.replace(/\D/g, "");
    }

    validar(cpf) {
        if (cpf.length !== 11) return false;
        if (/^(\d)\1{10}$/.test(cpf)) return false;
        return true; // validação simplificada
    }
}

const cpf = new CPF;

//máscara cpf
function mascaraCPF(valor) {
    valor = valor.replace(/\D/g, "");

    if(valor.length > 11) {
        valor = valor.slice(0, 11);
    }

    return valor 
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

cpfInput.addEventListener("input", e => {
    e.target.value = mascaraCPF(e.target.value);
});

class RG extends Campo {
    limpar(rg) {
        return rg.replace(/\D/g, "");
    }

    validar(rg) {
        if (rg.length !== 6) return false;
        if(/^(\d)\1+$/.test(rg)) return false;
        return true;
    }
}

const rg = new RG;

function mascaraRG(valor){
    valor = valor.replace(/\D/g, "");

    if(valor.length > 6){
        valor = valor.slice(0, 6);
    }

    return valor 
        .replace(/(\d{2})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1})$/, "$1-$2");
}

rgInput.addEventListener("input", e => {
    e.target.value = mascaraRG(e.target.value);
});

class DataNascimento {
    #valor;
    
    set(dataNascimento) {
        if(typeof dataNascimento !== "string") {
            throw new Error("Data não deve ser texto!");
        }

        if(!dataNascimento.trim()) {
            throw new Error("Data obrigatória!");
        }

        const data = new Date(dataNascimento);

        if(isNaN(data.getTime())) {
            throw new Error("Data inválida!");
        }

        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        if(data > hoje) {
            throw new Error("Data não pode ser futura!");
        }

        this.#valor = data;

        //return this.#valor = dataNascimento;
    }

    get() {
        //se precisar do objeto Date internamente
        return this.#valor;
    }

    formatar(){
        return this.#valor.toLocaleDateString("pt-BR");
    }
}

const dataNascimento = new DataNascimento();

function mascaraDataNascimento(data){
    data = new Date(); // Ou new Date('2024-01-15T10:00:00');

    // Formato simples: 18/02/2021
    return data = new Intl.toLocaleDateString('pt-BR').format(data);

    /*// Formato com mês abreviado: 18 de fev. de 2021
    new Intl.DateTimeFormat('pt-BR', 
    { day: 'numeric', month: 'short', year: 'numeric' }).
    format(data);*/

    /*// Formato com mês por extenso: 18 de fevereiro de 2021
    new Intl.DateTimeFormat('pt-BR', 
    { day: 'numeric', month: 'long', year: 'numeric' }).
    format(data);*/
}

inputDataNascimento.addEventListener("formdata", e => {
    e.target.value = mascaraDataNascimento(e.target.value);
});

class Telefone extends Campo {
    limpar(telefone) {
        return telefone.replace(/\D/g, "");
    }

    validar(telefone) {
        if (telefone.length !== 11) return false;
        if(/^(\d)\1+$/.test(telefone)) return false;
        return true;
    }

    formatar(valor) {
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

function mascaraTelefone(valor) {
    valor = valor.replace(/\D/g, "");

    if(valor.length > 11) {
        valor = valor.slice(0, 11);
    }

    return valor.replace(
        /(\d{2})(\d{4})(\d{4})/,
        "($1) $2-$3"
    );
}

telefoneInput.addEventListener("input", e => {
    e.target.value = mascaraTelefone(e.target.value);
});

class Celular extends Campo {   
    limpar(celular) {
        return celular.replace(/\D/g, "");
    }

    validar(celular) {
        if(celular.length !== 11) return false;
        if(/^(\d)\1+$/.test(celular)) return false;
        return true;
    }

    formatar(valor) {
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

function mascaraCelular(valor) {
    valor = valor.replace(/\D/g, "");

    if(valor.length > 11){
        valor = valor.slice(0, 11);
    }

    return valor.replace(
        /(\d{2})(\d{4})(\d{4})/,
        "($1) $2-$3"
    );
}

celularInput.addEventListener("input", e => {
    e.target.value = mascaraCelular(e.target.value);
});

class Email extends Campo {
    limpar(email) {
        return email.trim().toLowerCase();
    }

    validar(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}

const email = new Email();

class Cep extends Campo {
    limpar(cep) {
        return String(cep).replace(/\D/g, "");
    }

    validar(cep) {
        if(cep.length !== 8) return false;
        //evita números todos iguais (ex: 11111111)
        if(/^(\d)\1+$/.test(cep)) return false;

        return true;
    } 
}

const cep = new Cep();

function mascaraCep(valor) {
    valor = valor.replace(/\D/g, "");

    if(valor.length > 8){
        valor = valor.slice(0, 8);
    }

    return valor.replace(/(\d{5})(\d)/, "$1-$2");
}

cepInput.addEventListener("input", e => {
    e.target.value = mascaraCep(e.target.value);
});

class Placa extends Campo {
    limpar(placa) {
        return String(placa).toUpperCase()
        .replace(/[^A-Z0-9]/g, "");
    }

    validar(placa) {
        if(placa.length !== 7) return false;

        // LLLNLNN (padrão Mercosul)
        const mercosul = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;
        const antigo = /^[A-Z]{3}[0-9]{4}$/;
        
        return mercosul.test(placa) || antigo.test(placa);
    }
}

const placa = new Placa();

function mascaraPlaca(valor){
    valor = valor 
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "");

    if(valor.length > 7){
        valor = valor.slice(0, 7);
    }

    // Formato Mercosul
    if (/^[A-Z]{3}\d[A-Z]/.test(valor)) {
        return valor;
    }

    // Formato antigo
    return valor.replace(/^([A-Z]{3})(\d)/, "$1-$2");
}

placaInput.addEventListener("input", e => {
    e.target.value = mascaraPlaca(e.target.value);
});

class Chassi extends Campo {
    limpar(chassi) {
        return String(chassi).toUpperCase()
        .replace(/[^A-Z0-9]/g, "");
    }

   validar(chassi) {
        if(chassi.length !== 17) return false;
        
        return chassi;
    }
}

const chassi = new Chassi();

function mascaraChassi(valor){
    return valor 
        .toUpperCase()
        .replace(/[IOQ]/g, "")
        .replace(/[^A-HJ-NPR-Z0-9]/g, "")
        .slice(0, 17);
}

chassiInput.addEventListener("input", e => {
    e.target.value = mascaraChassi(e.target.value);
});

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

        this.#valor = data;
    }

    get() {
        //se precisar do objeto Date internamente
        return this.#valor;
    }
}

const ano = new Ano();

class DataCadastro extends DataNascimento {
}

const dataCadastro = new DataCadastro();

function mascaraDataCadastro(data){
    data = new Date();

    return data = new Intl.toLocaleDateString("pt-BR").format(dataCadastro);
}

dataCadastroInput.addEventListener("formdata", e => {
    e.target.value = mascaraDataCadastro(e.target.value);
});

class UltimaVisita extends DataNascimento {
}

const ultimaVisita = new UltimaVisita();

function mascaraDataUltimaVisita(data){
    data = new Date();

    return data = new Intl.toLocaleDateString("pt-BR").format(data);
}

dataUltimaVisitaInput.addEventListener("formdata", e => {
    e.target.value = mascaraDataUltimaVisita(e.target.value);
});

class Clientes extends Pessoa {
    constructor(id, nomeCompleto, sexo, cpf, rg, dataNascimento, telefone, celular,
        email, cep, placa, marca, modelo, chassi, ano, dataCadastro,
        kmAtual, tipoCombustivel, observacoesVeiculo, historicoServicos) {
        //ENCAPSULAMENTO POR CLASSES E MÉTODOS PRIVADOS        
        super(
            id,
            nomeCompleto,
            sexo,
            cpf,
            rg,
            dataNascimento,
            telefone,
            celular,
            email,
            estado,
            cidade,
            bairro,
            rua,
            numero,
            cep,
            complemento,
            ano,
            dataCadastro,
        );

        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.chassi = chassi;
        this.kmAtual = kmAtual;
        this.tipoCombustivel = tipoCombustivel;
        this.observacoesVeiculo = observacoesVeiculo;
        this.historicoServicos = historicoServicos;
        this.dataUltimaVisita = new UltimaVisita();
    }

    validar = (valor) => valor.trim().length > 0;
    
    validarPrimeiraEtapa() {
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
            cpf.set(cpfDigitado);
            
            const rgDigitado = document.getElementById("rg").value;
            rg.set(rgDigitado);

            const dataNascimentoDigitado = document.getElementById("dataNascimento").value;
            dataNascimento.set(dataNascimentoDigitado);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    validarSegundaEtapa() {
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
            telefone.set(telefoneDigitado);
           
            let celularDigitado = document.getElementById("celular").value;
            celular.set(celularDigitado);

            let emailDigitado = document.getElementById("email").value;
            email.set(emailDigitado);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    validarTerceiraEtapa() {
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
            cep.set(cepDigitado);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    validarQuartaEtapa() {
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
            placa.set(placaDigitada);

            const chassiDigitado = document.getElementById("chassi").value;
            chassi.set(chassiDigitado);

            const anoDigitado = document.getElementById("ano").value;
            ano.set(anoDigitado);

            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    validarQuintaEtapa() {
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
            dataCadastro.set(dataCadastroDigitada);

            const dataUltimaVisitaDigitado = document.getElementById("dataUltimaVisita").value;
            ultimaVisita.set(dataUltimaVisitaDigitado);

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
            id: document.getElementById("id").value,
            nomeCompleto: document.getElementById("nomeCompleto").value,
            cpf: cpf.get(),
            rg: rg.get(),
            dataNascimento: dataNascimento.get(),
            masculino: document.getElementById("masculino").value,
            feminino: document.getElementById("feminino").value,
            solteiro: document.getElementById("solteiro").value,
            separado: document.getElementById("separado").value,
            viuvo: document.getElementById("viuvo").value,
            telefone: telefone.get(),
            celular: celular.get(),
            email: email.get(),
            estado: document.getElementById("estado").value,
            cidade: document.getElementById("cidade").value,
            bairro: document.getElementById("bairro").value,
            rua: document.getElementById("rua").value,
            numero: document.getElementById("numero").value,
            cep: cep.get(),
            complemento: document.getElementById("complemento").value,
            placa: placa.get(),
            marca: document.getElementById("marca").value,
            modelo: document.getElementById("modelo").value,
            ano: ano.get(),
            cor: document.getElementById("cor").value,
            chassi: chassi.get(),
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

const clientes = new Clientes();

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

document.querySelectorAll(".btnConcluir").forEach(btn => {
    btn.addEventListener("click", () => {
        clientes.concluir();
    });
});


