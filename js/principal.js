console.log("Fui carregado de um arquivo externo");

var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";


var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

// conteúdo da tag td
var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

//formula do IMC
// var imc = peso / (altura * altura);

//acessando a coluna do IMC no HTML
//var tdImc = paciente.querySelector(".info-imc");

//inserindo o valor calculado dentro de .info-imc
// tdImc.textContent = imc;

// peso = 9000;


// Validação de dados
var tdImc = paciente.querySelector(".info-imc");
var alturaEhValida = true;
var pesoEhValido = true;

if (peso <= 0 || peso > 1000) {
  console.log("Peso inválido");
  tdImc.textContent = "Peso inválido!";
  pesoEhValido = false;
}

if (altura <= 0 || altura >= 3) {
  console.log("Altura inválida");
  tdImc.textContent = "Altura inválida!";
  alturaEhValida = false;
}

if (pesoEhValido && alturaEhValida) {
  var imc = peso / (altura * altura);
  tdImc.textContent = imc;
} else {
  tdImc.textContent = "Altura e/ou peso inválidos!"
}  
