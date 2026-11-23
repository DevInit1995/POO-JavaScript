const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".btnLogon");
const registrarLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconFechar = document.querySelector(".icone-fechar");

debugger
loginLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

/*registrarLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});*/

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconFechar.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});