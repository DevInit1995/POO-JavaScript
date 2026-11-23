const tbody = document.querySelector('tbody');


let itens;

const getItensBD = () => JSON.parse(localStorage.getItem('fornecedores')) ?? [];
const setItensBD = () => localStorage.setItem('fornecedores', JSON.stringify(itens));

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
        <td>${item.razaoSocial}</td>
        <td>${item.nomeFantasia}</td>
        <td>${item.cnpj}</td>
        <td>${item.inscricaoEstadual}</td>
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
    const fornecedor = itens[index];
   
    window.open(`fornecedores.html?id=${fornecedor.id}`, '_blank');
}

function deleteItem(index) {
    itens.splice(index, 1);
    setItensBD();
    loadItens();
}