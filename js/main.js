// pegar o elemento modal

var modal = document.getElementById("meuModal");

// pegar o botão modal

var modalBtn = document.getElementById("modalBtn");

// pegar o botao fechar

var fecharBtn = document.getElementsByClassName("fecharBtn")[0];

// parar abrir em Um click
modalBtn.addEventListener('click', abrirModal);

// para fechar quando clicar fora do modal
window.addEventListener('click', clicarFora);

// para fechar em um click
fecharBtn.addEventListener('click', fecharModal);

// função para abrir modal
function abrirModal() {
    modal.style.display = 'block';
}

// função para fechar modal
function fecharModal() {
    modal.style.display = 'none';
}

// função para fechar modal quando clicar fora dele
function clicarFora(e) {
    if(e.target == modal) {

        modal.style.display = 'none';
    }
   
}




