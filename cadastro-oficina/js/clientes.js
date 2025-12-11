const passagem = document.querySelectorAll(".form-step");
const avancar = document.querySelectorAll(".btnAvancar");
const voltar = document.querySelectorAll(".btnVoltar");
let etapaAtual = 0;

class Clientes {
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

        this.proximaEtapa();
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

        this.proximaEtapa();
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

            this.proximaEtapa();
        }*/
    }

    validarQuitaEtapa = () => {
        const campos = [
            {id: "dataCadastro", mensagem: "Preencha o campo data de cadastro"},
            {id: "historicoServicos", mensagem: "Preencha o campo histórico de serviços"},
            {id: "dataUltimaVisita", mensagem: "Preencha o campo data última visita"},
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
                clientes.validarQuitaEtapa();
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
