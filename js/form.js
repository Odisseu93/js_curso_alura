const btnAdcionar = document.querySelector('#adicionar-paciente');

btnAdcionar.addEventListener('click', (e) => {
  e.preventDefault();

  const form = document.querySelector('#form-adiciona');

  const paciente = infoPacienteForm(form);

  // adicionando paciente na tabela


  const erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeMensagemDeErro(erros);
    return;
  }
  
  adicionaPacienteTb(paciente);
  // a função reset() limpa os campos de input
  form.reset();
  const mensagensDeErro = document.querySelector('#mensagens-erro')
  mensagensDeErro.innerHTML = "";
});

function adicionaPacienteTb(paciente) {
  const pacienteTr = novaLinhaPaciente(paciente);
  pacienteTr.classList.add('paciente');
  const tabela = document.querySelector('#tabela-pacientes');
  tabela.appendChild(pacienteTr);

}

function exibeMensagemDeErro(erros) {
  const ul = document.querySelector('#mensagens-erro');
  ul.innerHTML = "";
  erros.forEach(erro => {
    const li = document.createElement('li');
    li.textContent = erro;
    ul.appendChild(li);
  });
}

// resgata as informações inseridas nos inputs e salva no obj paciente
function infoPacienteForm(form) {
  const paciente = {
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

  const pacienteTr = document.createElement('tr');

  pacienteTr.appendChild(novaCelula(paciente.nome, "info-nome"));
  pacienteTr.appendChild(novaCelula(paciente.peso, "info-peso"));
  pacienteTr.appendChild(novaCelula(paciente.altura, "info-altura"));
  pacienteTr.appendChild(novaCelula(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(novaCelula(paciente.imc, "info-imc"));



  return pacienteTr;

}

function novaCelula(atributo, classe) {
  const td = document.createElement('td');
  // atribuindo valor 
  td.textContent = atributo;
  // adicinando uma classe ao elemento
  td.classList.add(classe)

  return td;
}


function validaPaciente(paciente) {
  const erros = [];
  if (!validaPeso(paciente.peso)) erros.push(" Peso inválido!");

  if (!validaAltura(paciente.altura)) erros.push("Altura inválida!");

  if (paciente.nome.length == 0) erros.push("Insira algum nome!");

  if (paciente.peso.length == 0) erros.push("o peso não pode ser em branco!");

  if (paciente.altura.length == 0) erros.push("A altura não pode ser em branco!");

  if (paciente.gordura.length == 0) erros.push('"% de Gordura" não pode ser em branco!');

  return erros;
}
