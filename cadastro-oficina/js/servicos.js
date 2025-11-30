class Servicos {
    calcularTotal = () => {
        //debugger
        const servico = parseFloat(document.getElementById("servico").value);
        const peca = parseFloat(document.getElementById("peca").value);
        const quantidade = parseFloat(document.getElementById("quantidade").value);

        const totalServico = servico;
        const totalPecas = peca * quantidade;
        const totalGeral = totalServico + totalPecas;

        document.getElementById("totalServico").innerText = totalServico.toFixed(2);
        document.getElementById("totalPecas").innerText = totalPecas.toFixed(2);
        document.getElementById("totalGeral").innerText = totalGeral.toFixed(2);
    }
}
const servicos = new Servicos();
window.calcularTotal = () => servicos.calcularTotal();