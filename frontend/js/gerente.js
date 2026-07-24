class Gerente extends Funcionario {
    constructor(id, nomeCompleto, sexo, dataNascimento) {
        super(
            id,
            nomeCompleto,
            sexo,
            dataNascimento,
        );
    }
}

const gerente = new Gerente();

