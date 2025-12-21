: Sistema de Oficina Mecânica - PDV

Este projeto é um sistema de gerenciamento e frente de caixa (PDV) voltado
para oficinas mecânicas de pequeno porte.

O sistema permite o cadastro de clientes, veículos, serviços e peças, 
gerando ordens de serviço (OS) e realizando o fechamento de caixa de forma simples.


Objetivo do projeto

- objetivo deste projeto é praticar:
- Lógica de programação
- Organização de código em camadas
- Programação orientada a objetos
- Simulação de um sistema real utilizado por oficinas


3️⃣ Funcionalidades

## ⚙️ Funcionalidades

- Cadastro de clientes
- Cadastro de veículos
- Cadastro de serviços
- Cadastro de peças
- Criação de ordens de serviço (OS)
- Cálculo automático de valores


- [ ] Controle de estoque (em desenvolvimento)
- [ ] Frente de Caixa (PDV)
- [ ] Relatórios simples de vendas


## 🗂️ Estrutura do Projeto

pdv-oficina/
├── frontend/
│   ├── pages/
│   ├── css/
│   └── js/
│       ├── models/
│       ├── controllers/
│       └── services/


5️⃣ Tecnologias Utilizadas


## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Programação Orientada a Objetos
- LocalStorage (persistência de dados)


Futuramente backend:

- Node.js
- Express
- Banco de Dados SQL


## 📌 Regras de Negócio

- Uma ordem de serviço deve estar vinculada a um cliente e a um veículo
- Uma OS pode conter múltiplos serviços e peças
- O valor total da OS é a soma dos serviços e das peças
- Uma venda só pode ser finalizada se houver itens na OS


️⃣ Como Executar o Projeto


## ▶️ Como Executar

1. Clone o repositório
2. Abra o arquivo menu.html no navegador
3. Utilize o menu para navegar entre as funcionalidades



## 🚀 Melhorias Futuras

- Autenticação de usuários
- Controle de estoque automático
- Integração com banco de dados
- Emissão de relatórios avançados


🔟 Autor

## 👨‍💻 Autor

Desenvolvido por Jhon Kennedy Alves dos Santos
Projeto de estudo em desenvolvimento de sistemas e lógica de programação.
