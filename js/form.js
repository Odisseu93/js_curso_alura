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
  pacienteTr.classList.add('paciente');
  nomeTd.classList.add('info-nome');
  pesoTd.classList.add('info-peso');
  alturaTd.classList.add('info-altura');
  gorduraTd.classList.add('info-gordura');
  nomeTd.setAttribute("class","valo")

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