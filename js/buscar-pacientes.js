var botaoAdicionar = document.querySelector('#buscar-pacientes');

botaoAdicionar.addEventListener('click', function () {

  const url = 'https://api-pacientes.herokuapp.com/pacientes'

  // https://www.youtube.com/watch?v=1d5jNmKdwlY
  let response = fetch(url, { method: 'GET' });

  response
    .then(response => response.json())
    .catch(function (error) {
      console.log(error)
      const erroApi = document.querySelector('#erro-api');
      erroApi.classList.remove('invisivel');
    })
    .then(data => data.forEach(paciente => {
      adicionaPacienteTb(paciente);
    })
    );

})