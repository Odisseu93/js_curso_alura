console.log("Fui carregado de um arquivo externo");

const titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

const pacientes = document.querySelectorAll(".paciente");

//forEach para inserir o dados de IMC de todos os pacientes
pacientes.forEach(paciente => {

  const tdPeso = paciente.querySelector(".info-peso");
  const tdAltura = paciente.querySelector(".info-altura");

  // conteúdo da tag td
  const peso = tdPeso.textContent;
  const altura = tdAltura.textContent;


  // Validação de dados
  const tdImc = paciente.querySelector(".info-imc");
  const pesoEhValido = validaPeso(peso);
  const alturaEhValida = validaAltura(altura);

  if (!pesoEhValido) {
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValida) {
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida) {
    let imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  } else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
  }

});


function validaPeso(peso) {
  if (peso >=  0 && peso < 1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.00){
    return true;
  }else{
    return false;
  }
}

function calculaImc(peso, altura) {
  let imc = 0 ;
  imc = peso / (altura * altura);

  return imc.toFixed(2)
}