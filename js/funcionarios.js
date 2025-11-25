const passagem = document.querySelectorAll(".form-step");
const avancar = document.querySelectorAll(".btnAvancar");
const voltar = document.querySelectorAll(".btnVoltar");
let etapaAtual = 0;

class Funcionario {
    /*constructor(id, nomeCompleto, dataNascimento, sexo, cpf, rg, estadoCivil, 
        estado, cidade, bairro,rua, numero, cep, telefone, email, contatoEmergencia, 
        cargo, setor, salario, dataAdmissao, cargaHoraria, turno, banco, agencia, 
        conta, tipoConta, cnh, pis, tituloEleitor, certificadoReservista, 
        status, dataCadastro, ultimaAtualizacao) {
        
        this.nomeCompleto = nomeCompleto;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.cpf = cpf;
        this.rg = rg;
        this.estadoCivil = estadoCivil;
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
        this.cep = cep;
        this.telefone = telefone;
        this.email = email;
        this.contatoEmergencia = contatoEmergencia;
        this.cargo = cargo;
        this.setor = setor;
        this.salario = salario;
        this.dataAdmissao = dataAdmissao;
        this.cargaHoraria = cargaHoraria;
        this.turno = turno;
        this.banco = banco;
        this.agencia = agencia;
        this.conta = conta;
        this.tipoConta = tipoConta;
        this.cnh = cnh;
        this.pis = pis;
        this.tituloEleitor = tituloEleitor;
        this.certificadoReservista = certificadoReservista;
        this.status = status;
        this.dataCadastro = dataCadastro
        this.ultimaAtualizacao = ultimaAtualizacao;
    }*/

    validar = (valor) => valor.trim().length > 0;

    validarPrimeiraEtapa = () => {
        //validação dos campos
        const campos = [
            {id: "nomeCompleto", mensagem: "Preencha o campo nome"},
            {id: "dataNascimento", mensagem: "Preencha o campo data de nascimento"},
            {id: "sexo", mensagem: "Preencha o campo sexo"},
            {id: "cpf", mensagem: "Preencha o campo cpf"},
            {id: "rg", mensagem: "Informe o campo rg"},
            {id: "estadoCivil", mensagem: "Informe o campo estado civil"},
        ]

        for(let campo of campos){
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)){
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }

        /*const campo = {};
        document.querySelectorAll("input, textarea").forEach(el => {
            campo[el.id] = el.value;
        });*/

        this.proximaEtapa(); 
    }

    validarSegundaEtapa = () => {
        //validação dos campos
        const campos = [
            {id: "estado", mensagem: "Preencha o campo estado"},
            {id: "cidade", mensagem: "Preencha o campo cidade"},
            {id: "bairro", mensagem: "Preencha o campo bairro"},
            {id: "rua", mensagem: "Preencha o campo rua"},
            {id: "numero", mensagem: "Informe o campo numero"},
            {id: "cep", mensagem: "Informe o campo estado cep"},
        ]

        for(let campo of campos){
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)){
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }

        /*const campo = {};
        document.querySelectorAll("input, textarea").forEach(el => {
            campo[el.id] = el.value;
        });*/

        this.proximaEtapa();
    }

    validarTerceiraEtapa = () => {
        //validação dos campos
        const campos = [
            {id: "telefone", mensagem: "Preencha o campo telefone"},
            {id: "email", mensagem: "Preencha o campo email"},
            {id: "contatoEmergencia", mensagem: "Preencha o campo contato emergência"},
        ]

        for(let campo of campos){
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)){
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }

        /*const campo = {};
        document.querySelectorAll("input, textarea").forEach(el => {
            campo[el.id] = el.value;
        });*/

        this.proximaEtapa();
    }

    validarQuartaEtapa = () => {
        //validação dos campos
        const campos = [
            {id: "cargo", mensagem: "Preencha o campo cargo"},
            {id: "setor", mensagem: "Preencha o campo setor"},
            {id: "salario", mensagem: "Preencha o campo salario"},
            {id: "dataAdmissao", mensagem: "Preencha o campo data de admissão"},
            {id: "cargaHoraria", mensagem: "Preencha o campo carga horária"},
            {id: "turno", mensagem: "Preencha o campo turno"},
        ]

        for(let campo of campos){
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)){
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }

        /*const campo = {};
        document.querySelectorAll("input, textarea").forEach(el => {
            campo[el.id] = el.value;
        });*/

        this.proximaEtapa();
    }

    validarQuintaEtapa = () => {
        //validação dos campos
        const campos = [
            {id: "banco", mensagem: "Preencha o campo banco"},
            {id: "agencia", mensagem: "Preencha o campo agencia"},
            {id: "conta", mensagem: "Preencha o campo conta"},
            {id: "tipoConta", mensagem: "Preencha o campo tipoConta"},
        ]

        for(let campo of campos){
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)){
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }

        /*const campo = {};
        document.querySelectorAll("input, textarea").forEach(el => {
            campo[el.id] = el.value;
        });*/

        this.proximaEtapa();
    }

    validarSextaEtapa = () => {
        //validação dos campos
        const campos = [
            {id: "cnh", mensagem: "Preencha o campo cnh"},
            {id: "pis", mensagem: "Preencha o campo pis"},
            {id: "tituloEleitor", mensagem: "Preencha o campo titulo de eleitor"},
            {id: "certificadoReservista", mensagem: "Preencha o campo certificado de reservista"},
        ]

        for(let campo of campos){
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)){
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }

        /*const campo = {};
        document.querySelectorAll("input, textarea").forEach(el => {
            campo[el.id] = el.value;
        });*/

        this.proximaEtapa();
    }

    validarSetimaEtapa = () => {
        //validação dos campos
        const campos = [
            {id: "dataCadastro", mensagem: "Preencha o campo data de cadastro"},
            {id: "ultimaAtualizacao", mensagem: "Preencha o campo última atualização"},
        ]

        for(let campo of campos){
            const valor = document.getElementById(campo.id).value;
            if(!this.validar(valor)){
                this.exibirAlerta("warning", "Campo obrigatório", campo.mensagem);
                return false;
            }
        }

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

funcionario = new Funcionario();

avancar.forEach((btn) =>{
    btn.addEventListener("click", () => {
        switch(etapaAtual){
            case 0:
                funcionario.validarPrimeiraEtapa();
                break;
            case 1:
                funcionario.validarSegundaEtapa();
                break;
            case 2: 
                funcionario.validarTerceiraEtapa();
                break;
            case 3: 
                funcionario.validarQuartaEtapa();
                break;
            case 4:
                funcionario.validarQuintaEtapa();
                break;
            case 5:
                funcionario.validarSextaEtapa();
                break;
            case 6:
                funcionario.validarSetimaEtapa();
                break;
            default:
                funcionario.proximaEtapa();
        }
    });
});

//Voltar 
voltar.forEach(btn => {
    btn.addEventListener("click", () => {
        funcionario.etapaAnterior();
    });
});