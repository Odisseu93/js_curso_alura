const tabela = document.querySelector("table");


// event.target é aonde foi clicado, enquanto parentNode é o seu  pai
tabela.addEventListener("dblclick", (event) => {
  event.target.parentNode.classList.add("fadeOut"); // adicionando uma animação via classe no CSS
  setTimeout(function () { //define um tempo para executar uma função
    event.target.parentNode.remove();
  }, 500)
});

