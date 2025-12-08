class Servicos {
    calcularTotal = () => {
        //debugger
        const idNumeroOs = parseFloat(document.getElementById("idNumeroOs").value);
        const calcularPeca = parseFloat(document.getElementById("calcularPeca").value);
        const quantidade = parseFloat(document.getElementById("quantidade").value);
        const preco = parseFloat(document.getElementById("precoTotal").value);
        
        const totalServico = calcularPeca;
        const totalPecas = calcularPeca * quantidade;
        const totalGeral = totalServico + totalPecas;
        
        document.getElementById("totalServico").innerText = totalServico.toFixed(2);
        document.getElementById("totalPecas").innerText = totalPecas.toFixed(2);
        document.getElementById("totalGeral").innerText = totalGeral.toFixed(2);
        //document.getElementById("precoTotal").innerText = totalGeral;
    }

    concluir = () => {
        const registro = {
            idNumeroOs: document.getElementById("idNumeroOs").value,
            calculoServico: document.getElementById("calculoServico").value,
            calcularPeca: document.getElementById("calcularPeca").value,
            quantidade: document.getElementById("quantidade").value,
            totalServico: document.getElementById("totalServico").value,
            totalPecas: document.getElementById("totalPecas").value,
            totalGeral: document.getElementById("totalGeral").value,
            tempoEstimado: document.getElementById("tempoEstimado").value,
            precoTotal: document.getElementById("precoTotal").value,
            categoria: document.getElementById("categoria").value,
            ids: document.getElementById("ids").value,
            nomePeca: document.getElementById("nomePeca").value,
            marca: document.getElementById("marca").value,
            codigoInterno: document.getElementById("codigoInterno").value,
            quantidadeEstoque: document.getElementById("quantidadeEstoque").value,
            precoUnitario: document.getElementById("precoUnitario").value,
            fornecedor: document.getElementById("fornecedor").value
        };

        //Buscar a "tabela" no localStorage (ou criar vazia)
        let tabela = JSON.parse(localStorage.getItem("servicos")) || [];

        //Colocar o novo registro
        tabela.push(registro);

        //Salvar novamente no localStorage
        localStorage.setItem("servicos", JSON.stringify(tabela));
    }
}
const servicos = new Servicos();
window.calcularTotal = () => servicos.calcularTotal();

//localStorage
window.concluir = () => servicos.concluir();