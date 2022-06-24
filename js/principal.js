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
var imc = peso / (altura * altura);

//acessando a coluna do IMC no HTML
var tdImc = paciente.querySelector(".info-imc");

//inserindo o valor calculado dentro de .info-imc
tdImc.textContent = imc;