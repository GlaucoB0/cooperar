// significa que sempre que você rolar a janela do navegador, a função scrollFunction() será acionada
window.onscroll = function() {scrollFunction()};

// é a função que será chamada quando você rolar a janela, ela contém uma série de instruções que serão executadas
function scrollFunction() {
// é uma condição que verifica se a posição de rolagem da janela é maior que 80 pixels a partir do topo. Se for verdade, o código dentro das chaves será executado.
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // as linhas de códigos a seguir irão alterar o tamanho original (os que estão no css) dos elementos selecionados para os valores informados
    // getElementById = pegar elemento pelo id
    document.getElementById("header").style.padding = "10px 10px";
    document.getElementById("user-msg").style.padding = "5px 10px";
    document.getElementById("user-icon").style.width = "50px";
    document.getElementById("nome-logo").style.fontSize = "12px";
    document.getElementById("img-logo").style.width = "50px";    
    document.getElementById("img-logo").style.height = "35px";    

  } 
  else {
    // aqui, manterão o mesmo tamanho que o original
    document.getElementById("header").style.padding = "20px 10px";
    document.getElementById("user-msg").style.padding = "5px 10px";
    document.getElementById("user-icon").style.width = "75px";
    document.getElementById("nome-logo").style.fontSize = "24px";
    document.getElementById("img-logo").style.width = "97px";    
    document.getElementById("img-logo").style.height = "61px";
  }
}