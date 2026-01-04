class CadastroServicosPecas {
    paginaCadastroServicosPecas = () => {
        const menu = document.getElementById("menu");
        const urlParaAbrir = "menu.html";

        menu.addEventListener("click", function() {
            window.open(urlParaAbrir, "_blank")
        });
    }
}

const cadastroServicosPecas = new CadastroServicosPecas();
cadastroServicosPecas.paginaCadastroServicosPecas();