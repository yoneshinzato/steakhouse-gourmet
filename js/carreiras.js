// pegar o elemento modal
var modal = document.getElementById("simpleModal");
// pegar o botão modal
var modalBtn = document.getElementById("modalBtn");
// pegar o botao fechar
var closeBtn = document.getElementsByClassName("closeBtn")[0];



// parar abrir em Um click
modalBtn.addEventListener('click', openModal);

// para fechar em um click
closeBtn.addEventListener('click', closeModal);

// para fechar quando clicar fora do modal
window.addEventListener('click', clickOutside);



// função para abrir modal
function openModal() {
    modal.style.display = 'block';
}

// função para fechar modal
function closeModal() {
    modal.style.display = 'none';
}

 //função para fechar modal quando clicar fora dele
	function clickOutside(e) {
	 if(e.target == modal) {

	 modal.style.display = 'none';
	}
	   
	 }


