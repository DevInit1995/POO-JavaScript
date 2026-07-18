class Mecanico extends Funcionario {
    construtor(nomeCompleto, sexo, dataNascimento, 
        telefone, celular, email, especialidade) {
        
        super(
            nomeCompleto, 
            sexo, 
            dataNascimento, 
            telefone, 
            celular, 
            email
        );

        this.especialidade = especialidade;
    }

    realizandoManutencao() {
        alert(this.nomeCompleto + "Está realizando manutenção.")
    }
}