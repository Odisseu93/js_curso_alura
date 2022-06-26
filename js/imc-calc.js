console.log("Fui carregado de um arquivo externo");

var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

//forEach para inserir o dados de IMC de todos os pacientes
pacientes.forEach(paciente => {

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");

  // conteúdo da tag td
  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;


  // Validação de dados
  var tdImc = paciente.querySelector(".info-imc");
  var alturaEhValida = true;
  var pesoEhValido = true;

  if (peso <= 0 || peso > 1000) {
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3) {
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  } else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
  }

});

function calculaImc(peso, altura) {
  var imc = 0 ;
  imc = peso / (altura * altura);

  return imc.toFixed(2)
}