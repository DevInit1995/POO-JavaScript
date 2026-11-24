const tbody = document.querySelector('tbody');

let itens;

const getItensBD = () => JSON.parse(localStorage.getItem('ordem-servicos-cadastro')) ?? [];
const setItensBD = () => localStorage.setItem('ordem-servicos-cadastro', JSON.stringify(itens));

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
        <td>${item.id}</td>
        <td>${item.nomeCompleto}</td>
        <td>${item.cpf}</td>
        <td>${item.email}</td>
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
    const os = itens[index];
   
    window.open(`ordem-servicos.html?id=${os.id}`, '_blank');
}

function deleteItem(index) {
    itens.splice(index, 1);
    setItensBD();
    loadItens();
}