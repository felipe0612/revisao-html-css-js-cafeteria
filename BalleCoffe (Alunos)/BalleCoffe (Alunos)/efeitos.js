// Efeito (Direita p/ esquerda) do container principal

// Seleciona o elemento com a classe 'container'
const container = document.querySelector('.container');

// Adiciona uma classe 'slide-from-right' ao elemento quando a página é carregada
window.addEventListener('load', function() {
    container.classList.add('slide-from-right');
});

// ________________________________________________________________________________
// Responsividade (Header)

// Função JS para toggle menu 
  
  // Obtém a referência do elemento com o ID "MenuItems"
  var MenuItems = document.getElementById("MenuItems");

  // Define a altura máxima do estilo do elemento MenuItems como "0px"
  MenuItems.style.maxHeight = "0px";

  // Define uma função chamada menutoggle
  function menutoggle() {
    // Verifica se a altura máxima do estilo do elemento MenuItems é "0px"
    if (MenuItems.style.maxHeight == "0px") {
      // Se for "0px", define a altura máxima do estilo do elemento MenuItems como "200px"
      MenuItems.style.maxHeight = "200px";
    } else {
      // Caso contrário, se não for "0px", define a altura máxima do estilo do elemento MenuItems como "0px"
      MenuItems.style.maxHeight = "0px";
    }
  }