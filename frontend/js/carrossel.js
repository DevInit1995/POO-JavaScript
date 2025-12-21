const passagem = document.querySelectorAll(".form-step");
const avancar = document.querySelectorAll(".btnAvancar");
const voltar = document.querySelectorAll(".btnVoltar");
let etapaAtual = 0;

class Carrossel {
    /*constructor(id, nomeCompleto, cpf, rg, dataNascimento, 
        sexo, estadoCivil, telefone, celular, email, estado, 
        cidade, bairro, rua, numero, cep, complemento, placa, 
        marca, modelo, ano, cor, chassi, kmAtual, tipoCombustivel, 
        observacoes, dataCadastro, historicoServicos, ultimaVisita) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.cpf = cpf;
        this.rg = rg;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
        this.telefone = telefone;
        this.celular = celular;
        this.email = email;
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
        this.cep = cep;
        this.complemento = complemento;
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.chassi = chassi;
        this.kmAtual = kmAtual;
        this.tipoCombustivel = tipoCombustivel;
        this.observacoes = observacoes;
        this.dataCadastro = dataCadastro;
        this.historicoServicos = historicoServicos;
        this.ultimaVisita = ultimaVisita;
    }*/

    validar = (valor) => valor.trim().length > 0;
    
    validarPrimeiraEtapa = () => {     
        /*// Validação dos campos
        const campos = [
            {id: "nomeCompleto", mensagem: "Preencha o campo nome"},
            {id: "cpf", mensagem: "Preencha o campo cpf"},
            {id: "rg", mensagem: "Preencha o campo rg"},
            {id: "dataNascimento", mensagem: "Preencha o campo data de nascimento"},
            //{id: "sexo", mensagem: "Informe o sexo"},
        ]

        for(let campo of campos){
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)){
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        /*const campo = {};
        document.querySelectorAll("input, textarea").forEach(el => {
            campo[el.id] = el.value;
        });*/

        this.proximaEtapa();    
    }

    validarSegundaEtapa = () => {
        //Validação dos campos
        /*const campos = [
            {id: "telefone", mensagem: "Informe o telefone"},
            {id: "celular", mensagem: "Informe o cellular"},
            {id: "email", mensagem: "Informe o email"},
        ]

        for(let campo of campos){
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)){
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        /*const campo = {};
        document.querySelectorAll("input, textarea").forEach(el => {
            campo[el.id] = el.value;
        });*/
        this.proximaEtapa(); 
    }

    validarTerceiraEtapa = () => {
        /*//Validação dos campos
        const campos = [
            {id: "estado", mensagem: "Informe o estado"},
            {id: "cidade", mensagem: "Informe o cidade"},
            {id: "bairro", mensagem: "Informe o bairro"},
            {id: "rua", mensagem: "Informe o rua"},
            {id: "numero", mensagem: "Informe o numero"},
            {id: "cep", mensagem: "Informe o cep"},
            {id: "complemento", mensagem: "Informe o complemento"},
        ]

        for(let campo of campos){
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)){
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        /*const campo = {};
        document.querySelectorAll("input, textarea").forEach(el => {
            campo[el.id] = el.value;
        });*/

        this.proximaEtapa(); 
    }

    validarQuartaEtapa = () => {
        //Validação dos campos
       /* const campos = [
            {id: "placa", mensagem: "Informe a placa"},
            {id: "marca", mensagem: "Informe a marca"},
            {id: "modelo", mensagem: "Informe o modelo"},
            {id: "ano", mensagem: "Informe o ano"},
            {id: "cor", mensagem: "Informe a cor"},
            {id: "chassi", mensagem: "Informe o chassi"},
            {id: "kmAtual", mensagem: "Informe o km atual"},
            {id: "tipoCombustivel", mensagem: "Informe o tipo de combustível"},
        ]

        for(let campo of campos){
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)){
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        /*const campo = {};
        document.querySelectorAll("input, textarea").forEach(el => {
            campo[el.id] = el.value;
        });*/

        this.proximaEtapa(); 
    }

    validarQuintaEtapa = () => {
       /* //Validação dos campos
        const campos = [
            {id: "dataCadastro", mensagem: "Informe a data de cadastro"},
            {id: "historicoServicos", mensagem: "Informe o historico de serviços"},
            {id: "ultimaVisita", mensagem: "Informe a ultima visita"},
        ]

        for(let campo of campos){
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)){
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }*/

        /*const campo = {};
        document.querySelectorAll("input, textarea").forEach(el => {
            campo[el.id] = el.value;
        });*/

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
}

const carrossel = new Carrossel();

avancar.forEach((btn, index) =>{
    btn.addEventListener("click", () => {
        switch(etapaAtual){
            case 0:
                carrossel.validarPrimeiraEtapa();
                break;
            case 1:
                carrossel.validarSegundaEtapa();
                break;
            case 2: 
                carrossel.validarTerceiraEtapa();
                break;
            case 3: 
                carrossel.validarQuartaEtapa();
                break;
            case 4:
                carrossel.validarQuintaEtapa();
                break;
            default:
                carrossel.proximaEtapa();
        }
    });
});

//Voltar 
voltar.forEach(btn => {
    btn.addEventListener("click", () => {
        carrossel.etapaAnterior();
    });
});