class Menu {
    /*banner = () => {
        let banners = ["img/ferramentas.jpg", "img/mecanico.jpg", "img/motor.jpg", "img/roda.jpg"];
        let bannerAtual = 0;
       
        const trocarBanner = () => {
            bannerAtual = (bannerAtual + 1) % banners.length;
            let imgElement = document.querySelector('.destaque img')
            
            if(imgElement){
                imgElement.src = banners[bannerAtual];
            }
            else{
                alert("Elemento de imagem não encontrado")
            }

           setInterval(trocarBanner, 3000);
        }
        trocarBanner();
    }*/

    voltar = () => {
      const botao = document.getElementById('btnVoltar');
      console.log(botao);
      const urlParaAbrir = 'menu2.html';

      botao.addEventListener('click', function() {
        window.open(urlParaAbrir, '_blank');
      });
    }

    /*paginaFuncionariosCadastro = () => {
      const botao = document.getElementById("btnFuncionarios");
      const urlParaAbrir = "funcionarios.html";

      botao.addEventListener('click', function() {
        window.open(urlParaAbrir, '_blank');
      });
    }*/

    paginaClientesCadastro = () => {
      const botao = document.getElementById('btnClientes');
      const urlParaAbrir = 'clientes.html';

      botao.addEventListener('click', function() {
        window.open(urlParaAbrir, '_blank');
      });
    }

    paginaFornecedoresCadastro = () => {
      const botao = document.getElementById('btnFornecedores');
      const urlParaAbrir = 'fornecedores.html';

      botao.addEventListener('click', function() {
        window.open(urlParaAbrir, '_blank');
      });
    }

    paginaCadastroOS = () => {
      const botao = document.getElementById('btnCadastrarOS');
      const urlParaAbrir = 'ordem-servicos-cadastro.html';

      botao.addEventListener('click', function() {
        window.open(urlParaAbrir, '_blank');
      });
    }
}

menu = new Menu();
/*menu.voltar();
menu.paginaClientesCadastro();
menu.paginaCadastroOS();
menu.paginaFornecedoresCadastro();
//menu.banner();*/

document.addEventListener("DOMContentLoaded", () => {
    voltar();
});