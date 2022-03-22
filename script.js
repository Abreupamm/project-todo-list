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
  const temClase = document.getElementsByClassName('cor');
  if (temClase.length > 0) {
    for (let i = 0; i < temClase.length; i += 1) {
      temClase[i].classList.remove('cor');
    }
  }
  const selected = event.target;
  selected.classList.add('cor');
}

const tarefaSelected = document.getElementById('lista-tarefas');
tarefaSelected.addEventListener('click', mudaCor);

function tachada(event) {
  const t = event.target;
  const riscada = document.getElementsByClassName('completed');
  if (riscada.length > 0 && t.classList.contains('completed')) {
    t.classList.remove('completed');
  } else {
    t.classList.add('completed');
  }
}

const tarefaSelected2 = tarefaSelected;
tarefaSelected2.addEventListener('dblclick', tachada);
