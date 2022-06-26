const btnAdcionar = document.querySelector('#adicionar-paciente');

btnAdcionar.addEventListener('click', (e) => {
  e.preventDefault();

  var form = document.querySelector('#form-adiciona');

  var paciente = infoPacienteForm(form);

  // adicionando paciente na tabela
  var pacienteTr = novaLinhaPaciente(paciente);

  var tabela = document.querySelector('#tabela-pacientes');

  // adiciona o novo paciente na tabela
  tabela.appendChild(pacienteTr);

  // a função reset() limpa os campos de input
  form.reset();

});

// resgata as informações inseridas nos inputs e salva no obj paciente
function infoPacienteForm(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

// cria uma nova tr
function novaLinhaPaciente(paciente) {

  var pacienteTr = document.createElement('tr');

  pacienteTr.appendChild(novaCelula(paciente.nome, "info-nome"));
  pacienteTr.appendChild(novaCelula(paciente.peso, "info-peso"));
  pacienteTr.appendChild(novaCelula(paciente.altura, "info-altura"));
  pacienteTr.appendChild(novaCelula(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(novaCelula(paciente.imc, "info-imc"));



  return pacienteTr;

}

function novaCelula(atributo, classe) {
  var td = document.createElement('td');
  // atribuindo valor 
  td.textContent = atributo;
  // adicinando uma classe ao elemento
  td.classList.add(classe)

  return td;
}