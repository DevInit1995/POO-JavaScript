const passagem = document.querySelectorAll(".form-step");
const avancar = document.querySelectorAll(".btnAvancar");
const voltar = document.querySelectorAll(".btnVoltar");
const dataNascimentoInput = document.getElementById("dataNascimento");
const cpfInput = document.getElementById("cpf");
const rgInput = document.getElementById("rg");
const cepInput = document.getElementById("cep");
const telefoneInput = document.getElementById("telefone");
const contatoEmergenciaInput = document.getElementById("contatoEmergencia");
const salarioInput = document.getElementById("salario");
const dataAdmissaoInput = document.getElementById("dataAdmissao");
const agenciaInput = document.getElementById("agencia");
const contaInput = document.getElementById("conta");
const cnhInput = document.getElementById("cnh");



const btnConcluir = document.querySelectorAll(".btnConcluir");
let etapaAtual = 0;

class Funcionario {
    constructor() {
        /*this.nomeCompleto = nomeCompleto;
        this.dataNascimento = dataNascimento;*/
        //this.sexo = sexo;
        this.cpf = this._criarCPF(); //encapsulado;
        this.rg = this._criarRG();
        /*this.estadoCivil = estadoCivil;
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;*/
        this.cep = this._criarCEP();
        this.telefone = this._criarTelefone();
        this.email = this._criarEmail();
        /*this.contatoEmergencia = contatoEmergencia;
        this.cargo = cargo;
        this.setor = setor;*/
        this.salario = this._criarSalario();
        this.dataAdmissao = this._criarDataAdmissao();
        /*this.cargaHoraria = cargaHoraria;
        this.turno = turno;
        this.banco = banco;
        this.agencia = agencia;
        this.conta = conta;
        this.tipoConta = tipoConta;
        this.cnh = cnh;
        this.pis = pis;
        this.tituloEleitor = tituloEleitor;
        this.certificadoReservista = certificadoReservista;*/
        this.status = this._criarStatus();
        /*this.dataCadastro = dataCadastro
        this.ultimaAtualizacao = ultimaAtualizacao;*/
    }

    validar = (valor) => valor.trim().length > 0;

