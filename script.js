function criarTarefa() {
  const tarefa = document.createElement('li');
  const tarefa1 = document.querySelector('#texto-tarefa');
  const texto = tarefa1.value;
  tarefa.innerText = texto;

  const lista = document.getElementById('lista-tarefas');
  lista.appendChild(tarefa);
  tarefa1.value = '';
}

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', criarTarefa);

function mudaCor(event) {
  const selected = event.target;
  selected.classList = '';
  selected.classList.add('cor');
}
const tarefaSelected = document.getElementById('lista-tarefas');
tarefaSelected.addEventListener('click', mudaCor);
