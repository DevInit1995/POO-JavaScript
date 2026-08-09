const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sNome = document.querySelector('#m-nome');
const sFuncao = document.querySelector('#m-funcao');
const sEmail = document.querySelector('#m-email');
const sContato = document.querySelector('#m-contato');
const btnSalvar = document.querySelector('#btnSalvar');

let itens;
let id;

const getItensBD = () => JSON.parse(localStorage.getItem('dbfun')) ?? [];
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens));

function loadItens() {
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
        insertItem(item, index)
    });
}

loadItens();

function insertItem(item, index) {
    let tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${item.nome}</td>
        <td>${item.funcao}</td>
        <td>${item.email}</td>
        <td>${item.contato}</td>
        <td class="acao">
            <button onclick="editItem(${index})"><i class='bx bx-edit' >
        <i/></button>
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

/*function openModal(edit = false, index = 0) {
    modal.classList.add('active');

    modal.onclick = e => {
        if(e.target.className.indexOf('modal-container') !== -1) {
            modal.classList.remove('active');
        }
    }

    if (edit) {
        sNome.value = itens[index].nome;
        sFuncao.value = itens[index].funcao;
        sEmail.value = itens[index].email;
        sContato.value = itens[index].contato;
        id = index;
    } else {
        sNome.value = '';
        sFuncao.value = '';
        sEmail.value = '';
        sContato.value = '';
    }
}*/

/*btnSalvar.onclick = e => {
    if(sNome.value == '' || sFuncao.value == '' || 
        sEmail.value == '' || sContato.value == '') {
            return;
    }

    e.preventDefault();

    if(id !== undefined) {
        itens[id].nome = sNome.value;
        itens[id].funcao = sFuncao.value;
        itens[id].email = sEmail.value;
        itens[id].contato = sContato.value;
    } else {
        itens.push({'nome': sNome.value, 'funcao': sFuncao.value,
            'email': sEmail.value, 'contato': sContato.value
        });
    }

    setItensBD();

    modal.classList.remove('active');
    loadItens();
    id = undefined;
}*/