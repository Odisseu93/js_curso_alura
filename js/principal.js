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
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  } else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
  }

});

const btnAdcionar = document.querySelector('#adicionar-paciente');

btnAdcionar.addEventListener('click', (e) => {
  e.preventDefault();

  var form = document.querySelector('#form-adiciona');

  var nome = form.nome.value
  var peso = form.peso.value
  var altura = form.altura.value
  var gordura = form.gordura.value

  // console.log(`Nome: ${nome}, Peso: ${peso}KG, Altura: ${altura}m, Gordura: ${gordura}BF`);

  // criando os elementos
  var pacienteTr = document.createElement('tr');
  var nomeTd = document.createElement('td');
  var pesoTd = document.createElement('td');
  var alturaTd = document.createElement('td');
  var gorduraTd = document.createElement('td');

  
  // setando os atributos dos elementos
  pacienteTr.setAttribute('class','paciente');
  nomeTd.setAttribute('class','info-nome');
  pesoTd.setAttribute('class','info-peso');
  alturaTd.setAttribute('class','info-altura');
  gorduraTd.setAttribute('class','info-gordura');
  

// atribuindo valor ao elementos
  nomeTd.textContent = nome; 
  pesoTd.textContent = peso; 
  alturaTd.textContent = altura; 
  gorduraTd.textContent = gordura; 
  // imcTd.textContent = imc; 

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  var tabela = document.querySelector('#tabela-pacientes');
  
  tabela.appendChild(pacienteTr);

  
});