const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody');
const sNome = document.querySelector('#m-nome');
const sEmail = document.querySelector('#m-email');
const sCelular = document.querySelector('#m-celular');
const sDataCadastro = document.querySelector('#m-data-cadastro');

let itens;
let ids;

const getItensBD = () => JSON.parse(localStorage.getItem('clientes')) ?? [];
const setItensBD = () => localStorage.setItem('clientes', JSON.stringify(itens));

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
        <td>${item.nome}</td>
        <td>${item.email}</td>
        <td>${item.celular}</td>
        <td>${item.dataCadastro}</td>
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
    openModal(true, index);
}

function deleteItem(index) {
    itens.splice(index, 1);
    setItensBD();
    loadItens();
}

function openModal(edit = false, index = 0) {
    modal.classList.add('active');

    modal.onclick = e => {
        if(e.target.className.indexOf('modal-container') !== -1) {
            modal.classList.remove('active');
        }
    }

    if (edit) {
        sNome.value = itens[index].nome;
        sEmail.value = itens[index].email;
        sCelular.value = itens[index].celular;
        sDataCadastro.value = itens[index].dataCadastro;
        ids = index;
    } else {
        sNome.value = '';
        sEmail.value = '';
        sCelular.value = '';
        sDataCadastro.value = '';
    }
}

btnConcluir.onclick = (e) => {
    if(sNome.value == '' || sEmail.value == '' || 
    sCelular.value == '' || sDataCadastro.value == '') {
            return;
    }

    e.preventDefault();

    if(id !== undefined) {
        itens[id].nome = sNome.value;
        itens[id].email = sEmail.value;
        itens[id].celular = sCelular.value;
        itens[id].dataCadastro = sDataCadastro.value;
    } else {
        itens.push({'nome': sNome.value, 'email': sEmail.value, 
            'celular': sCelular.value, 'dataCadastro': sDataCadastro.value
        });
    }

    setItensBD();

    modal.classList.remove('active');
    loadItens();
    id = undefined;
}