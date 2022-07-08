console.log("Fui carregado de um arquivo externo");

const titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

const pacientes = document.querySelectorAll(".paciente");

const regExp = /,/g;


//substitui o separador decimal "," por "." (padrão americano)
function vigulaParaPonto(valor) {
  if (regExp.test(valor)) {
    valor = valor.replace(regExp, '.');
  }
  return valor;
}

//forEach para inserir o dados de IMC de todos os pacientes
pacientes.forEach(paciente => {

  const tdPeso = paciente.querySelector(".info-peso");
  const tdAltura = paciente.querySelector(".info-altura");

  // conteúdo da tag td
  const peso = vigulaParaPonto(tdPeso.textContent);
  const altura = vigulaParaPonto(tdAltura.textContent);
  // const altura = tdAltura.textContent;

  // Validação de dados
  const tdImc = paciente.querySelector(".info-imc");
  let pesoEhValido = validaPeso(peso);
  let alturaEhValida = validaAltura(altura);

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
  peso = vigulaParaPonto(peso);
  if (peso >= 0 && peso < 1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura) {
  altura = vigulaParaPonto(altura);
  if (altura >= 0 && altura <= 3.00){
    return true;
  }else{
    return false;
  }
}

function calculaImc(peso, altura) {
  let imc = 0 ;
  imc = peso / (altura * altura);
 
  return imc.toFixed(2);
}


