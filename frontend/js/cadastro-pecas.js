//const modal = document.querySelector('.modal');
const tbody = document.querySelector('tbody');

let itens;

const getItensBD = () => JSON.parse(localStorage.getItem('cadastroPecas')) ?? [];
const setItensBD = () => localStorage.setItem('cadastroPecas', JSON.stringify(itens));

function loadItens() {
    itens = getItensBD();
    tbody.innerHTML = '';
    itens.forEach((item, index) => {
        insertItem(item, index);
    });
}

loadItens();

function insertItem(item, index) {
    let tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${item.nomeProduto}</td>
        <td>${item.codigoInterno}</td>
        <td>${item.categoria}</td>
        <td>${item.quantidadeEstoque}</td>
        <td class="acao">
            <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
        </td>
        <td class="acao">
            <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
        </td>
        `
        tbody.appendChild(tr);
}

function editItem(index) {
    const pecas = itens[index];
   
    window.open(`pecas.html?id=${pecas.id}`, '_blank');
}

function deleteItem(index) {
    itens.splice(index, 1);
    setItensBD();
    loadItens();
}