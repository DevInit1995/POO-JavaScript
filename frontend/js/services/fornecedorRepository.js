class FornecedorRepository {
    //Futuramente criar adicionar no aquivo Service
    static listarAtivos() {
        const fornecedores = JSON.parse(localStorage.getItem("fornecedores")) || [];
        return fornecedores.filter(f => f.status === "Ativo");
    }    
}

const fornecedorRepository = new FornecedorRepository();
