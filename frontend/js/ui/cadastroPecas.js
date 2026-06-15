function carregarFornecedores() {
    debugger
    const select = document.getElementById("nomeFantasia");
    select.innerHTML = "";

    FornecedorRepository.listarAtivos().forEach(fornecedor => {
        const option = document.createElement("option");
        option.value = fornecedor.id;
        option.textContent = fornecedor.nomeFantasia;
        select.appendChild(option);
    });
}

document.addEventListener("DOMContentLoaded", carregarFornecedores);