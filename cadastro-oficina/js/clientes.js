class Clientes {
    constructor(id, nomeCompleto, cpf, rg, dataNascimento, 
        sexo, estadoCivil, telefone, celular, email, estado, 
        cidade, bairro, rua, numero, cep, complemento, placa, 
        marca, modelo, ano, cor, chassi, kmAtual, tipoCombustivel, 
        observacoes, dataCadastro, historicoServicos, ultimaVisita, observacoes) {
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
        this.observacoes = observacoes;
    }
    
    preenchimentoCampos = () => {
        const nomeCompleto = document.getElementById("nome");
        const cpf = document.getElementById("cpf"); 
        const rg = document.getElementById("rg"); 
        const dataNascimento = document.getElementById("dataNascimento");
        const sexo = document.getElementById("sexo");
        const estadoCivil = document.getElementById("estadoCivil");
        const telefone = document.getElementById("telefone")
        const celular = document.getElementById("celular");
        const email = document.getElementById("email"); 
        const estado = document.getElementById("estado");
        const cidade = document.getElementById("cidade");
        const bairro = document.getElementById("bairro");
        const rua = document.getElementById("rua"); 
        const numero = document.getElementById("numero");
        const cep = document.getElementById("cep");
        const complemento = document.getElementById("complemento");
        const placa = document.getElementById("placa");
        const marca = document.getElementById("marca");
        const modelo = document.getElementById("modelo"); 
        const ano = document.getElementById("ano");
        const cor = document.getElementById("cor"); 
        const chassi = document.getElementById("chassi"); 
        const kmAtual = document.getElementById("kmAtual");
        const tipoCombustivel = document.getElementById("tipoCombustivel");
        const observacoes = document.getElementById("observacoes");
        const dataCadastro = document.getElementById("dataCadastro");
        const historicoServicos = document.getElementById("historicoServicos");
        const ultimaVisita = document.getElementById("ultimaVisita");
        const btnAvancar = document.getElementsByClassName("btnAvancar");

        btnAvancar.addEventListener("click", () => {
            const inputNomeCompleto = nomeCompleto.value.trim(); 
            const inputCpf = cpf.value.trim(); 
            const inputRg = rg.value.trim();
            const inputDataNascimento = dataNascimento.value.trim();
            const inputSexo = sexo.value.trim();
            const inputEstadoCivil = estadoCivil.value.trim();
            const inputTelefone = telefone.value.trim();
            const inputCelular = celular.value.trim();
            const inputEmail = email.value.trim(); 
            const inputEstado = estado.value.trim();
            const inputCidade = cidade.value.trim();
            const inputBairro = bairro.value.trim();
            const inputRua = rua.value.trim(); 
            const inputNumero = numero.value.trim();
            const inputCep = cep.value.trim();
            const inputComplemento = complemento.value.trim();
            const inputPlaca = placa.value.trim();
            const inputMarca = marca.value.trim();
            const inputModelo = modelo.value.trim(); 
            const inputAno = ano.value.trim();
            const inputCor = cor.value.trim(); 
            const inputChassi = chassi.value.trim(); 
            const inputKmAtual = kmAtual.value.trim();
            const inputTipoCombustivel = tipoCombustivel.value.trim();
            const inputObservacoes = observacoes.value.trim();
            const inputDataCadastro = dataCadastro.value.trim();
            const inputHistoricoServicos = historicoServicos.value.trim();
            const inputUltimaVisita = ultimaVisita.value.trim();

            if(inputNomeCompleto == "" || inputCpf == "" || inputRg == "" || inputDataNascimento == "" 
                || inputSexo == "" || inputEstadoCivil == "" || inputTelefone == "" || inputCelular == "" 
                || inputEmail == "" || inputEstado == "" || inputCidade == "" || inputCidade == "" 
                || inputBairro == "" || inputRua == "" || inputNumero == "" || inputCep == "" 
                || inputComplemento == "" || inputPlaca == "" || inputMarca == "" || inputModelo == "" 
                || inputAno == "" || inputCor == "" || inputChassi == "" || inputKmAtual == "" 
                || inputTipoCombustivel == "" || inputObservacoes == "" || inputDataCadastro == "" 
                || inputHistoricoServicos == "" || inputUltimaVisita == "") {
                    
            }
        });
    }
}

clientes = new Clientes();