//const modal = document.querySelector('.modal');
const tbody = document.querySelector('tbody');
//const btnIncluir = document.querySelector('.btnIncluir');

//const idP = document.querySelector('#id');
const nomeCompleto = document.querySelector('#nomeCompleto');
/*const cpf = document.querySelector('#cpf');
const rg = document.querySelector('#rg');
const dataNascimento = document.querySelector('#dataNascimento');

const masculino = document.querySelector('#masculino');
const feminino = document.querySelector('#feminino');

const solteiro = document.querySelector('#solteiro');
const separado = document.querySelector('#separado');
const viuvo = document.querySelector('#viuvo');

const telefone = document.querySelector('#telefone');
const celular = document.querySelector('#celular');
const email = document.querySelector('#email');

const estado = document.querySelector('#estado');
const cidade = document.querySelector('#cidade');
const bairro = document.querySelector('#bairro');
const rua = document.querySelector('#rua');
const numero = document.querySelector('#numero');
const cep = document.querySelector('#cep');
const complemento = document.querySelector('#complemento');

const placa = document.querySelector('#placa');
const marca = document.querySelector('#marca');
const modelo = document.querySelector('#modelo');
const ano = document.querySelector('#ano');
const cor = document.querySelector('#cor');
const chassi = document.querySelector('#chassi');
const kmAtual = document.querySelector('#kmAtual');
const tipoCombustivel = document.querySelector('#tipoCombustivel');
const observacoesVeiculo = document.querySelector('#observacoes');

const dataCadastro = document.querySelector('#dataCadastro');
const historicoServicos = document.querySelector('#historicoServicos');
const dataUltimaVisita = document.querySelector('#dataUltimaVisita');
const observacoesRelacionamento = document.querySelector('#observacoes');*/

let itens;

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
        <td>${item.nomeCompleto}</td>
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
    const cliente = itens[index];
   
    window.open(`clientes.html?id=${cliente.id}`, '_blank');
}

function deleteItem(index) {
    itens.splice(index, 1);
    setItensBD();
    loadItens();
}

/*btnIncluir.addEventListener = (e) => {
    function btnIncluir () {
        window.location.href = 'clientes.html';
    }
}*/

/*function salvarCliente() {  
    const clientes = JSON.parse(localStorage.getItem('clientes')) ?? [];
 
    if (idEdicao) {

        const index = clientes.findIndex(
            cliente => String(cliente.id) === String(idEdicao)
        );

        if (index !== -1) {
            clientes[index] = {
                ...clientes[index],
                ...clienteAtualizado,
                id: clientes[index].id
            };
        }

    } else {
        clientes.push({
            id: Date.now(),
            ...clienteAtualizado
        });
    }

    localStorage.setItem('clientes', JSON.stringify(clientes));
}*/