    validarPrimeiraEtapa() {
        //validação dos campos
        const campos = [
            {id: "nomeCompleto", mensagem: "Preencha o campo nome"},
            {id: "dataNascimento", mensagem: "Preencha o campo data de nascimento"},
            {id: "sexo", mensagem: "Preencha o campo sexo"},
            {id: "cpf", mensagem: "Preencha o campo cpf"},
            {id: "rg", mensagem: "Informe o campo rg"},
            {id: "estadoCivil", mensagem: "Informe o campo estado civil"},
        ];

        /*for(let campo of campos){
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

        try {
            this.cpf.set(document.getElementById("cpf").value);
            this.rg.set(document.getElementById("rg").value);
            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }       

    _criarCPF = () => {
        let valor = "";

        const limpar = cpf => cpf.replace(/\D/g, "");

        const validar = cpf => {
            if (cpf.length !== 11) return false;
            if (/^(\d)\1{10}$/.test(cpf)) return false;
            return true;
        };

        return {
            set(cpf) {
                const limpo = limpar(cpf);
                if (!validar(limpo)) {
                    throw new Error("CPF inválido");
                }
                valor = limpo;
            },
            get() {
                return valor;
            }
        };
    };       

    _criarRG = () => {
        let valor = "";
        const limpar = rg => rg.replace(/\D/g, "");

        const validar = rg => {
            // RG geralmente tem 9 ou 10 dígitos
            if(rg.length < 6 || rg.length > 10) return false;
            // evita números todos iguais (ex: 111111111)
            if(/^(\d)\1+$/.test(rg)) return false;

            return true;
        };

        return {
            set(rg) {
                const limpo = limpar(rg);
                if(!validar(limpo)){
                    throw new Error("RG inválido");
                }
                valor = limpo;
            },
            get() {
                return valor;
            }
        };
    };

    validarSegundaEtapa() {
        //validação dos campos
        const campos = [
            {id: "estado", mensagem: "Preencha o campo estado"},
            {id: "cidade", mensagem: "Preencha o campo cidade"},
            {id: "bairro", mensagem: "Preencha o campo bairro"},
            {id: "rua", mensagem: "Preencha o campo rua"},
            {id: "numero", mensagem: "Informe o campo numero"},
            {id: "cep", mensagem: "Informe o campo estado cep"},
        ]

        /*for(let campo of campos){
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

        try {
            this.cep.set(document.getElementById("cep").value);
            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    _criarCEP = () => {
        let valor = "";
        const limpar = cep => cep.replace(/\D/g, "");

        const validar = cep => {
            //CEP geralmente tem 8 digítos
            if(cep.length < 8 || cep.length > 8) return false;
            //evita números todos iguais (ex: 11111111)
            if(/^(\d)\1+$/.test(cep)) return false;

            return true;
        };

        return {
            set(cep) {
                const limpo = limpar(cep);
                if(!validar(limpo)) {
                    throw new Error("CEP inválido");
                }
                valor = limpo;
            },
            get() {
                return valor;
            }
        };
    };

    validarTerceiraEtapa() {
        //validação dos campos
        const campos = [
            {id: "telefone", mensagem: "Preencha o campo telefone"},
            {id: "email", mensagem: "Preencha o campo email"},
            {id: "contatoEmergencia", mensagem: "Preencha o campo contato emergência"},
        ]

        /*for(let campo of campos){
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

        try {
            this.telefone.set(document.getElementById("telefone").value);
            this.email.set(document.getElementById("email").value);
            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    _criarTelefone = () => {
        let valor = "";
        const limpar = telefone => telefone.replace(/\D/g, "");

        const validar = telefone => {
            // telefone geralmente tem 9 ou 10 dígitos
            if(telefone.length < 11 || telefone.length > 11) return false;
            // evita números todos iguais (ex: 111111111)
            if(/^(\d)\1+$/.test(telefone)) return false;

            return true;
        };

        return {
            set(telefone) {
                const limpo = limpar(telefone);
                if(!validar(limpo)){
                    throw new Error("Telefone inválido");
                }
                valor = limpo;
            },
            get() {
                return valor;
            }
        };
    }

    _criarEmail = () => {
        let valor = "";
        const limpar = email => email.trim().toLowerCase();

        const validar = email => {
           const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
           return regex.test(email);
        };

        return {
            set(email) {
                const limpo = limpar(email);
                if(!validar(limpo)){
                    throw new Error("E-mail inválido");
                }
                valor = limpo;
            },
            get() {
                return valor;
            }
        };
    }

    validarQuartaEtapa() {
        //validação dos campos
        const campos = [
            {id: "cargo", mensagem: "Preencha o campo cargo"},
            {id: "setor", mensagem: "Preencha o campo setor"},
            {id: "salario", mensagem: "Preencha o campo salario"},
            {id: "dataAdmissao", mensagem: "Preencha o campo data de admissão"},
            {id: "cargaHoraria", mensagem: "Preencha o campo carga horária"},
            {id: "turno", mensagem: "Preencha o campo turno"},
        ]

        /*for(let campo of campos){
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

        try {
            this.salario.set(document.getElementById("salario").value);
            this.dataAdmissao.set(document.getElementById("dataAdmissao").value);
            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    _criarSalario = () => {
        let valor = 0;

        const limpar = salario => {
            if (typeof salario === "string") {
                salario = salario.replace(/\./g, "").replace(",", ".");
            }
            return Number(salario);
        };

        const validar = salario => {
           if (isNaN(salario)) return false;
           if (salario <= 0) return false;
           if (salario > 1_000_000) return false; // limite realista
           return true;
        };

        return {
            set(salario) {
                const limpo = limpar(salario);
                if (!validar(limpo)) {
                    throw new Error("Salário inválido");
                }
                valor = limpo;
            },
            get() {
                return valor;
            },
            formatar() {
                return valor.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL;"
                });
            }
        };
    };

    _criarDataAdmissao = () => {
        let valor = null;

        const limpar = dataAdmissao => new Date(dataAdmissao);

        const validar = dataAdmissao => {
            if (!(dataAdmissao instanceof Date) || isNaN(dataAdmissao)) return false;
            
            const hoje = new Date();
            hoje.setHours(0, 0, 0, 0);

            if (dataAdmissao > hoje) return false;

            return true;
        };

        return {
            set(dataAdmissao) {
                const dataObj = limpar(dataAdmissao);
                if (!validar(dataObj)) {
                    throw new Error("Data de admissão inválida");
                }
                valor = dataObj;
            },
            get() {
                return valor;
            },
            formatar() {
                if (!valor) return "";
                return valor.toLocaleDateString("pt-BR");
            }
        };
    };

    validarQuintaEtapa() {
        //validação dos campos
        const campos = [
            {id: "banco", mensagem: "Preencha o campo banco"},
            {id: "agencia", mensagem: "Preencha o campo agencia"},
            {id: "conta", mensagem: "Preencha o campo conta"},
            {id: "tipoConta", mensagem: "Preencha o campo tipoConta"},
        ]

        /*for(let campo of campos){
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

    validarSextaEtapa() {
        //validação dos campos
        const campos = [
            {id: "cnh", mensagem: "Preencha o campo cnh"},
            {id: "pis", mensagem: "Preencha o campo pis"},
            {id: "tituloEleitor", mensagem: "Preencha o campo titulo de eleitor"},
            {id: "certificadoReservista", mensagem: "Preencha o campo certificado de reservista"},
        ]

        /*for(let campo of campos){
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

    validarSetimaEtapa() {
        //validação dos campos
        const campos = [
            {id: "status", mensagem: "Selecione o status"},
            {id: "dataCadastro", mensagem: "Preencha o campo data de cadastro"},
            {id: "ultimaAtualizacao", mensagem: "Preencha o campo última atualização"}
        ]

        /*for(let campo of campos){
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

        try {
            const statusSelecionado = 
                document.querySelector('input[name="status"]:checked')?.value;
            if (!statusSelecionado) {
                throw new Error("Selecione um status");
            }

            this.status.set(statusSelecionado.value);
            this.proximaEtapa();
        } catch (e) {
            this.exibirAlerta("warning", "Erro", e.message);
        }
    }

    _criarStatus = () => {
        let valor = null;

        const valoresValidos = ["ATIVO", "INATIVO"];

        const validar = status => valoresValidos.includes(status);
        
        return {
            set(status) {
                if(!validar(status)) {
                    throw new Error("Status inválido");
                }
                valor = status;
            },
            get() {
                return valor;
            },
            isAtivo() {
                return valor === "ATIVO";
            },
            isInativo() {
                return valor === "INATIVO";
            }
        };
    };

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

    concluir() {
        const registro = {
            nomeCompleto: document.getElementById("nomeCompleto").value,
            dataNascimento: document.getElementById("dataNascimento").value,
            sexo: document.getElementById("sexo").value,
            cpf: this.cpf.get(),
            rg: this.rg.get(),
            estadoCivil: document.getElementById("estadoCivil").value,
            estado: document.getElementById("estado").value,
            cidade: document.getElementById("cidade").value,
            bairro: document.getElementById("bairro").value,
            rua: document.getElementById("rua").value,
            numero: document.getElementById("numero").value,
            cep: this.cep.get(),
            telefone: this.telefone.get(),
            email: this.email.get(),
            contatoEmergencia: document.getElementById("contatoEmergencia").value,
            cargo: document.getElementById("cargo").value,
            setor: document.getElementById("setor").value,
            salario: this.salario.get(),
            dataAdmissao: this.dataAdmissao.get(),
            cargaHoraria: document.getElementById("cargaHoraria").value,
            turno: document.getElementById("turno").value,
            banco: document.getElementById("banco").value,
            agencia: document.getElementById("agencia").value,
            conta: document.getElementById("conta").value,
            cnh: document.getElementById("cnh").value,
            pis: document.getElementById("pis").value,
            tituloEleitor: document.getElementById("tituloEleitor").value,
            tipoConta: document.getElementById("tipoConta").value,
            id: document.getElementById("id").value,
            status: this.status.get(),
            dataCadastro: document.getElementById("dataCadastro").value,
            ultimaAtualizacao: document.getElementById("ultimaAtualizacao").value
        }

        //Buscar a "tabela" no localStorage (ou criar vazia)
        let tabela = JSON.parse(localStorage.getItem("funcionarios")) || [];

        //Colocar o novo registro
        tabela.push(registro);

        //Salvar novamente no localStorage
        localStorage.setItem("funcionarios", JSON.stringify(tabela));
    }
}

const funcionario = new Funcionario();

function mascaraDataNascimento(data) {
    data = new Date();

    return data = new Intl.toLocaleDateString("pt-BR").format(data);
}

dataNascimentoInput.addEventListener("formdata", e => {
    e.target.value = mascaraDataNascimento(e.target.value);
});

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

function mascaraRG(valor) {
    valor = valor.replace(/\D/g, "");

    if(valor.length > 6) {
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

function mascaraCep(valor) {
    valor = valor.replace(/\D/g, "");

    if(valor.length > 8) {
        valor = valor.slice(0, 8);
    }

    return valor.replace(/(\d{5})(\d)/, "$1-$2");
}

cepInput.addEventListener("input", e => {
    e.target.value = mascaraCep(e.target.value);
});

function mascaraTelefone(valor) {
    valor = valor.replace(/\D/g, "").slice(0, 11);

    if(valor.length === 11) {
        return valor.replace(
            /(\d{2})(\d{4})(\d{4})/,
            "($1) $2-$3");
    }

    if (valor.length === 10) {
        return valor.replace(
            /(\d{2})(\d{4})(\d{4})/,
            "($1) $2-$3"
        );
    }

    return valor;
}

telefoneInput.addEventListener("input", e => {
    e.target.value = mascaraTelefone(e.target.value);
});

function mascaraContatoEmergencia(valor) {
    valor = valor.replace(/\D/g, "").slice(0, 11);

    if(valor.length === 11) {
        return valor.replace(
            /(\d{2})(\d{5})(\d{4})/,
            "($1) $2-$3"
        );
    }

    if(valor.length === 10) {
        return valor.replace(
            /(\d{2})(\d{5})(\d{4})/,
            "($1) $2-$3"
        );
    }

    return valor;
}

contatoEmergenciaInput.addEventListener("input", e => {
    e.target.value = mascaraContatoEmergencia(e.target.value);
});

function mascaraDataAdmissao(data) {
    data = new Date();

    return data = new Intl.toLocaleDateString("pt-BR").format(dataAdmissao);
}

dataAdmissaoInput.addEventListener("formdata", e => {
    e.target.value = mascaraDataAdmissao(e.target.value);
});

function mascaraAgencia(valor) {
    valor = valor.replace(/\D/g, "");

    if(valor.length > 4) {
        return valor.replace(/(\d{4})(\d)/, "$1-$2");
    }

    return valor;
}

agenciaInput.addEventListener("input", e => {
    e.target.value = mascaraAgencia(e.target.value);
});

function mascaraConta(valor) {
    valor = valor.replace(/\D/g, "").slice(0, 13);

    if(valor.length > 1) {
        return valor.replace(/(\d+)(\d)$/, "$1-$2");
    }

    return valor;
}

contaInput.addEventListener("input", e => {
    e.target.value = mascaraConta(e.target.value);
});

function mascaraCnh(valor) {
    return valor
        .replace(/\D/g, "")
        .slice(0, 11);
}

cnhInput.addEventListener("input", e => {
    e.target.value = mascaraCnh(e.target.value);
});

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

document.querySelectorAll(".btnConcluir").forEach(btn => {
    btn.addEventListener("click", () => {
        funcionario.concluir();
    });
});