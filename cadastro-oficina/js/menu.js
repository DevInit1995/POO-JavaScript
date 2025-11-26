class Menu {
    banner = () => {
        let banners = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
        let bannerAtual = 0;
       
        const trocarBanner = () => {
            //debugger
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
    }
}

menu = new Menu();
menu.banner();

